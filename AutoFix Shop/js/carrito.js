document.addEventListener('DOMContentLoaded', mostrarCarrito);

// Muestra los productos en el carrito
let totalCarrito = 0; // Inicializa la variable para el total del carrito

function mostrarCarrito() {
    const carritoContainer = document.getElementById('carritoContainer');
    const totalContainer = document.getElementById('totalContainer');


    // Recupera el carrito actual del Local Storage
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Muestra los productos en el carrito
    carrito.forEach(producto => {
        const productoElement = document.createElement('div');

        productoElement.innerHTML = `

    <div class="col mb-5">
        <div class="card h-100">
            <!-- Product image-->
            <img class="card-img-top" src="${producto.imagen}" alt="${producto.name}" />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">${producto.nombre}</h5>
                    <!-- Product price-->
                    <span>$${producto.precio.toFixed(2)}</span>
                </div>
            </div>
            <div class="card-body">
                <button class="eliminarBtn" data-id="${producto.id}">Eliminar del carrito</button>
            </div>
        </div>
    </div>
    `;

        // Agrega el elemento del producto al contenedor del carrito
        carritoContainer.appendChild(productoElement);

        // Agrega el precio del producto al total del carrito
        totalCarrito += producto.precio;


        // Agrega un manejador de clic al botón de eliminar
        const eliminarBtn = productoElement.querySelector('.eliminarBtn');
        eliminarBtn.addEventListener('click', () => eliminarDelCarrito(producto.id));
    });

    // Muestra el total del carrito
    totalContainer.textContent = `Total del carrito: $${totalCarrito.toFixed(2)}`;
}

