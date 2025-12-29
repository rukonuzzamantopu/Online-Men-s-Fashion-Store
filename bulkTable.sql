USE user_auth;

CREATE TABLE bulk_orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(20),
    company VARCHAR(150),
    product_type VARCHAR(100),
    quantity VARCHAR(50),
    design_file VARCHAR(255),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
