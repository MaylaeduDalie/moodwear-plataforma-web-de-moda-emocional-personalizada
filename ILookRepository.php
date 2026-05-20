<?php
interface ILookRepository {
    public function save(LookModel $look): void;
}