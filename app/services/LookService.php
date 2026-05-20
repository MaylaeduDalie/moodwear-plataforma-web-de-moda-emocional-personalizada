<?php
require_once 'BusinessRuleException.php';

class LookService {
    private $repository;

    public function __construct(ILookRepository $repository) {
        $this->repository = $repository;
    }

    public function processar(LookModel $look): void {
        // Regra de Negócio: Não deixar salvar se o título for o padrão vazio
        if (empty($look->getTitulo()) || $look->getTitulo() === "Aguardando escolhas...") {
            throw new BusinessRuleException("Primeiro deves gerar uma recomendação para poder salvar!");
        }
        
        $this->repository->save($look);
    }
}