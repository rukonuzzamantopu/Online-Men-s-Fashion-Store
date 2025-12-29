<?php
// get_cart.php - returns JSON list of cart items for logged-in user
header('Content-Type: application/json');
include 'db.php';
session_start();
$user_id = isset($_SESSION['user_id']) ? intval($_SESSION['user_id']) : 0;
if(!$user_id){ http_response_code(401); echo json_encode(['error'=>'Not authenticated']); exit; }

try{
    $stmt = $pdo->prepare('SELECT id, product_id, title, image, size, qty, price FROM cart_items WHERE user_id = ? ORDER BY created_at DESC');
    $stmt->execute([$user_id]);
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode(['items'=>$rows]);
    exit;
}catch(PDOException $e){
    http_response_code(500);
    echo json_encode(['error'=>$e->getMessage()]);
    exit;
}

?>
