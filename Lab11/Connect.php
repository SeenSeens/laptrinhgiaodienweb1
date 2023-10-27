<?php
class Connection {
    private static $instance = null;
    private $connection;
    private $host = "localhost";
    private $dbname = "qlsv";
    private $username = "root";
    private $password = "12345678";
    private function __construct() {
        try {
            $this->connection = new PDO("mysql:host=$this->host;dbname=$this->dbname", $this->username, $this->password);
            $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            echo "Connected";
        } catch (PDOException $e) {
            die("Connection failed: " . $e->getMessage());
        }
    }
    public static function getInstance() {
        if (self::$instance == null) {
            self::$instance = new Connection();
        }
        return self::$instance;
    }
    public function getConnection() {
        return $this->connection;
    }
    // Phương thức để đóng kết nối PDO đến cơ sở dữ liệu
    public function closeConnection() {
        $this->connection = null;
    }
}
?>