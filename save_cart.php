<?php
// save_cart.php
// Expects JSON POST with: product_id, title, image, size, qty, price
header('Content-Type: application/json');
include 'db.php';
session_start();

$user_id = isset($_SESSION['user_id']) ? intval($_SESSION['user_id']) : 0;
if(!$user_id){ http_response_code(401); echo json_encode(['error'=>'Not authenticated']); exit; }

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if(!$data){ http_response_code(400); echo json_encode(['error'=>'Invalid JSON']); exit; }

$product_id = isset($data['product_id']) ? $data['product_id'] : '';
$title = isset($data['title']) ? $data['title'] : '';
$image = isset($data['image']) ? $data['image'] : '';
$size = isset($data['size']) ? $data['size'] : '';
$qty = isset($data['qty']) ? intval($data['qty']) : 1;
$price = isset($data['price']) ? $data['price'] : '';

try{
    // create table if not exists
    $pdo->exec("CREATE TABLE IF NOT EXISTS cart_items (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        product_id VARCHAR(191) NOT NULL,
        title VARCHAR(255) NOT NULL,
        image TEXT,
        size VARCHAR(50),
        qty INT NOT NULL DEFAULT 1,
        price VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        UNIQUE KEY uniq_item (user_id, product_id, size)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;");

    // try update existing
    $stmt = $pdo->prepare('SELECT id, qty FROM cart_items WHERE user_id = ? AND product_id = ? AND size = ?');
    $stmt->execute([$user_id, $product_id, $size]);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    if($row){
        $newQty = max(1, $row['qty'] + $qty);
        $u = $pdo->prepare('UPDATE cart_items SET qty = ?, title = ?, image = ?, price = ? WHERE id = ?');
        $u->execute([$newQty, $title, $image, $price, $row['id']]);
        echo json_encode(['status'=>'updated','id'=>$row['id'],'qty'=>$newQty]);
        exit;
    }

    $ins = $pdo->prepare('INSERT INTO cart_items (user_id, product_id, title, image, size, qty, price) VALUES (?, ?, ?, ?, ?, ?, ?)');
    $ins->execute([$user_id, $product_id, $title, $image, $size, $qty, $price]);
    echo json_encode(['status'=>'inserted','id'=>$pdo->lastInsertId()]);
    exit;
}catch(PDOException $e){
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
    exit;
}

?>
