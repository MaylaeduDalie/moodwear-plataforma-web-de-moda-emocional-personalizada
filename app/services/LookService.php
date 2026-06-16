<?php

class LookService {
    private $repository;

    public function __construct(ILookRepository $repository) {
        $this->repository = $repository;
    }

    public function processar(LookModel $look): void {
        if (empty($look->getTitulo()) || $look->getTitulo() === "Aguardando escolhas...") {
            throw new BusinessRuleException("Primeiro deves gerar uma recomendação para poder salvar!");
        }
        
        $this->repository->save($look);
    }
}