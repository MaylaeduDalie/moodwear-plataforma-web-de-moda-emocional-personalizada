<?php
// REMOVIDO os require_once manuais. O autoload.php faz toda a mágica agora!

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