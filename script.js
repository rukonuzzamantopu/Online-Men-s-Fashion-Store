// mobile nav toggle
const headerInner = document.querySelector(".main-header__inner");
const toggleBtn = document.querySelector(".nav-toggle");

if (toggleBtn && headerInner) {
    toggleBtn.addEventListener("click", () => {
        headerInner.classList.toggle("nav-open");
    });
}

// simple dropdown for "Store"
const dropdownBtn = document.querySelector(".nav-dropdown__btn");
const dropdownMenu = document.querySelector(".nav-dropdown__menu");

if (dropdownBtn && dropdownMenu) {
    dropdownBtn.addEventListener("click", () => {
        dropdownMenu.style.display =
            dropdownMenu.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", (e) => {
        if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.style.display = "none";
        }
    });
}

// size button active state
document.querySelectorAll(".product-card").forEach((card) => {
    const sizeButtons = card.querySelectorAll(".size-btn");
    sizeButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            sizeButtons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
        });
    });
});

// tabs just visual (no filtering yet)
document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
        document
            .querySelectorAll(".tab")
            .forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
    });
});


// login page scripts

// Password Toggle Functionality
function togglePassword() {
    const passwordField = document.getElementById("password");
    const type = passwordField.type === "password" ? "text" : "password";
    passwordField.type = type;
}

// Toggle between Login and Register Forms (optional)
const toggleFormBtn = document.querySelector(".forgot-password a");
toggleFormBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const formContainer = document.querySelector(".auth-form-container");
    formContainer.classList.toggle("active");
});
