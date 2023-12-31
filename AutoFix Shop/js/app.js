// Función para mostrar los productos en el contenedor
function mostrarProductos() {
    const productosContainer = document.getElementById('productosContainer');
    productosContainer.innerHTML = '';
    // Itera sobre el array de productos y crea un elemento para cada uno
    productos.forEach(producto => {
        const productoElement = document.createElement('div');

        productoElement.classList.add('col', 'mb-5');

        productoElement.innerHTML = `
            <div class="card h-100">
                <!-- Sale badge-->
                <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
                <!-- Product image-->
                <img class="card-img-top" src="${producto.imagen}" alt="..." />
                <!-- Product details-->
                <div class="card-body p-4">
                    <div class="text-center">
                        <!-- Product name-->
                        <h5 class="fw-bolder">${producto.nombre}</h5>
                        <!-- Product price-->
                        <span>$${producto.precio.toFixed(2)}</span>
                    </div>
                </div>
                <!-- Product actions-->
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center"><a class="btn btn-outline-dark mt-auto" onclick="mostrarDetalle('${producto.nombre}')">Ver producto</a></div>
                </div>
            </div>
        `;

        // Agrega el elemento del producto al contenedor
        productosContainer.appendChild(productoElement);
    });
}

// Función para mostrar los detalles del producto y redirigir a producto.html
function mostrarDetalle(nombreProducto) {
    const productoSeleccionado = productos.find(producto => producto.nombre === nombreProducto);

    if (productoSeleccionado) {
      // Almacena los detalles del producto en el Local Storage
      localStorage.setItem('productoSeleccionado', JSON.stringify(productoSeleccionado));
  
      // Redirige a producto.html
      window.location.href = 'producto.html';
    }
}

function buscarProductos() {
    const searchInput = document.getElementById('searchInput');

    if(searchInput !== ''){
        // Obtiene el valor del campo de búsqueda
        const searchTerm = searchInput.value.toLowerCase();

        auxProductos = productos;

        productos = productos.filter(producto =>
            producto.nombre.toLowerCase().includes(searchTerm)
        );
        
        mostrarProductos()

        productos = auxProductos;
    }
}

function ordenarProductos() {
    const ordenSeleccionado = document.getElementById('ordenarProductos').value;
    
    // Función para comparar el precio de dos productos de mayor a menor
    function compararPorPrecioMayor(a, b) {
        return b.precio > a.precio ? 1 : -1;
    }

    // Función para comparar el precio de dos productos de menor a mayor
    function compararPorPrecioMenor(a, b) {
        return a.precio - b.precio;
    }
    
    // Aplicar el filtro según la opción seleccionada
    if (ordenSeleccionado === 'ascendente') {
        productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else if (ordenSeleccionado === 'descendente') {
        productos.sort((a, b) => b.nombre.localeCompare(a.nombre));
    } else if (ordenSeleccionado === 'mayor') {
        productos.sort(compararPorPrecioMayor);
    } else if (ordenSeleccionado === 'menor') {
        productos.sort(compararPorPrecioMenor);
    }

    // Vuelve a mostrar los productos en la página después de ordenar
    mostrarProductos();
}

window.onload = function() {
    // Orden predeterminado, por ejemplo, ascendente
    productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
    mostrarProductos();
};