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
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
        .welcome { margin-bottom: 20px; }
        .logout { color: red; text-decoration: none; }
    </style>
</head>
<body>
    <div class="welcome">
        <h2>Welcome, <?php echo htmlspecialchars($_SESSION['username']); ?>!</h2>
        <p>You're now logged in to your account.</p>
    </div>
    <a href="logout.php" class="logout">Logout</a>
</body>
</html>