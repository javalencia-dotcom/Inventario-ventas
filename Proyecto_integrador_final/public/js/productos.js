let productosAgiles = JSON.parse(localStorage.getItem("productos_agiles")) || [];

const formProducto = document.getElementById("formProducto");
const tablaProductos = document.getElementById("tablaProductos");

formProducto.addEventListener("submit", async function(evento) {
    evento.preventDefault();

    const productoId = document.getElementById("productoId").value;
    const nombreProducto = document.getElementById("nombreProducto").value.trim();
    const stockProducto = Number(document.getElementById("stockProducto").value);
    const precioProducto = Number(document.getElementById("precioProducto").value);

    // 🔥 VALIDACIÓN CON PHP
    const respuesta = await fetch("api/validar_producto.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre: nombreProducto,
            stock: stockProducto,
            precio: precioProducto
        })
    });

    const resultado = await respuesta.json();

    if (!resultado.estado) {
        alert(resultado.mensaje);
        return;
    }

    if (productoId === "") {
        crearProducto(nombreProducto, stockProducto, precioProducto);
    } else {
        actualizarProducto(productoId, nombreProducto, stockProducto, precioProducto);
    }

    guardarProductos();
    formProducto.reset();
    document.getElementById("productoId").value = "";
    mostrarProductos();

    alert("Producto guardado correctamente");
});

function crearProducto(nombre, stock, precio) {
    const nuevoProducto = {
        codigo: Date.now(),
        nombre: nombre,
        stock: stock,
        precio: precio
    };

    productosAgiles.push(nuevoProducto);
}

function mostrarProductos() {
    tablaProductos.innerHTML = "";

    if (productosAgiles.length === 0) {
        tablaProductos.innerHTML = `
            <tr>
                <td colspan="5" class="mensaje-vacio">No existen productos registrados</td>
            </tr>
        `;
        return;
    }

    productosAgiles.forEach(function(producto) {
        const total = producto.stock * producto.precio;

        tablaProductos.innerHTML += `
            <tr>
                <td>${producto.nombre}</td>
                <td>${producto.stock}</td>
                <td>$${producto.precio.toFixed(2)}</td>
                <td>$${total.toFixed(2)}</td>
                <td>
                    <button class="btn-editar" onclick="editarProducto(${producto.codigo})">Editar</button>
                    <button class="btn-eliminar" onclick="eliminarProducto(${producto.codigo})">Eliminar</button>
                </td>
            </tr>
        `;
    });
}

function editarProducto(codigo) {
    const producto = productosAgiles.find(p => p.codigo === codigo);

    document.getElementById("productoId").value = producto.codigo;
    document.getElementById("nombreProducto").value = producto.nombre;
    document.getElementById("stockProducto").value = producto.stock;
    document.getElementById("precioProducto").value = producto.precio;
}

function actualizarProducto(codigo, nombre, stock, precio) {
    productosAgiles = productosAgiles.map(producto => {
        if (producto.codigo == codigo) {
            return { codigo, nombre, stock, precio };
        }
        return producto;
    });
}

function eliminarProducto(codigo) {
    if (confirm("¿Eliminar este producto?")) {
        productosAgiles = productosAgiles.filter(p => p.codigo !== codigo);
        guardarProductos();
        mostrarProductos();
    }
}

function guardarProductos() {
    localStorage.setItem("productos_agiles", JSON.stringify(productosAgiles));
}

mostrarProductos();
