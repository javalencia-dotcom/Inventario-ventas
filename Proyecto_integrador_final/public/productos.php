<?php
$tituloPagina = "Productos";
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title><?php echo $tituloPagina; ?></title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>

<header class="encabezado">
    <h1>Gestión de Productos</h1>
    <p>Crear, listar, editar y eliminar productos</p>
</header>

<nav class="navegacion">
    <a href="index.php">Inicio</a>
    <a href="productos.php">Productos</a>
    <a href="ventas.php">Ventas</a>
</nav>

<main class="contenedor">

    <section class="panel formulario-panel">
        <h2>Formulario de Producto</h2>

        <form id="formProducto">
            <input type="hidden" id="productoId">

            <label>Nombre</label>
            <input type="text" id="nombreProducto" placeholder="Ej: Mouse inalámbrico">

            <label>Stock</label>
            <input type="number" id="stockProducto" placeholder="Ej: 15">

            <label>Precio</label>
            <input type="number" id="precioProducto" placeholder="Ej: 12.50" step="0.01">

            <button type="submit" id="btnGuardar">Guardar producto</button>
        </form>
    </section>

    <section class="panel listado-panel">
        <h2>Inventario registrado</h2>

        <div class="tabla-contenedor">
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Stock</th>
                        <th>Precio</th>
                        <th>Valor total</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody id="tablaProductos"></tbody>
            </table>
        </div>
    </section>

</main>

<footer>
    <p>Inventario Ágil</p>
</footer>

<script src="js/productos.js"></script>
</body>
</html>