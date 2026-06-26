<?php
spl_autoload_register(function ($classe) {
    $pastas = [
        __DIR__ . '/app/controller/',
        __DIR__ . '/app/model/',
        __DIR__ . '/app/middleware/',
        __DIR__ . '/app/services/',
        __DIR__ . '/' 
    ];

    foreach ($pastas as $pasta) {
        $arquivo = $pasta . $classe . '.php';
        if (file_exists($arquivo)) {
            include_once $arquivo;
            return;
        }
    }
});