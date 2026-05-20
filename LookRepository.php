<?php
require_once 'ILookRepository.php';
require_once 'model.php';

class LookRepository implements ILookRepository {
    private $pdo;

    public function __construct(PDO $pdo) {
        $this->pdo = $pdo;
    }

    public function save(LookModel $look): void {
        $sql = "INSERT INTO favoritos (titulo, pecas) VALUES (:t, :p)";
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute([
            ':t' => $look->getTitulo(),
            ':p' => $look->getPecas()
        ]);
    }
}