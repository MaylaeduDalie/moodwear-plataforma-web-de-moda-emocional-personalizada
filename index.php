<?php
// 1. Exibir erros na tela caso o PHP trave em algum lugar interno
ini_set('display_errors', 1);
error_reporting(E_ALL);

// 2. Ativa o Autoload limpo (Sem a palavra require!)
include_once 'autoload.php';

// 3. Configurações de cabeçalho para permitir a comunicação com o JS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

// SE FOR UM ENVIO DE DADOS (POST do botão Favoritar)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    header("Content-Type: application/json; charset=UTF-8");
    
    // Captura o JSON enviado pelo JavaScript
    $json = file_get_contents('php://input');
    $dadosRecebidos = json_decode($json, true);

    if ($dadosRecebidos) {
        try {
            // Validação no Middleware
            $middleware = new Middleware();
            $middleware->validar($dadosRecebidos);

            // Fluxo do MVC salvando no banco SQLite
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
    exit; // Para a execução aqui no POST
}

// SE FOR APENAS ABRIR O SITE NO NAVEGADOR (GET)
// Carrega o arquivo HTML do seu Front-end automaticamente!
include_once 'index.html';