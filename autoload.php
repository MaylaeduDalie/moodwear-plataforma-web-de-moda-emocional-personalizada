<?php
spl_autoload_register(function ($classe) {
    // Lista de pastas onde o autoload vai procurar as classes do MVC
    $pastas = [
        __DIR__ . '/app/controller/',
        __DIR__ . '/app/model/',
        __DIR__ . '/app/middleware/',
        __DIR__ . '/app/services/',
        __DIR__ . '/' // Classes soltas na raiz (Repositories, Database)
    ];

    foreach ($pastas as $pasta) {
        $arquivo = $pasta . $classe . '.php';
        if (file_exists($arquivo)) {
            require_once $arquivo;
            return;
        }
    }
});