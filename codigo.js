/* array de los productos */

const productos = [
    {id: 1, nombre:"Hoodie Cactus Jack", precio: 23500, img: "./imagenesIndex/imagenesCards/hoodie1.jpg", category: 'Home', descripcion: "Este buzo con capucha y bolsillos tipo canguro es tan cómoda que la usarás todos los días. Su maravilloso diseño complementará tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: Hoodie"},
    {id: 2, nombre:"Remera McQueen", precio: 12500, img:"./imagenesIndex/imagenesCards/cardremera2.webp", category: 'Home', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS"},
    {id: 3, nombre:"Crewneck Supreme", precio: 28000, img:"./imagenesIndex/imagenesCards/cardneck.webp", category: 'Home'},
    {id: 4, nombre:"Nike Jordan 1 low", precio: 50000, img: "./imagenesIndex/imagenesCards/imagencard4.jpg", category:'Home'},
    {id: 9, nombre:"Buzo Cactus Jack X Jordan", precio: 23500, img: "../imagenesIndex/imagenesCards/hoodie1.jpg", category: 'Buzos'},
    {id: 10, nombre:"Buzo Amiri Paint", precio: 21000, img: "../imagenesIndex/imagenes-buzos/buzoamiri.webp", category: 'Buzos'},
    {id: 11, nombre:"Buzo Amiri Bandana ", precio: 17499, img: "../imagenesIndex/imagenes-buzos/buzoamiribandana.webp", category: 'Buzos'},
    {id: 12, nombre:"Buzo Amiri Blue Paint", precio: 25500, img: "../imagenesIndex/imagenes-buzos/buzoamirirazul.webp", category: 'Buzos'},
    {id: 13, nombre:"Buzo Cactus Jack Corp", precio: 20199, img: "../imagenesIndex/imagenes-buzos/buzocactusjackcorp.webp", category: 'Buzos'},
    {id: 14, nombre:"Buzo Cactus Jack X PlayStation", precio: 28800, img: "../imagenesIndex/imagenes-buzos/buzocactusjackps.webp", category: 'Buzos'},
    {id: 15, nombre:"Buzo Cactus Jack Speed Cacti", precio: 12799, img: "../imagenesIndex/imagenes-buzos/buzocactusjackspeed.jpg", category: 'Buzos'},
    {id: 16, nombre:"Buzo Cactus Jack Speed Pina Cacti", precio: 24499, img: "../imagenesIndex/imagenes-buzos/buzocactusjackspeedpina.webp", category: 'Buzos'},
    {id: 17, nombre:"Buzo Nike CTLB Blue", precio: 26699, img: "../imagenesIndex/imagenes-buzos/buzodrakeazul.webp", category: 'Buzos'},
    {id: 18, nombre:"Buzo Nike CTLB White", precio: 26699, img: "../imagenesIndex/imagenes-buzos/buzodrakeblanco.webp", category: 'Buzos'},
    {id: 19, nombre:"Buzo nike Have A Nike Day", precio: 19999, img: "../imagenesIndex/imagenes-buzos/buzohavenikeday.webp", category: 'Buzos'},
    {id: 20, nombre:"Buzo Kappa Colors", precio: 18999, img: "../imagenesIndex/imagenes-buzos/buzokappa.webp", category: 'Buzos'},
    {id: 21, nombre:"Buzo Zip Kappa", precio: 9999, img: "../imagenesIndex/imagenes-buzos/buzokappanegro.jpg", category: 'Buzos'},
    {id: 22, nombre:"Buzo Levis Moment", precio: 22199, img: "../imagenesIndex/imagenes-buzos/buzolevis.webp", category: 'Buzos'},
    {id: 23, nombre:"Buzo Nike ACG", precio: 29999, img: "../imagenesIndex/imagenes-buzos/buzonikeacg.webp", category: 'Buzos'},
    {id: 24, nombre:"Buzo Nike Hoodie Yellow", precio: 14999, img: "../imagenesIndex/imagenes-buzos/buzonikeamarillo.webp", category: 'Buzos'},
    {id: 25, nombre:"Crewneck Nike Blue", precio: 13599, img: "../imagenesIndex/imagenes-buzos/buzonikeazul.jpg", category: 'Buzos'},
    {id: 26, nombre:"Buzo Cacti", precio: 17489, img: "../imagenesIndex/imagenes-buzos/buzonikecacti.jpg", category: 'Buzos'},
    {id: 27, nombre:"Crewneck Nike Coffe", precio: 32999, img: "../imagenesIndex/imagenes-buzos/buzonikecoffe.webp", category: 'Buzos'},
    {id: 28, nombre:"Nike X Jordan", precio: 11999, img: "../imagenesIndex/imagenes-buzos/buzonikejordan.webp", category: 'Buzos'},
    {id: 29, nombre:"Buzo Nike Margaritas", precio: 21799, img: "../imagenesIndex/imagenes-buzos/buzonikemarge.webp", category: 'Buzos'},
    {id: 30, nombre:"Buzo Nike Flowers", precio: 22390, img: "../imagenesIndex/imagenes-buzos/buzonikemarron.jpg", category: 'Buzos'},
    {id: 31, nombre:"Remera Cactus Jack Cacti", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remeracactusjackcacti.jpg", category: 'Remeras', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-498"},
    {id: 32, nombre:"Remera Cactus Jack Cross", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remeracactusjackcross.webp", category: 'Remeras', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-432"},
    {id: 33, nombre:"Remera Cactus Jack X Fragment Danger", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remeracactusjackdanger.webp", category: 'Remeras', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-438"},
    {id: 34, nombre:"Remera Cactus Jack X Fragment Wolf", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remeracactusjackfragment.webp", category: 'Remeras', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-499"},
    {id: 35, nombre:"Remera Cactus Jack X Hiroyhi", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remeracactusjackfragment2.webp", category: 'Remeras', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-234"},
    {id: 36, nombre:"Remera Cactus Jack X PlayStation", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remeracactusjackps.webp", category: 'Remeras', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-121"},
    {id: 37, nombre:"Remera Cactus Jack See You", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remeracactusjackseeyou.webp", category: 'Remeras', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-987"},
    {id: 38, nombre:"Remera Nike Swoosh Yellow", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remeranikeamarilla.webp", category: 'Remeras', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-653"},
    {id: 39, nombre:"Remera Nike Basketball Colors", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remeranikecolores.webp", category: 'Remeras', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-325"},
    {id: 40, nombre:"Remera Nike Colors", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remeranikecolores2.webp", category: 'Remeras', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-884"},
    {id: 41, nombre:"Remera Nike CTLB Black", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remeranikedrake.webp", category: 'Remeras', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-147"},
    {id: 42, nombre:"Remera Nike Swoosh Grey", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remeranikegris.jpg", category: 'Remeras', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-006"},
    {id: 43, nombre:"Remera Have A Nike Day", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remeranikehaveanikeday.webp", category: 'Remeras', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-564"},
    {id: 44, nombre:"Remera Nike Jordan", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remeranikejordan.webp", category: 'Remeras', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-752"},
    {id: 45, nombre:"Remera Nike Swoosh Red", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remeranikeroja.webp", category: 'Remeras', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-863"},
    {id: 46, nombre:"Remera Nike Swoosh Pink", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remeranikerosa.webp", category: 'Remeras', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-444"},
    {id: 47, nombre:"Remera Nike Undercover", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remeranikeundercover.webp", category: 'Remeras', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-286"},
    {id: 48, nombre:"Remera Off White", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remeraoffwhite.webp", category: 'Remeras', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-549"},
    {id: 49, nombre:"Remera Off White Ld", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remeraoffwhitemangalarga.webp", category: 'Remeras', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-377"},
    {id: 50, nombre:"Remera Palm Angels Bear", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remerapalmangelsnegra.webp", category: 'Remeras', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-669"},
    {id: 51, nombre:"Remera Sun of Beach", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remerasunofbeach.webp", category: 'Remeras', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-765"},  
];




/* generador de cards de los productos */


productos.forEach((producto) => {
    document.getElementById("cards").innerHTML +=
    `<div class='card' style='width: 16rem;'>
    <img src="${producto.img}" class='card-img-top btn' alt='card imagen'>
    <div class='card-body'>
    <h5 class='card-title text-center'>${producto.nombre}</h5>
    <p class="card-text text-center"><b>$${producto.precio}</b></p>
    <button class="botonStyle" onclick="verProducto(${producto.id})">Ver producto</button>
    </div>
    </div>`;
});

/* funcion para eliminar productos del carrito */

function generarCardsCarrito(){
    carrito.forEach((producto) => {
        document.getElementById("cards-modal").innerHTML += `<div class="modal-texto">
        <p>${producto.nombre} </p>
        <p>$${producto.precio} </p>
        <p><img src="${producto.img}" style="width:100px"></p>
        <button class="botonEliminar btn btn-danger btn-small fa fa-trash" onclick="eliminarProducto(${producto.id})"></button>
        </div>`;
    });
}

function eliminarProducto(idDelProducto) {
    const eliminarDelCarrito = carrito.findIndex((borrar) => borrar.id === idDelProducto)
    carrito.splice(eliminarDelCarrito, 1)
    localStorage.setItem("carrito", JSON.stringify(carrito));
    window.location.reload();
}





/* funciones para filtrar los productos */

for (const nodoHTML of document.getElementsByClassName('filtrar-categoria')){
    nodoHTML.onclick = (event) => {
        const categoria = (event.target.getAttribute('data-categoria'));
        filtrarProductosPorCategoria(categoria)
    }
}


function filtrarProductosPorCategoria(categoria){
    document.getElementById("cards").innerHTML = "";
    const productosFiltrados = productos.filter((producto) => producto.category === categoria);
    productosFiltrados.forEach((producto) => {
        document.getElementById("cards").innerHTML +=
        `<div class='card' style='width: 16rem;'>
        <img src="${producto.img}" class='card-img-top btn' alt='card imagen'>
        <div class='card-body'>
        <h5 class='card-title text-center'>${producto.nombre}</h5>
        <p class="card-text text-center"><b>$${producto.precio}</b></p>
        <button class="botonStyle" onclick="verProducto(${producto.id})">Ver producto</button>
        </div>
        </div>`;
    }); 
} 



function verProducto(id){
    const indiceProducto = productos.findIndex((producto) => producto.id === id);
    localStorage.setItem('verProducto', JSON.stringify(productos[indiceProducto]));
    location.href = "producto.html";
}





/*carrusel en movimiento */

const carrusel = document.querySelector(".carrusel-items");

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1;


const start = () => {
    intervalo = setInterval(function () {
        carrusel.scrollLeft = carrusel.scrollLeft + step;
        if (carrusel.scrollLeft == maxScrollLeft) {
            step = -1;
        }else if(carrusel.scrollLeft === 0){
            step = 1;
        }
    }, 10);
};

const stop = () => {
    clearInterval(intervalo);
}


start();
