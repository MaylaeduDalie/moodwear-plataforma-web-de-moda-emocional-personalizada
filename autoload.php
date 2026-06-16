<?php
spl_autoload_register(function ($classe) {
    // Lista de pastas atualizada com a nova estrutura que o professor pediu
    $pastas = [
        __DIR__ . '/app/controller/',
        __DIR__ . '/app/model/',
        __DIR__ . '/app/middleware/',
        __DIR__ . '/app/services/'
    ];

    foreach ($pastas as $pasta) {
        $arquivo = $pasta . $classe . '.php';
        if (file_exists($arquivo)) {
            require_once $arquivo;
            return;
        }
    }
});