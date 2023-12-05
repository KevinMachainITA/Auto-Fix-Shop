document.addEventListener("DOMContentLoaded", function () {
   const ordenesCompraBody = document.getElementById("ordenesCompraBody");

    const ordenesCompra = [
        {
            id: 123,
            direccion: "123 Calle Principal, Ciudad",
            total: 5388.00,
            productos: [
                { nombre: "Moto Bateria LTH AGM CTX14-BS Premium", cantidad: 1, precio: 2530.00 },
                { nombre: "Auto Parasoles de Coche para Ventanas Frontales", cantidad: 1, precio: 110.00 },
                { nombre: "Bosch 9697 - Bujía", cantidad: 3, precio: 916.00}
            ],
            estado: 'en proceso'
        },
        {
            id: 456,
            direccion: "456 Calle Secundaria, Ciudad",
            total: 3557.00,
            productos: [
                { nombre: "DEPO - Espejo retrovisor eléctrico con luz de señal de giro", cantidad: 1, precio: 1308.00 },
                { nombre: "Llanta Continental PremiumContact 2 195/65R15", cantidad: 1, precio: 2249.00 },
            ],
            estado: 'entregado'
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
            <td>${ordenCompra.estado}</td>
        `;
        ordenesCompraBody.appendChild(filaOrden);
    });
});