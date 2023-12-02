document.addEventListener("DOMContentLoaded", function () {
    const ordenesCompraBody = document.getElementById("ordenesCompraBody");

    const ordenesCompra = [
        {
            id: 123,
            direccion: "123 Calle Principal, Ciudad",
            total: 150.00,
            productos: [
                { nombre: "Producto 1", cantidad: 2, precio: 50.00 },
                { nombre: "Producto 2", cantidad: 1, precio: 50.00 },
                { nombre: "Producto 3", cantidad: 3, precio: 20.00 }
            ]
        },
        {
            id: 456,
            direccion: "456 Calle Secundaria, Ciudad",
            total: 200.00,
            productos: [
                { nombre: "Producto 1", cantidad: 1, precio: 150.00 },
                { nombre: "Producto 4", cantidad: 1, precio: 50.00 },
            ]
        }
    ];

    // Llenar la tabla con los datos de las órdenes de compra
    ordenesCompra.forEach(ordenCompra => {
        const filaOrden = document.createElement("tr");
        filaOrden.innerHTML = `
            <td>${ordenCompra.id}</td>
            <td>${ordenCompra.direccion}</td>
            <td>$${ordenCompra.total.toFixed(2)}</td>
            <td>
                <ul>
                    ${ordenCompra.productos.map(producto =>
                        `<li>${producto.cantidad} x ${producto.nombre} ($${(producto.cantidad * producto.precio).toFixed(2)})</li>`
                    ).join('')}
                </ul>
            </td>
        `;
        ordenesCompraBody.appendChild(filaOrden);
    });
});