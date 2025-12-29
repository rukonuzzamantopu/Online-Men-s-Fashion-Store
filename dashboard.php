<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    header('Location: login.php');
    exit;
}

include 'db.php';
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>New In Stock</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- Optional Google Font -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css" />

    <link rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
      crossorigin="anonymous" referrerpolicy="no-referrer" />

       <style>
        
        .welcome { margin-bottom: 20px;
        max-width: 800px; margin: 0 auto; padding: 20px;
        background-color: #cce49cff; border: 1px solid #ddd; border-radius: 5px;
        text-align: center;
     }
        .logout { color: red; text-decoration: none; }
    </style>
</head>
<body>

    <!-- Top Offer Bar -->
    <div class="top-bar">
        <div class="top-bar__content">
            <div class="top-bar__left">
                Coupon: <strong>"A50"</strong> above 1999TK
            </div>
            <div class="top-bar__right">
                <a href=track.html>Track Order</a>
                <a href="bulk-order.html">Bulk Order</a>
                <a href="login.php">Login</a>
            </div>
        </div>
    </div>
    
    <!-- Main Navigation -->
    <header class="main-header">
        <div class="main-header__inner">
            <div class="logo">
                uniCloth
            </div>
            <nav class="nav-links">
                    <a href="index.html">Home</a>
                    <a href="flash-sale.html">Flash Sale</a>
                    <a href="polo.html">Polo</a>
                    <a href="best-seller.html">Best Seller</a>
                <a href="#">Limited Edition</a>
                <div class="nav-dropdown">
                    <button class="nav-dropdown__btn">Store ▾</button>
                    <div class="nav-dropdown__menu">
                        <a href="#">T Shirt</a>
                        <a href="#">Winter Collection</a>
                        <a href="#">Accessories</a>
                    </div>
                </div>
            </nav>
            <button class="nav-toggle" aria-label="Toggle navigation">
                ☰
            </button>
        </div>
    </header>

   <!-- Category Tabs -->
<section class="category-tabs wrapper">
    <a href="new-in.html">
        <button class="tab active">NEW IN</button>
    </a>
    <a href="best-seller.html">
        <button class="tab">Best Seller</button>
    </a>
    <a href="premium.html">
        <button class="tab">Premium</button>
    </a>
</section>


<div class="welcome">
        <h2>Welcome, <?php echo htmlspecialchars($_SESSION['username']); ?>!</h2>
        <p>You're now logged in to your account.</p>
        <br>
        <a href="logout.php" class="logout">Logout</a>
    </div>
    







 <!-- Floating Cart Button -->
    <button class="cart-fab" aria-label="Cart">
        🛒
    </button>

 <footer class="site-footer">
    <div class="wrapper footer-inner">

                <!-- Pay With Row -->
        <div class="paywith-row">
            <span class="paywith-label">Pay With</span>

            <div class="paywith-logos">
                <!-- use your real icons; these are placeholders -->
                <img src="image/icons8-visa-card-32.png" alt="Visa">
                <img src="image/master card_16174534 (1).png" alt="Mastercard">
                <img src="image/icons8-american-express-32.png" alt="American Express">
                <img src="image/nexus-pay-logo-dbbl-mobile-banking-app-icon-free-png.webp" alt="DBBL Nexus">
                <img src="image/bkash-logo-png_seeklogo-273684.png" alt="bKash">
                <img src="image/dutch-bangla-rocket.jpg" alt="Rocket">
                <img src="image/upay-logo-png_seeklogo-404483.png" alt="UPay">
                <img src="image/new-logo.7939432.png" alt="Nagad">
                <!-- add more logos if you want -->
            </div>

            <div class="paywith-secured">
                <span>Verified by</span>
                <img src="image/sslcommerz logo.png" alt="SSLCommerz">
            </div>
        </div>

      <!-- Social Icons -->
<div class="footer-social">
    <!-- Facebook -->
    <a href="https://www.facebook.com/rukonu.zzaman"
       target="_blank" rel="noopener noreferrer">
        <i class="fab fa-facebook-f"></i>
    </a>

    <!-- Instagram -->
    <a href="https://www.instagram.com/rukonu_zzaman/"
       target="_blank" rel="noopener noreferrer">
        <i class="fab fa-instagram"></i>
    </a>

    <!-- WhatsApp (phone in full international format, no +, no 0) -->
    <a href="https://wa.me/8801330885039"
       target="_blank" rel="noopener noreferrer">
        <i class="fab fa-whatsapp"></i>
    </a>

    <!-- LinkedIn -->
    <a href="https://www.linkedin.com/in/rukonuzzaman-topu-163582294/"
       target="_blank" rel="noopener noreferrer">
        <i class="fab fa-linkedin-in"></i>
    </a>
</div>


        <!-- Footer links with separators -->
        <nav class="footer-links">
            <a href="about-us.html">About Us</a>
            <span class="sep">|</span>
            <a href="privacy-policy.html">Privacy Policy</a>
            <span class="sep">|</span>
            <a href="terms-condition.html">Terms and Condition</a>
            <span class="sep">|</span>
            <a href="franchise-shop.html">Franchise Shop</a>
            <span class="sep">|</span>
            <a href="store-locator.html">Store Locator</a>
            <span class="sep">|</span>
            <a href="request-a-design-exchange.html">Request a Design</a>
            <span class="sep">|</span>
            <a href="request-a-design-exchange.html">Exchange</a>
            <span class="sep">|</span>
            <a href="refund-return-policy.html">Refund, Returns &amp; Cancellation Policy</a>
            <span class="sep">|</span>
            <a href="contact-us.html">Contact Us</a>
        </nav>

        <p class="footer-copy">
            Copyright © 2025 Topu | Proudly Made in Bangladesh
        </p>
    </div>
</footer>


    <script src="script.js"></script>
</body>
</html>
