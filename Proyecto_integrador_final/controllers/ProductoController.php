<?php

require_once "../models/Producto.php";

class ProductoController {

    public function crear($nombre, $stock, $precio) {
        return new Producto(time(), $nombre, $stock, $precio);
    }

    public function validar($nombre, $stock, $precio) {

        if (empty($nombre)) {
            return "Nombre vacío";
        }

        if ($stock < 0) {
            return "Stock inválido";
        }

        if ($precio <= 0) {
            return "Precio inválido";
        }

        return true;
    }

}
