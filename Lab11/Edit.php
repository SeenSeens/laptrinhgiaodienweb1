<?php
require_once 'Connect.php';
class DataEditHandler
{
    private $connection;

    public function __construct($connection)
    {
        $this->connection = $connection;
    }

    public function handleRequest($form_data)
    {
        $output = [];
        $error = '';
        $message = '';
        $validation_error = '';
        $first_name = '';
        $last_name = '';

        try {
            if ($form_data->action === 'fetch_single_data') :
                $statement = $this->connection->prepare("SELECT * FROM sinhvien WHERE id = :id");
                $statement->bindParam(':id', $form_data->id, PDO::PARAM_INT);
                $statement->execute();
                $result = $statement->fetchAll();

                foreach ($result as $row) :
                    $output['first_name'] = $row['first_name'];
                    $output['last_name'] = $row['last_name'];
                endforeach;
            else :
                $first_name = $form_data->first_name;
                $last_name = $form_data->last_name;
                $id = $form_data->id;
                if (empty($error)) :
                    if ($form_data->action === 'Edit') :
                        $data = [
                            ':first_name' => $first_name,
                            ':last_name' => $last_name,
                            ':id' => $id
                        ];
                        $query = "UPDATE sinhvien SET first_name = :first_name, last_name = :last_name WHERE id = :id";
                        $statement = $this->connection->prepare($query);
                        if ($statement->execute($data)) :
                            $message = 'Data Edited';
                        endif;
                    endif;
                else :
                    $validation_error = implode(", ", $error);
                endif;

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
$form_data = json_decode(file_get_contents("php://input"));
$dataHandler = new DataEditHandler($connection);
$result = $dataHandler->handleRequest($form_data);
echo $result;
$db->closeConnection();
?>

