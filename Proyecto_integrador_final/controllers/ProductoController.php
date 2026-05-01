<?php

require_once __DIR__ . "/../models/Producto.php";

class ProductoController {

    public function validar($nombre, $stock, $precio) {

        if (trim($nombre) === "") {
            return [
                "estado" => false,
                "mensaje" => "El nombre del producto no puede estar vacío"
            ];
        }

        if ($stock < 0) {
            return [
                "estado" => false,
                "mensaje" => "El stock no puede ser negativo"
            ];
        }

        if ($precio <= 0) {
            return [
                "estado" => false,
                "mensaje" => "El precio debe ser mayor a 0"
            ];
        }

        return [
            "estado" => true,
            "mensaje" => "Producto válido"
        ];
    }
}
