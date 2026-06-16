<?php
class LookModel {
    private string $titulo;
    private string $pecas;

    public function getTitulo(): string { return $this->titulo; }
    public function getPecas(): string { return $this->pecas; }

    public function setTitulo(string $t): void { $this->titulo = $t; }
    public function setPecas(string $p): void { $this->pecas = $p; }
}