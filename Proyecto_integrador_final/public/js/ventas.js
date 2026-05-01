let productosVenta = JSON.parse(localStorage.getItem("productos_agiles")) || [];
let ventasAgiles = JSON.parse(localStorage.getItem("ventas_agiles")) || [];

const productoVenta = document.getElementById("productoVenta");
const cantidadVenta = document.getElementById("cantidadVenta");
const tablaVentas = document.getElementById("tablaVentas");
const resumenVentas = document.getElementById("resumenVentas");

function cargarProductosVenta() {
    productoVenta.innerHTML = "";

    if (productosVenta.length === 0) {
        productoVenta.innerHTML = `<option value="">No hay productos disponibles</option>`;
        return;
    }

    productosVenta.forEach(function(producto) {
        productoVenta.innerHTML += `
            <option value="${producto.codigo}">
                ${producto.nombre} - Stock: ${producto.stock}
            </option>
        `;
    });
}

function registrarVenta() {
    const codigoProducto = productoVenta.value;
    const cantidad = Number(cantidadVenta.value);

    if (codigoProducto === "") {
        alert("No existe producto seleccionado");
        return;
    }

    if (cantidad <= 0) {
        alert("La cantidad debe ser mayor a 0");
        return;
    }

    const producto = productosVenta.find(function(item) {
        return item.codigo == codigoProducto;
    });

    if (!producto) {
        alert("Producto no encontrado");
        return;
    }

    if (cantidad > producto.stock) {
        alert("No se puede vender más del stock disponible");
        return;
    }

    producto.stock -= cantidad;

    const nuevaVenta = {
        idVenta: Date.now(),
        producto: producto.nombre,
        cantidad: cantidad,
        total: cantidad * producto.precio,
        fecha: new Date().toLocaleString()
    };

    ventasAgiles.push(nuevaVenta);

    localStorage.setItem("productos_agiles", JSON.stringify(productosVenta));
    localStorage.setItem("ventas_agiles", JSON.stringify(ventasAgiles));

    cantidadVenta.value = "";

    cargarProductosVenta();
    mostrarVentas();
}

function mostrarVentas() {
    tablaVentas.innerHTML = "";

    let totalGeneral = 0;

    ventasAgiles.forEach(function(venta) {
        totalGeneral += venta.total;
    });

    resumenVentas.innerHTML = `
        <strong>Total de ventas:</strong> ${ventasAgiles.length}
        <br>
        <strong>Ingresos generados:</strong> $${totalGeneral.toFixed(2)}
    `;

    if (ventasAgiles.length === 0) {
        tablaVentas.innerHTML = `
            <tr>
                <td colspan="4" class="mensaje-vacio">No existen ventas registradas</td>
            </tr>
        `;
        return;
    }

    ventasAgiles.forEach(function(venta) {
        tablaVentas.innerHTML += `
            <tr>
                <td>${venta.producto}</td>
                <td>${venta.cantidad}</td>
                <td>$${venta.total.toFixed(2)}</td>
                <td>${venta.fecha}</td>
            </tr>
        `;
    });
}

cargarProductosVenta();
mostrarVentas();