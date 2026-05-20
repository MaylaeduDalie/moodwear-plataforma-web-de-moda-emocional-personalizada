<?php
// Inclui o mecanismo de carregamento automático de classes
require_once 'autoload.php';

$pdo = Database::getConnection();
$repository = new LookRepository($pdo);
$service = new LookService($repository);
$controller = new LookController($service);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $mid = new Middleware();
    $mid->validar($_POST); 
    $controller->store($_POST);
} else {
    // Renderiza a interface que agora está dentro da pasta view
    require_once 'view/index.html';
}