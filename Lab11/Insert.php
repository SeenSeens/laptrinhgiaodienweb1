<?php

require_once 'Connect.php';

class DataInsertHandler {
    private $connection;

    public function __construct($connection) {
        $this->connection = $connection;
    }

    public function handleRequest($form_data) {
        $error = '';
        $message = '';
        $validation_error = '';
        $first_name = '';
        $last_name = '';

        try {
            if (empty($form_data->first_name)) :
                $error[] = 'First Name is Required';
            else :
                $first_name = $form_data->first_name;
            endif;

            if (empty($form_data->last_name)) :
                $error[] = 'Last Name is Required';
            else :
                $last_name = $form_data->last_name;
            endif;

            if (empty($error)) :
                if ($form_data->action === 'Insert') :
                    $data = [
                        ':first_name' => $first_name,
                        ':last_name' => $last_name
                    ];
                    $query = "INSERT INTO sinhvien (first_name, last_name) VALUES (:first_name, :last_name)";
                    $statement = $this->connection->prepare($query);
                    if ($statement->execute($data)) :
                        $message = 'Data Inserted';
                    endif;
                endif;

            else :
                $validation_error = implode(", ", $error);
            endif;

            $output = [
                'error' => $validation_error,
                'message' => $message
            ];

            return json_encode($output);
        }catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }

    }
}

$db = DatabaseConnection::getInstance();
$connection = $db->getConnection();
$dataHandler = new DataInsertHandler($connection);
$form_data = json_decode(file_get_contents("php://input"));
$result = $dataHandler->handleRequest($form_data);
echo $result;
$db->closeConnection();
?>