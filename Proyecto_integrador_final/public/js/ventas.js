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

    productosVenta.forEach(producto => {
        productoVenta.innerHTML += `
            <option value="${producto.codigo}">
                ${producto.nombre} - Stock: ${producto.stock}
            </option>
        `;
    });
}

async function registrarVenta() {

    const codigoProducto = productoVenta.value;
    const cantidad = Number(cantidadVenta.value);

    if (codigoProducto === "") {
        alert("Seleccione un producto");
        return;
    }

    const producto = productosVenta.find(p => p.codigo == codigoProducto);

    if (!producto) {
        alert("Producto no encontrado");
        return;
    }

    // 🔥 VALIDACIÓN CON PHP
    const respuesta = await fetch("api/validar_venta.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            stock: producto.stock,
            cantidad: cantidad,
            precio: producto.precio
        })
    });

    const resultado = await respuesta.json();

    if (!resultado.estado) {
        alert(resultado.mensaje);
        return;
    }

    producto.stock -= cantidad;

    const nuevaVenta = {
        idVenta: Date.now(),
        producto: producto.nombre,
        cantidad: cantidad,
        total: resultado.total,
        fecha: new Date().toLocaleString()
    };

    ventasAgiles.push(nuevaVenta);

    localStorage.setItem("productos_agiles", JSON.stringify(productosVenta));
    localStorage.setItem("ventas_agiles", JSON.stringify(ventasAgiles));

    cantidadVenta.value = "";

    cargarProductosVenta();
    mostrarVentas();

    alert("Venta registrada correctamente");
}

function mostrarVentas() {
    tablaVentas.innerHTML = "";

    let totalGeneral = 0;

    ventasAgiles.forEach(v => totalGeneral += v.total);

    resumenVentas.innerHTML = `
        <strong>Total ventas:</strong> ${ventasAgiles.length} <br>
        <strong>Ingresos:</strong> $${totalGeneral.toFixed(2)}
    `;

    if (ventasAgiles.length === 0) {
        tablaVentas.innerHTML = `
            <tr>
                <td colspan="4" class="mensaje-vacio">No hay ventas registradas</td>
            </tr>
        `;
        return;
    }

    ventasAgiles.forEach(v => {
        tablaVentas.innerHTML += `
            <tr>
                <td>${v.producto}</td>
                <td>${v.cantidad}</td>
                <td>$${v.total.toFixed(2)}</td>
                <td>${v.fecha}</td>
            </tr>
        `;
    });
}

cargarProductosVenta();
mostrarVentas();
