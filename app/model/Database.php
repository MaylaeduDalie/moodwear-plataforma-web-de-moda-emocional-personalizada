<?php
class Database {
    private static $instance = null;

    public static function getConnection() {
        if (!self::$instance) {
            // Ajustado para ler o config.ini na raiz corretamente
            $config = parse_ini_file(__DIR__ . '/config.ini');
            self::$instance = new PDO('sqlite:' . __DIR__ . '/' . $config['db_path']);
            self::$instance->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            
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