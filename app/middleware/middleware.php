<?php
class Middleware {
    public function validar(array &$dados): void {
        $dados['titulo'] = htmlspecialchars(trim($dados['titulo'] ?? ''), ENT_QUOTES, 'UTF-8');
        $dados['pecas']  = htmlspecialchars(trim($dados['pecas'] ?? ''), ENT_QUOTES, 'UTF-8');

        if (empty($dados['titulo']) || empty($dados['pecas'])) {
            throw new Exception("Dados Inválidos: Não recebemos as informações do look.");
        }
    }
}