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


    // track ordeer

    const trackOrderBtn = document.getElementById("trackOrderBtn");

trackOrderBtn.addEventListener("click", function() {
    const orderId = document.getElementById("orderId").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();

    if (!orderId || !phoneNumber) {
        alert("Please enter both Order ID and Phone Number.");
        return;
    }

    // Simulate an order status check (this can later be replaced by an API call)
    const statusArea = document.querySelector(".order-status");
    const complainArea = document.querySelector(".complain");

    // Show the order status area after submission
    statusArea.style.display = "block";
    complainArea.style.display = "block";

    // Simulate order status
    const statusMessage = `Your order ${orderId} is in processing stage. Please wait while we verify your order details.`;
    alert(statusMessage);

    // You can replace the above alert with the actual order status fetched from a backend.
});
