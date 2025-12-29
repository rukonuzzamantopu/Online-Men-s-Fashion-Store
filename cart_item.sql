CREATE TABLE cart_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    product_id VARCHAR(191) NOT NULL,
    title VARCHAR(255) NOT NULL,
    image TEXT,
    size VARCHAR(50),
    qty INT NOT NULL DEFAULT 1,
    price VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY uniq_item (user_id, product_id, size),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
