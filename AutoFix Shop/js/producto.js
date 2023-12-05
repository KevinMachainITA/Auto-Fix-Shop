// Función para mostrar el producto
function mostrarProducto() {
    const productosContainer = document.getElementById('detalleProducto');

    const producto = JSON.parse(localStorage.getItem('productoSeleccionado'))
    
    productosContainer.innerHTML = `
    <div class="col mb-5">
        <div class="h-full">
            <!-- Product image-->
            <img class="card-img-top" src="${producto.imagen}" alt="..." />
            <!-- Product details-->
                <div class="text-center">
                    <!-- Nombre del producto-->
                    <h4>${producto.nombre}</h5>
                    <!-- Descripcion del producto -->
                    <hr/>
                    <h7 >${producto.descripcion}</h7>
                    <hr/>
                    <h7 >${producto.descripcion_corta}</h7>
                    <!-- Precio del producto-->
                    <hr/>
                    <h2 class="mt-2">$${producto.precio}</h2>
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent text-center">
                <button id="agregarAlCarritoBtn" class="btn btn-outline-dark mt-auto text-center">Agregar al carrito</button>
                <button id="meGustaBtn" class="btn btn-outline-dark mt-auto text-center">Me Gusta</button>
            </div>
        </div>
    </div>
    `;

    // Agregar un event listener al botón "Agregar al carrito"
    const agregarAlCarritoBtn = document.getElementById('agregarAlCarritoBtn');
    agregarAlCarritoBtn.addEventListener('click', agregarProductoCarrito);

    const meGustaBtn = document.getElementById('meGustaBtn');
    meGustaBtn.addEventListener('click', listaDeDeseos);
}

function listaDeDeseos() {
    // Obtener el producto actual desde localStorage
  const producto = JSON.parse(localStorage.getItem('productoSeleccionado'));

  // Agregar el producto a la lsita de deseos
  agregarLista(producto);

  // Puedes mostrar un mensaje o realizar otras acciones después de agregar al carrito
  alert('Producto agregado a la lista de deseos');

  // O redirigir a la página del carrito, por ejemplo
  window.location.href = 'deseos.html';
}

function agregarProductoCarrito() {
    // Obtener el producto actual desde localStorage
  const producto = JSON.parse(localStorage.getItem('productoSeleccionado'));

  // Agregar el producto al carrito
  agregarAlCarrito(producto);

  // Puedes mostrar un mensaje o realizar otras acciones después de agregar al carrito
  alert('Producto agregado al carrito');

  // O redirigir a la página del carrito, por ejemplo
  window.location.href = 'carrito.html';
}

// Función para obtener la lista de deseos desde localStorage
function getLista() {
    return JSON.parse(localStorage.getItem('lista')) || [];
}
    
// Función para agregar un producto a la lista de deseos
function agregarLista(producto) {
    const lista = getLista();
    lista.push(producto);
    localStorage.setItem('lista', JSON.stringify(lista));
}

// Función para obtener el carrito desde localStorage
function getCarrito() {
    return JSON.parse(localStorage.getItem('carrito')) || [];
}
    
// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
    const carrito = getCarrito();
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

document.addEventListener("DOMContentLoaded", function() {
    const comentariosContainer = document.getElementById("comentariosContainer");

    // Recorre el arreglo de productos y crea elementos HTML para cada comentario
    productos.forEach(function(producto) {
        const comentarioDiv = document.createElement("div");
        comentarioDiv.classList.add("comentario");

        comentarioDiv.innerHTML = `
            <h5>${producto.nombre}</h5>
            <p>${producto.descripcion}</p>
            <p>Estrellas: ${producto.estrellas}</p>
        `;

        comentariosContainer.appendChild(comentarioDiv);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const comentariosContainer = document.getElementById("comentariosContainer");
    const formularioComentario = document.getElementById("formularioComentario");

    // Función para agregar un nuevo comentario
    function agregarComentario(event) {
        event.preventDefault();

        // Obtener los valores del formulario
        const nombre = document.getElementById("nombre").value;
        const descripcion = document.getElementById("descripcion").value;
        const estrellas = document.getElementById("estrellas").value;

        // Crear un nuevo objeto de comentario
        const nuevoComentario = {
            nombre: nombre,
            descripcion: descripcion,
            estrellas: estrellas
        };

        // Agregar el nuevo comentario al arreglo de productos
        productos.push(nuevoComentario);

        // Limpiar el contenedor de comentarios
        comentariosContainer.innerHTML = "";

        // Mostrar todos los comentarios, incluido el nuevo
        productos.forEach(function(producto) {
            const comentarioDiv = document.createElement("div");
            comentarioDiv.classList.add("comentario");

            comentarioDiv.innerHTML = `
                <h5>${producto.nombre}</h5>
                <p>${producto.descripcion}</p>
                <p>Estrellas: ${producto.estrellas}</p>
            `;

            comentariosContainer.appendChild(comentarioDiv);
        });

        // Limpiar el formulario
        formularioComentario.reset();
    }

    // Agregar el evento submit al formulario
    formularioComentario.addEventListener("submit", agregarComentario);
});

window.onload = mostrarProducto;