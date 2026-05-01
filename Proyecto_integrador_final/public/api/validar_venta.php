<?php

header("Content-Type: application/json");

require_once __DIR__ . "/../../services/VentaService.php";

$datos = json_decode(file_get_contents("php://input"), true);

$stock = $datos["stock"] ?? 0;
$cantidad = $datos["cantidad"] ?? 0;
$precio = $datos["precio"] ?? 0;

$servicio = new VentaService();

$validacion = $servicio->validarVenta($stock, $cantidad);

if ($validacion["estado"]) {
    $validacion["total"] = $servicio->calcularTotal($cantidad, $precio);
}

echo json_encode($validacion);
