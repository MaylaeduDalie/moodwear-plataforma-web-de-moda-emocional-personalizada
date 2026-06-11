<?php
// REMOVIDO o require_once antigo. O Autoload cuida disso agora!

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
            
            // Retorna apenas texto limpo para o console.log do JS ler com sucesso
            echo "Sucesso: Look guardado no banco SQLite!";
        } catch (BusinessRuleException $e) {
            http_response_code(400);
            echo "Regra de Negocio: " . $e->getMessage();
        } catch (Exception $e) {
            http_response_code(500);
            echo "Erro no Servidor: " . $e->getMessage();
        }
    }
}