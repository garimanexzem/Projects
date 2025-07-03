const bookNameInput = document.getElementById("bookname");
const bookUrlInput = document.getElementById("bookurl");
const addBookmarkBtn = document.getElementById("add-bookmark");
const bookmarkList = document.getElementById("bookmark-list");

document.addEventListener("DOMContentLoaded", loadBookmarks);


addBookmarkBtn.addEventListener("click", function () {
    const bookName = bookNameInput.value.trim();
    const bookUrl = bookUrlInput.value.trim();

    if (!bookName || !bookUrl) {
        alert("Please enter both name and URL.");
        return;
    } else {
        if (!bookUrl.startsWith("http://") && !bookUrl.startsWith("https://")) {
            alert("Please enter a valid URL.");
            return
        }
        displayBookmark(bookName, bookUrl);  

        saveBookmark(bookName, bookUrl);
        bookNameInput.value = "";
        bookUrlInput.value = "";
    }
});

function displayBookmark(bookName, bookUrl) {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = bookUrl;
    link.textContent = bookName;
    link.target = "_blank"; // Open in new tab

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function () {
       bookmarkList.removeChild(li);
        removeBookmarkFromStorage(bookName, bookUrl);
    });

    li.appendChild(link);
    li.appendChild(removeButton);
    bookmarkList.appendChild(li);
}
 
function getBookmarksFromStorage() {
    const bookmarks = localStorage.getItem("bookmarks");
    return bookmarks ? JSON.parse(bookmarks) : [];
}
 
function addBookmark(bookName, bookUrl) {
    const bookmarks = getBookmarksFromStorage();
    bookmarks.push({ name: bookName, url: bookUrl });
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

function loadBookmarks() {
    const bookmarks = getBookmarksFromStorage();
    bookmarks.forEach(bookmark => {
        addBookmark(bookmark.name, bookmark.url);
    });
}

function removeBookmarkFromStorage(bookName, bookUrl) {
    const bookmarks = getBookmarksFromStorage();
    const updatedBookmarks = bookmarks.filter(bookmark => bookmark.name !== bookName || bookmark.url !== bookUrl);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
}