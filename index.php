<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

include_once 'autoload.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    header("Content-Type: application/json; charset=UTF-8");
    
    $json = file_get_contents('php://input');
    $dadosRecebidos = json_decode($json, true);

    if (!$dadosRecebidos && !empty($_POST)) {
        $dadosRecebidos = $_POST;
    }

    if ($dadosRecebidos) {
        try {
            $middleware = new Middleware();
            $middleware->validar($dadosRecebidos);

            $pdo = Database::getConnection();
            $repository = new LookRepository($pdo);
            $service = new LookService($repository);
            $controller = new LookController($service);
            
            $controller->store($dadosRecebidos);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(["erro" => $e->getMessage()]);
        }
    } else {
        http_response_code(400);
        echo json_encode(["erro" => "Dados nao recebidos pelo PHP"]);
    }
    exit;
}

include_once 'view/index.html';