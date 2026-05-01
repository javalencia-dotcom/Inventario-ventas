<?php

class Venta {

    public $idVenta;
    public $producto;
    public $cantidad;
    public $total;
    public $fecha;

    public function __construct($idVenta, $producto, $cantidad, $total, $fecha) {
        $this->idVenta = $idVenta;
        $this->producto = $producto;
        $this->cantidad = $cantidad;
        $this->total = $total;
        $this->fecha = $fecha;
    }

}
