<?php

class VentaService {

    public function calcularTotal($cantidad, $precio) {
        return $cantidad * $precio;
    }

    public function validarStock($stock, $cantidad) {

        if ($cantidad > $stock) {
            return false;
        }

        return true;
    }

}
