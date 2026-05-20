<?php
class Middleware {
    public function validar(array &$dados): void {
        // Sanitização (Passo 5 do projeto)
        $dados['titulo'] = htmlspecialchars(trim($dados['titulo'] ?? ''), ENT_QUOTES, 'UTF-8');
        $dados['pecas']  = htmlspecialchars(trim($dados['pecas'] ?? ''), ENT_QUOTES, 'UTF-8');

        if (empty($dados['titulo']) || empty($dados['pecas'])) {
            die("<h2>⚠️ Dados Inválidos</h2>Não recebemos as informações do look.");
        }
    }
}