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