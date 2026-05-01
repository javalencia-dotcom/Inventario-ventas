<?php
$nombreSistema = "Inventario Ágil";
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title><?php echo $nombreSistema; ?></title>
    <link rel="stylesheet" href="../css/styles.css">
</head>
<body>

<header class="encabezado">
    <h1><?php echo $nombreSistema; ?></h1>
    <p>Sistema web de inventario y ventas con LocalStorage</p>
</header>

<main class="inicio">
    <section class="tarjeta-inicio">
        <h2>Bienvenido</h2>
        <p>Administra productos y registra ventas de forma rápida desde el navegador.</p>

        <div class="acciones-inicio">
            <a href="productos.php">Gestionar productos</a>
            <a href="ventas.php">Registrar ventas</a>
        </div>
    </section>
</main>

<footer>
    <p>Proyecto académico PHP + LocalStorage</p>
</footer>

</body>
</html>
