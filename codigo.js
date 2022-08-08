const carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
document.getElementById("sumarCarrito").innerHTML = `${carrito.length} - $${total}`;

function generarCardsCarrito(){
    carrito.forEach((producto) => {
        document.getElementById("cards-modal").innerHTML += `<div class="modal-texto">
        <p>${producto.nombre} </p>
        <p>$${producto.precio} </p>
        <p><img src="${producto.img}" style="width:100px"> </p>
        </div>`;
    });

}




/* Array con los prodcutos de la seccion de cards 1 */

const productosCard1 = [
    {id: 1, nombre:"Nike Jordan 6 off white", precio: 45670, img: "./imagenesIndex/imagenesCards/imagencard1.webp", categoria: "Zapatillas"},
    {id: 2, nombre:"Nike Jordan 1 high Og", precio: 38200, img: "./imagenesIndex/imagenesCards/imagencard2.webp", categoria: "Zapatillas"},
    {id: 3, nombre:"Nike Jordan 4 X Levis", precio: 68000, img: "./imagenesIndex/imagenesCards/imagencard3.jpg", categoria: "Zapatillas"},
    {id: 4, nombre:"Nike Jordan 1 low", precio: 50000, img: "./imagenesIndex/imagenesCards/imagencard4.jpg", categoria: "Zapatillas"},
]; 

/* Array con los productos de la seccion de cards 2 */

const productosCard2 = [
    {id: 5, nombre:"Hoodie Cactus Jack", precio: 23500, img: "./imagenesIndex/imagenesCards/hoodie1.jpg", categoria:"Buzos"},
    {id: 6, nombre:"Remera Kaws", precio: 9800, img:"./imagenesIndex/imagenesCards/cardremera.webp", categoria:"Remeras"},
    {id: 7, nombre:"Remera McQueen", precio: 12500, img:"./imagenesIndex/imagenesCards/cardremera2.webp", categoria:"Remeras"},
    {id: 8, nombre:"Crewneck Supreme", precio: 28000, img:"./imagenesIndex/imagenesCards/cardneck.webp", categoria:"Buzos"},
];

let cards = ""; 



productosCard1.forEach((producto) => {
    const idButton = `agregarCarrito${producto.id}`
    document.getElementById("cards").innerHTML +=
`<div class='card' style='width: 16rem;'>
    <img src="${producto.img}" class='card-img-top btn' alt='card imagen'>
    <div class='card-body'>
        <h5 class='card-title text-center'>${producto.nombre}</h5>
        <p class="card-text text-center"><b>$${producto.precio}</b></p>
        <button class="botonStyle" id="${idButton}">Agregar al carrito</button>
    </div>
</div>`;
});

productosCard1.forEach((producto) => {
    const idButton = `agregarCarrito${producto.id}`
    document.getElementById(idButton).addEventListener('click', () => {
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
        document.getElementById("sumarCarrito").innerHTML = `${carrito.length} - $${total}`;
        document.getElementById("cards-modal").innerHTML = ""
        carrito.forEach((producto) => {
            document.getElementById("cards-modal").innerHTML += `<div class="modal-texto">
            <p>${producto.nombre} </p>
            <p>$${producto.precio} </p>
            <p><img src="${producto.img}" style="width:100px"> </p>
            </div>`;
        });
    })
})















/* Seccion de cards 2 */

productosCard2.forEach((producto) => {
    const idButton = `agregarCarrito${producto.id}`
    document.getElementById("cards-dos").innerHTML +=
`<div class='card' style='width: 16rem;'>
    <img src="${producto.img}" class='card-img-top btn' alt='card imagen'>
    <div class='card-body'>
        <h5 class='card-title text-center'>${producto.nombre}</h5>
        <p class="card-text text-center"><b>$${producto.precio}</b></p>
        <button class="botonStyle" id="${idButton}">Agregar al carrito</button>
    </div>
</div>`;
});

productosCard2.forEach((producto) => {
    const idButton = `agregarCarrito${producto.id}`
    document.getElementById(idButton).addEventListener('click', () => {
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
        document.getElementById("sumarCarrito").innerHTML = `${carrito.length} - $${total}`;
        document.getElementById("cards-modal").innerHTML = ""
        carrito.forEach((producto) => {
            document.getElementById("cards-modal").innerHTML += `<div class="modal-texto">
            <p>${producto.nombre} </p>
            <p>$${producto.precio} </p>
            <p><img src="${producto.img}" style="width:100px"> </p>
            </div>`;
        });
    })
})






































































































