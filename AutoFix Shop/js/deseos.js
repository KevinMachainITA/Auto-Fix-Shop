document.addEventListener('DOMContentLoaded', mostrarLista);

function mostrarLista() {
    const listaContainer = document.getElementById('listaContainer');

    // Recupera la lista de deseos actual del Local Storage
    const lista = JSON.parse(localStorage.getItem('lista')) || [];

    // Muestra los productos en el carrito
    lista.forEach(producto => {
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
                <button class="eliminarBtn" data-id="${producto.id}">Eliminar de la lista</button>
            </div>
        </div>
    </div>
    `;

        // Agrega el elemento del producto al contenedor de la lista
        listaContainer.appendChild(productoElement);

        // Agrega un manejador de clic al botón de eliminar
        const eliminarBtn = productoElement.querySelector('.eliminarBtn');
        eliminarBtn.addEventListener('click', () => eliminarDelaLista(producto.id));
    });

    // Muestra el total del carrito
    totalContainer.textContent = `Total del carrito: $${totalCarrito.toFixed(2)}`;
}

function eliminarDelaLista(productoId) {
    // Recupera el carrito actual del Local Storage
    const lista = JSON.parse(localStorage.getItem('lista')) || [];

    // Filtra el carrito para excluir el producto con el ID dado
    const nuevaLista = lista.filter(producto => producto.id !== productoId);

    // Almacena el carrito actualizado en el Local Storage
    localStorage.setItem('lista', JSON.stringify(nuevaLista));

    // Vuelve a cargar la página del carrito para reflejar los cambios
    location.reload();
}