<?php

require_once "../models/Venta.php";

class VentaController {

    public function crearVenta($producto, $cantidad, $precio) {

        $total = $cantidad * $precio;

        return new Venta(
            time(),
            $producto,
            $cantidad,
            $total,
            date("Y-m-d H:i:s")
        );
    }

}
