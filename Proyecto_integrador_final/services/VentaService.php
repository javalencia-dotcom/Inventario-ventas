<?php

class VentaService {

    public function validarVenta($stock, $cantidad) {

        if ($cantidad <= 0) {
            return [
                "estado" => false,
                "mensaje" => "La cantidad debe ser mayor a 0"
            ];
        }

        if ($cantidad > $stock) {
            return [
                "estado" => false,
                "mensaje" => "Stock insuficiente para realizar la venta"
            ];
        }

        return [
            "estado" => true,
            "mensaje" => "Venta válida"
        ];
    }

    public function calcularTotal($cantidad, $precio) {
        return $cantidad * $precio;
    }
}
