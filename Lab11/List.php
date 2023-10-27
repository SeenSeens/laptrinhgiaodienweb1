<?php
require_once "Connect.php";
class DataFetcher {
    private $connection;
    public function __construct($connection) {
        $this->connection = $connection;
    }
    public function fetchData() {
       try {
            $statement = $this->connection->prepare("SELECT * FROM SINHVIEN");
            if ($statement->execute()) {
                $data = [];
                while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
                    $data[] = $row;
                }
                return json_encode($data);
            }
       } catch (PDOException $e) {
           echo "Error: " . $e->getMessage();
       }
    }
}

// Sử dụng:

$db = Connection::getInstance();
$connection = $db->getConnection();

$dataFetcher = new DataFetcher($connection);
$result = $dataFetcher->fetchData();
echo $result;
var_dump($result);
$db->closeConnection();
?>