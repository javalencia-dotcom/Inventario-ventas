<?php
$tituloPagina = "Ventas";
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title><?php echo $tituloPagina; ?></title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>

<header class="encabezado ventas-header">
    <h1>Registro de Ventas</h1>
    <p>Selecciona un producto y descuenta stock automáticamente</p>
</header>

<nav class="navegacion">
    <a href="index.php">Inicio</a>
    <a href="productos.php">Productos</a>
    <a href="ventas.php">Ventas</a>
</nav>

<main class="contenedor">

    <section class="panel formulario-panel">
        <h2>Nueva venta</h2>

        <label>Producto</label>
        <select id="productoVenta"></select>

        <label>Cantidad</label>
        <input type="number" id="cantidadVenta" placeholder="Cantidad vendida">

        <button onclick="registrarVenta()">Registrar venta</button>
    </section>

    <section class="panel listado-panel">
        <h2>Historial de ventas</h2>

        <div id="resumenVentas" class="resumen"></div>

        <div class="tabla-contenedor">
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody id="tablaVentas"></tbody>
            </table>
        </div>
    </section>

</main>

<footer>
    <p>Inventario Ágil</p>
</footer>

<script src="js/ventas.js"></script>
</body>
</html>