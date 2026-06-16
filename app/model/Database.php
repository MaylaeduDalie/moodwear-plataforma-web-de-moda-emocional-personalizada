<?php

class Database {
    private static $instance = null;

    public static function getConnection() {
        if (!self::$instance) {
            // Como este arquivo está em app/model/, voltamos duas pastas (../..) para achar a raiz
            $configPath = __DIR__ . '/../../config.ini';
            
            if (!file_exists($configPath)) {
                die("<h2>❌ Erro no Backend:</h2> O arquivo 'config.ini' nao foi encontrado na raiz do projeto.");
            }

            $config = parse_ini_file($configPath);
            
            // Define o caminho do banco de dados SQLite também na raiz do projeto
            $dbPath = __DIR__ . '/../../' . $config['db_path'];

            self::$instance = new PDO('sqlite:' . $dbPath);
            self::$instance->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            
            // Cria a tabela automaticamente se ela não existir
            self::$instance->exec("CREATE TABLE IF NOT EXISTS favoritos (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                titulo TEXT,
                pecas TEXT,
                data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP
            )");
        }
        return self::$instance;
    }
}