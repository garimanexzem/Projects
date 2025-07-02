const cards = document.querySelectorAll(".card");
const lists = document.querySelectorAll(".list");

for (const card of cards){
    card.addEventListener("dragstart", dragStart);
    card.addEventListener("dragend", dragEnd);
}

for (const list of lists){
    list.addEventListener("dragover", dragOver);
    list.addEventListener("dragenter", dragEnter);
    list.addEventListener("dragleave", dragleave);
    list.addEventListener("drop", dragDrop);
}

function dragStart(e) {
    // this allows the drop location to know which element is being moved when you release it.
    e.dataTransfer.setData("text/plain",this.id);
}

function dragEnd() {
    // this is called when the drag operation ends, it can be used to reset styles or perform cleanup.
    console.log ("Drag Ended");
}

function dragOver(e) {
    // this prevents the default behavior of the browser, which is to not allow dropping.
    e.preventDefault();
}

function dragEnter(e) {
    // this is called when the dragged element enters the drop target.
    e.preventDefault();
    this.classList.add("over");
}

function dragleave() {
    // this is called when the dragged element leaves the drop target.
    this.classList.remove("over");
}

function dragDrop(e) {
    // this is called when the dragged element is dropped on the drop target.
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    const card = document.getElementById(id);
    this.appendChild(card);
    this.classList.remove("over");
}