<?php

require_once 'database_connection.php';

class DataFetcher {
    private $connection;

    public function __construct($connection) {
        $this->connection = $connection;
    }

    public function fetchData() {
        try {
            $statement = $this->connection->prepare("SELECT * FROM tbl_sample ORDER BY id");

            if ($statement->execute()) :
                $data = [];

                while ($row = $statement->fetch(PDO::FETCH_ASSOC)) :
                    $data[] = $row;
                endwhile;

                return $data;
            endif;
        }catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }

    }
}

// Sử dụng:

$db = DatabaseConnection::getInstance();
$connection = $db->getConnection();

$dataFetcher = new DataFetcher($connection);
$result = $dataFetcher->fetchData();
echo json_encode($result);
//var_dump($result);
?>