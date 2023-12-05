document.addEventListener('DOMContentLoaded', mostrarLista);

function mostrarLista() {
    const listaContainer = document.getElementById('listaContainer');
    listaContainer.innerHTML = '';
    // Recupera la lista de deseos actual del Local Storage
    const lista = JSON.parse(localStorage.getItem('lista')) || [];

    // Verifica si ya hay dos objetos en el carrito y, en caso contrario, los agrega
    if (lista.length < 1) {
        const objeto1 = {
            id: 1234234212,
            nombre: "AGP.1978 2 faros delanteros LED Par46 H5001 de 5.7 pulgadas",
            descripcion: "Este set de faros delanteros LED Par46 H5001 de 5.7 pulgadas de AGP.1978 ofrece una solución de iluminación avanzada para vehículos. Con un diseño moderno y eficiente, mejora la visibilidad en carretera, proporcionando una iluminación potente y nítida.",
            categoria: "Faros",
            precio: 1564.00,
            stock: 100,
            imagen: "img/img5.png"
        };

        lista.push(objeto1);

        // Almacena el carrito actualizado en el Local Storage
        localStorage.setItem('lista', JSON.stringify(lista));
    }

    // Muestra los productos en el carrito
    lista.forEach(producto => {
        const productoElement = document.createElement('div');

        productoElement.classList.add('col', 'mb-5');

        productoElement.innerHTML = `
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
                <div class="card-body text-center">
                    <button class="eliminarBtn" data-id="${producto.id}">Eliminar de la lista</button>
                </div>
            </div>
        `;

        // Agrega el elemento del producto al contenedor de la lista
        listaContainer.appendChild(productoElement);

        // Agrega un manejador de clic al botón de eliminar
        const eliminarBtn = productoElement.querySelector('.eliminarBtn');
        eliminarBtn.addEventListener('click', () => eliminarDelaLista(producto.id));
    });
}

function eliminarDelaLista(productoId) {
    // Recupera el carrito actual del Local Storage
    const lista = JSON.parse(localStorage.getItem('lista')) || [];

    // Filtra el carrito para excluir el producto con el ID dado
    const nuevaLista = lista.filter(producto => producto.id !== productoId);

    // Almacena el carrito actualizado en el Local Storage
    localStorage.setItem('lista', JSON.stringify(nuevaLista));

    // Vuelve a cargar la página del carrito para reflejar los cambios
    mostrarLista()
}