<?php
require_once 'model.php';

class LookController {
    private $service;

    public function __construct(LookService $service) {
        $this->service = $service;
    }

    public function store(array $dados): void {
        try {
            $look = new LookModel();
            $look->setTitulo($dados['titulo'] ?? '');
            $look->setPecas($dados['pecas'] ?? '');

            $this->service->processar($look);
            
            echo "<h2>✅ Look guardado com sucesso!</h2>";
            echo "<a href='index.php'>Voltar ao MoodWear</a>";
        } catch (BusinessRuleException $e) {
            die("<h2>⚠️ Erro:</h2>" . $e->getMessage() . "<br><a href='index.php'>Tentar novamente</a>");
        } catch (Exception $e) {
            die("<h2>❌ Erro no Servidor:</h2>" . $e->getMessage());
        }
    }
}