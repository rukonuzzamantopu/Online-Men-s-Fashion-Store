<?php
include "db.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $company = $_POST['company'] ?? '';
    $productType = $_POST['productType'] ?? '';
    $quantity = $_POST['quantity'] ?? '';
    $details = $_POST['details'] ?? '';

    // File upload
    $fileName = null;
    if (!empty($_FILES['file']['name'])) {
        if (!is_dir("uploads")) {
            mkdir("uploads", 0755, true);
        }
        $fileName = time() . "_" . basename($_FILES['file']['name']);
        move_uploaded_file($_FILES['file']['tmp_name'], "uploads/" . $fileName);
    }

    $sql = "INSERT INTO bulk_orders 
        (name, email, phone, company, product_type, quantity, design_file, description)
        VALUES 
        (:name, :email, :phone, :company, :product_type, :quantity, :design_file, :description)";

    $stmt = $pdo->prepare($sql);

  $stmt->execute([
    ':name' => $name,
    ':email' => $email,
    ':phone' => $phone,
    ':company' => $company,
    ':product_type' => $productType,
    ':quantity' => $quantity,
    ':design_file' => $fileName,
    ':description' => $details
]);

header("Location: success.php");
exit;
</script>";
}
?>
