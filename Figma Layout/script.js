document.addEventListener("DOMContentLoaded", function () {
    // Get form and input elements
    const form = document.getElementById("regisration");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const signBtn = document.getElementById("sign-log");
    const loginBtn = document.getElementById("sumbit-log");

    // Handle "Sign In" button (top button)
    signBtn.addEventListener("click", function (e) {
        e.preventDefault();
        form.scrollIntoView({ behavior: "smooth" });
        emailInput.focus();
    });

    // Handle login form submission
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }

        // Demo: Show success message
        alert(`Welcome, ${email}! (Demo only, no real login performed.)`);
        // You can add your authentication logic here
        form.reset();
    });

    // Optional: Handle "Continue with Google" and "Continue with Facebook"
    document.querySelectorAll('.login-type').forEach(btn => {
        btn.addEventListener('click', function () {
            alert('Third-party login is not implemented in this demo.');
                    });
    });
});
