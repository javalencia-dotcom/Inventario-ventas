<?php

header("Content-Type: application/json");

require_once __DIR__ . "/../../controllers/ProductoController.php";

$datos = json_decode(file_get_contents("php://input"), true);

$nombre = $datos["nombre"] ?? "";
$stock = $datos["stock"] ?? -1;
$precio = $datos["precio"] ?? 0;

$controller = new ProductoController();
$respuesta = $controller->validar($nombre, $stock, $precio);

echo json_encode($respuesta);
