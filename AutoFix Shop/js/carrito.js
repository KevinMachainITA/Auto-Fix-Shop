document.addEventListener('DOMContentLoaded', mostrarCarrito);

let totalCarrito = 0; // Inicializa la variable para el total del carrito

function mostrarCarrito() {
    const carritoContainer = document.getElementById('carritoContainer');
    const totalContainer = document.getElementById('totalContainer');
    totalCarrito = 0;

    carritoContainer.innerHTML= ''
    totalContainer.innerHTML=''
    // Recupera el carrito actual del Local Storage
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Verifica si ya hay dos objetos en el carrito y, en caso contrario, los agrega
    if (carrito.length < 1) {
        const objeto1 = {
            id: 1234234212,
            nombre: "AGP.1978 2 faros delanteros LED Par46 H5001 de 5.7 pulgadas",
            descripcion: "Este set de faros delanteros LED Par46 H5001 de 5.7 pulgadas de AGP.1978 ofrece una solución de iluminación avanzada para vehículos. Con un diseño moderno y eficiente, mejora la visibilidad en carretera, proporcionando una iluminación potente y nítida.",
            categoria: "Faros",
            precio: 1564.00,
            stock: 100,
            imagen: "img/img5.png"
        };

        carrito.push(objeto1);

        // Almacena el carrito actualizado en el Local Storage
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }
    
    // Muestra los productos en el carrito
    carrito.forEach(producto => {
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
                    <button class="eliminarBtn" data-id="${producto.id}">Eliminar del carrito</button>
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

function eliminarDelCarrito(productoId) {
    // Recupera el carrito actual del Local Storage
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Filtra el carrito para excluir el producto con el ID dado
    const nuevoCarrito = carrito.filter(producto => producto.id !== productoId);

    // Almacena el carrito actualizado en el Local Storage
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));

    // Vuelve a cargar la página del carrito para reflejar los cambios
    mostrarCarrito()
}

//sb-pasmb28422759@personal.example.com

//Tr0!.08^ contraseña 

//https://developer.paypal.com/dashboard/accounts/edit/4818706677009068712?accountName=sb-y041z22318661@personal.example.com

paypal.Buttons({
    createOrder: function (data, actions) {
        // Set up the transaction
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: totalCarrito
                }
            }]
        });
    },

    onApprove: function (data, actions) {
        actions.order.capture().then(function (detalles) {
            alert("PAGO APROBADO\nPara rembolosos favor de comunicarse en el apartado de contacto con el ID de compra: " + detalles.id);
        });

    },

    onCancel: function (data) {
        alert("PAGO CANCELADO");
    }
}).render('#paypal-button-container');