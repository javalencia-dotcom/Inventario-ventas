<?php

class Producto {

    public $codigo;
    public $nombre;
    public $stock;
    public $precio;

    public function __construct($codigo, $nombre, $stock, $precio) {
        $this->codigo = $codigo;
        $this->nombre = $nombre;
        $this->stock = $stock;
        $this->precio = $precio;
    }

}
