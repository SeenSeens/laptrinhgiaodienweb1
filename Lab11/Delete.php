<?php

require_once 'Connect.php';
class DataDeleteHandler {
    private $connection;
    public function __construct($connection) {
        $this->connection = $connection;
    }
    public function handleRequest($form_data) {
        $output = [];
        $message = '';
        $validation_error = '';
        try {
            if ($form_data->action === "Delete") :
                $query = "DELETE FROM sinhvien WHERE id = :id";
                $statement = $this->connection->prepare($query);
                $statement->bindParam(':id', $form_data->id, PDO::PARAM_INT);
                if ($statement->execute()) :
                    $output['message'] = 'Data Deleted';
                endif;
            else :
                $output = [
                    'error' => $validation_error,
                    'message' => $message
                ];
            endif;
            return json_encode($output);
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }

    }
}

$db = DatabaseConnection::getInstance();
$connection = $db->getConnection();
$dataHandler = new DataDeleteHandler($connection);
$form_data = json_decode(file_get_contents("php://input"));
$result = $dataHandler->handleRequest($form_data);
echo $result;
$db->closeConnection();
?>