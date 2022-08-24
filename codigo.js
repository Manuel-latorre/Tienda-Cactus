
async function validarStock(id) {
console.log(id)
    await fetch("productos.json")
        .then(response => response.json())
        .then(data => {
            const idproductos = data.find(x => x.id == id.id)
                console.log(idproductos.stock);
            if (idproductos.stock > 0) {
                carrito.push(productoAMostrar);
        document.getElementById("sumarCarrito").innerHTML = carrito.length;
        localStorage.setItem("carrito", JSON.stringify(carrito));
        const total = carrito.reduce((acumulador, productoAMostrar) => acumulador + productoAMostrar.precio, 0);
        document.getElementById("sumarCarrito").innerHTML = `${carrito.length} - $${total}`;
        
        Swal.fire({
            title: 'Agregaste al carrito:',
            text: productoAMostrar.nombre,
            imageUrl: productoAMostrar.img,
            imageWidth: 250,
            imageHeight: 250,
            imageAlt: 'Custom image',
        })
    }
    else{Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: '¡Lo sentimos! No hay stock de este producto',
    })
        
    }

        })
}













/* array de los productos */

const productos = [
    {id: 1, nombre:"Hoodie Cactus Jack", precio: 23500, img: "./imagenesIndex/imagenesCards/hoodie1.jpg", category: 'Home', marca: 'Cactus Jack', color: 'marron', descripcion: "Este buzo con capucha y bolsillos tipo canguro es tan cómoda que la usarás todos los días. Su maravilloso diseño complementará tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: Hoodie"},
    {id: 2, nombre:"Remera McQueen", precio: 12500, img:"./imagenesIndex/imagenesCards/cardremera2.webp", category: 'Home', marca: 'Mc Queen', color: 'negro', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS"},
    {id: 3, nombre:"Crewneck Supreme", precio: 28000, img:"./imagenesIndex/imagenesCards/cardneck.webp", category: 'Home', marca: 'Supreme', color: 'blanco'},
    {id: 4, nombre:"Nike Jordan 1 low", precio: 50000, img: "./imagenesIndex/imagenesCards/imagencard4.jpg", category:'Home', marca: 'Jordan', color: 'rojo'},
    {id: 10, nombre:"Buzo Amiri Paint", precio: 21000, img: "../imagenesIndex/imagenes-buzos/buzoamiri.webp", category: 'Buzos', marca: 'Amiri', color: 'negro'},
    {id: 11, nombre:"Buzo Amiri Bandana ", precio: 17499, img: "../imagenesIndex/imagenes-buzos/buzoamiribandana.webp", category: 'Buzos', marca: 'Amiri', color: 'rojo'},
    {id: 12, nombre:"Buzo Amiri Blue Paint", precio: 25500, img: "../imagenesIndex/imagenes-buzos/buzoamirirazul.webp", category: 'Buzos', marca: 'Amiri', color: 'negro'},
    {id: 13, nombre:"Buzo Cactus Jack Corp", precio: 20199, img: "../imagenesIndex/imagenes-buzos/buzocactusjackcorp.webp", category: 'Buzos', marca: 'Cactus Jack', color: 'negro'},
    {id: 14, nombre:"Buzo Cactus Jack X PlayStation", precio: 28800, img: "../imagenesIndex/imagenes-buzos/buzocactusjackps.webp", category: 'Buzos', marca: 'Cactus Jack', color: 'negro'},
    {id: 15, nombre:"Buzo Cactus Jack Speed Cacti", precio: 12799, img: "../imagenesIndex/imagenes-buzos/buzocactusjackspeed.jpg", category: 'Buzos', marca: 'Cactus Jack', color: 'marron'},
    {id: 16, nombre:"Buzo Cactus Jack Speed Pina Cacti", precio: 24499, img: "../imagenesIndex/imagenes-buzos/buzocactusjackspeedpina.webp", category: 'Buzos', marca: 'Cactus Jack', color: 'azul'},
    {id: 17, nombre:"Buzo Nike CTLB Blue", precio: 26699, img: "../imagenesIndex/imagenes-buzos/buzodrakeazul.webp", category: 'Buzos', marca: 'Nike', color: 'azul'},
    {id: 18, nombre:"Buzo Nike CTLB White", precio: 26699, img: "../imagenesIndex/imagenes-buzos/buzodrakeblanco.webp", category: 'Buzos', marca: 'Nike', color: 'blanco'},
    {id: 19, nombre:"Buzo nike Have A Nike Day", precio: 19999, img: "../imagenesIndex/imagenes-buzos/buzohavenikeday.webp", category: 'Buzos', marca: 'Nike', color: 'negro'},
    {id: 20, nombre:"Buzo Kappa Colors", precio: 18999, img: "../imagenesIndex/imagenes-buzos/buzokappa.webp", category: 'Buzos', marca: 'Kappa', color: 'negro'},
    {id: 21, nombre:"Buzo Zip Kappa", precio: 9999, img: "../imagenesIndex/imagenes-buzos/buzokappanegro.jpg", category: 'Buzos', marca: 'Kappa', color: 'negro'},
    {id: 22, nombre:"Buzo Levis Moment", precio: 22199, img: "../imagenesIndex/imagenes-buzos/buzolevis.webp", category: 'Buzos', marca: 'Levis', color: 'negro'},
    {id: 23, nombre:"Buzo Nike ACG", precio: 29999, img: "../imagenesIndex/imagenes-buzos/buzonikeacg.webp", category: 'Buzos', marca: 'Nike', color: 'negro'},
    {id: 24, nombre:"Buzo Nike Hoodie Yellow", precio: 14999, img: "../imagenesIndex/imagenes-buzos/buzonikeamarillo.webp", category: 'Buzos', marca: 'Nike', color: 'amarillo'},
    {id: 25, nombre:"Crewneck Nike Blue", precio: 13599, img: "../imagenesIndex/imagenes-buzos/buzonikeazul.jpg", category: 'Buzos', marca: 'Nike', color: 'azul'},
    {id: 26, nombre:"Buzo Cacti", precio: 17489, img: "../imagenesIndex/imagenes-buzos/buzonikecacti.jpg", category: 'Buzos', marca: 'Cactus Jack', color: 'verde'},
    {id: 27, nombre:"Crewneck Nike Coffe", precio: 32999, img: "../imagenesIndex/imagenes-buzos/buzonikecoffe.webp", category: 'Buzos', marca: 'Nike', color: 'marron'},
    {id: 28, nombre:"Nike X Jordan", precio: 11999, img: "../imagenesIndex/imagenes-buzos/buzonikejordan.webp", category: 'Buzos', marca: 'Jordan', color: 'negro'},
    {id: 29, nombre:"Buzo Nike Margaritas", precio: 21799, img: "../imagenesIndex/imagenes-buzos/buzonikemarge.webp", category: 'Buzos', marca: 'Nike', color: 'celeste'},
    {id: 30, nombre:"Buzo Nike Flowers", precio: 22390, img: "../imagenesIndex/imagenes-buzos/buzonikemarron.jpg", category: 'Buzos', marca: 'Nike', color: 'marron'},
    {id: 31, nombre:"Remera Cactus Jack Cacti", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remeracactusjackcacti.jpg", category: 'Remeras', marca: 'Cactus Jack', color: 'marron', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-498"},
    {id: 32, nombre:"Remera Cactus Jack Cross", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remeracactusjackcross.webp", category: 'Remeras', marca: 'Cactus Jack', color: 'marron', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-432"},
    {id: 33, nombre:"Remera Cactus Jack X Fragment Danger", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remeracactusjackdanger.webp", category: 'Remeras', marca: 'Cactus Jack', color: 'negro', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-438"},
    {id: 34, nombre:"Remera Cactus Jack X Fragment Wolf", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remeracactusjackfragment.webp", category: 'Remeras', marca: 'Cactus Jack', color: 'blanco', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-499"},
    {id: 35, nombre:"Remera Cactus Jack X Hiroyhi", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remeracactusjackfragment2.webp", category: 'Remeras', marca: 'Cactus Jack', color: 'marron', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-234"},
    {id: 36, nombre:"Remera Cactus Jack X PlayStation", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remeracactusjackps.webp", category: 'Remeras', marca: 'Cactus Jack', color: 'negro', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-121"},
    {id: 37, nombre:"Remera Cactus Jack See You", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remeracactusjackseeyou.webp", category: 'Remeras', marca: 'Cactus Jack', color: 'marron', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-987"},
    {id: 38, nombre:"Remera Nike Swoosh Yellow", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remeranikeamarilla.webp", category: 'Remeras', marca: 'Nike', color: 'amarillo', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-653"},
    {id: 39, nombre:"Remera Nike Basketball Colors", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remeranikecolores.webp", category: 'Remeras', marca: 'Nike', color: 'blanco', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-325"},
    {id: 40, nombre:"Remera Nike Colors", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remeranikecolores2.webp", category: 'Remeras', marca: 'Nike', color: 'blanco', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-884"},
    {id: 41, nombre:"Remera Nike CTLB Black", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remeranikedrake.webp", category: 'Remeras', marca: 'Nike', color: 'negro', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-147"},
    {id: 42, nombre:"Remera Nike Swoosh Grey", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remeranikegris.jpg", category: 'Remeras', marca: 'Nike', color: 'gris', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-006"},
    {id: 43, nombre:"Remera Have A Nike Day", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remeranikehaveanikeday.webp", category: 'Remeras', marca: 'Nike', color: 'azul', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-564"},
    {id: 44, nombre:"Remera Nike Jordan", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remeranikejordan.webp", category: 'Remeras', marca: 'Jordan', color: 'negro', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-752"},
    {id: 45, nombre:"Remera Nike Swoosh Red", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remeranikeroja.webp", category: 'Remeras', marca: 'Nike', color: 'rojo', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-863"},
    {id: 46, nombre:"Remera Nike Swoosh Pink", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remeranikerosa.webp", category: 'Remeras', marca: 'Nike', color: 'rosa', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-444"},
    {id: 47, nombre:"Remera Nike Undercover", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remeranikeundercover.webp", category: 'Remeras', marca: 'Nike', color: 'rojo', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-286"},
    {id: 48, nombre:"Remera Off White", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remeraoffwhite.webp", category: 'Remeras', marca: 'Off White', color: 'blanco', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-549"},
    {id: 49, nombre:"Remera Off White Ld", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remeraoffwhitemangalarga.webp", category: 'Remeras', marca: 'Off White', color: 'blanco', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-377"},
    {id: 50, nombre:"Remera Palm Angels Bear", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remerapalmangelsnegra.webp", category: 'Remeras', marca: 'Palm Angels', color: 'negro', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-669"},
    {id: 51, nombre:"Remera Sun of Beach", precio: 28500, img: "../imagenesIndex/imagenes-remeras/remerasunofbeach.webp", category: 'Remeras', marca: 'Palm Angels', color: 'negro', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-765"},  
    {id: 52, nombre:"Vans Authentic 44", precio: 36999, img: "./imagenes/imagenes-zapatillas/vansauthentic44.webp", category: 'Zapatillas', marca: 'Vans', modelo:'vans' , color: 'amarillo', sku:"SKU: BST-761"},
    {id: 53, nombre:"Vans Authentic Bandana", precio: 22999, img: "./imagenes/imagenes-zapatillas/vansauthenticbandana.jpg", category: 'Zapatillas', marca: 'Vans', modelo:'vans' , color: 'blanco', sku:"SKU: BSW-749"},
    {id: 54, nombre:"Vans Old Skool Navy", precio: 19999, img: "./imagenes/imagenes-zapatillas/vansazules.webp", category: 'Zapatillas', marca: 'Vans', modelo:'vans' , color: 'azul', sku:"SKU: BST-122"},
    {id: 55, nombre:"Vans Old Skool Bandana", precio: 16999, img: "./imagenes/imagenes-zapatillas/vansoldschoolbandana.webp", category: 'Zapatillas', marca: 'Vans', modelo:'vans' , color: 'marron', sku:"SKU: BST-777"},
    {id: 56, nombre:"Vans Old Skool Race", precio: 23999, img: "./imagenes/imagenes-zapatillas/vansoldskoolrace.webp", category: 'Zapatillas', marca: 'Vans', modelo:'vans' , color: 'blanco', sku:"SKU: BST-599"},
    {id: 57, nombre:"Vans Sk8 Hi Navy", precio: 25999, img: "./imagenes/imagenes-zapatillas/vanssk8hiazules.webp", category: 'Zapatillas', marca: 'Vans', modelo:'vans' , color: 'azul', sku:"SKU: BST-229"},
    {id: 59, nombre:"Vans Sk8 Hi Brown", precio: 20999, img: "./imagenes/imagenes-zapatillas/vanssk8himarron.webp", category: 'Zapatillas', marca: 'Vans', modelo:'vans' , color: 'marron', sku:"SKU: BST-119"},
    {id: 60, nombre:"Jordan 1 Dior", precio: 60999, img: "./imagenes/imagenes-zapatillas/jordan1dior.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan1' , color: 'gris', sku:"SKU: BST-449"},
    {id: 61, nombre:"Jordan 1 Fearless", precio: 56799, img: "./imagenes/imagenes-zapatillas/jordan1fearless.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan1' , color: 'blanco', sku:"SKU: BST-118"},
    {id: 62, nombre:"Jordan 1 Gold", precio: 49999, img: "./imagenes/imagenes-zapatillas/jordan1gold.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan1' , color: 'amarillo', sku:"SKU: BST-133"},
    {id: 63, nombre:"Jordan 1 Green", precio: 58999, img: "./imagenes/imagenes-zapatillas/jordan1green.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan1' , color: 'verde', sku:"SKU: BST-988"},
    {id: 64, nombre:"Jordan 1 GreyFrog", precio: 66999, img: "./imagenes/imagenes-zapatillas/jordan1greyfog.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan1' , color: 'gris', sku:"SKU: BST-101"},
    {id: 65, nombre:"Jordan 1 Mid", precio: 59999, img: "./imagenes/imagenes-zapatillas/jordan1mid.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan1' , color: 'azul', sku:"SKU: BST-103"},
    {id: 66, nombre:"Jordan 1 Se", precio: 44999, img: "./imagenes/imagenes-zapatillas/jordan1se.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan1' , color: 'amarillo', sku:"SKU: BST-100"},
    {id: 67, nombre:"Jordan 1 Snake", precio: 42999, img: "./imagenes/imagenes-zapatillas/jordan1snake.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan1' , color: 'negro', sku:"SKU: BST-818"},
    {id: 68, nombre:"Jordan 1 Unc", precio: 66999, img: "./imagenes/imagenes-zapatillas/jordan1unc.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan1' , color: 'celeste', sku:"SKU: BST-434"},
    {id: 69, nombre:"Jordan 3 Green", precio: 50999, img: "./imagenes/imagenes-zapatillas/jordan3green.webp", category: 'Zapatillas', marca: 'Jordan', color: 'verde', sku:"SKU: BST-766"},
    {id: 70, nombre:"Jordan 3 Patchwork ", precio: 49999, img: "./imagenes/imagenes-zapatillas/jordan3patchwork.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan3' , color: 'marron', sku:"SKU: BST-677"},
    {id: 71, nombre:"Jordan 3 Red", precio: 52999, img: "./imagenes/imagenes-zapatillas/jordan3red.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan3' , color: 'rojo', sku:"SKU: BST-676"},
    {id: 72, nombre:"Jordan 3 Red Retro", precio: 56999, img: "./imagenes/imagenes-zapatillas/jordan3redretro.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan3' , color: 'rojo', sku:"SKU: BST-686"},
    {id: 73, nombre:"Jordan 3 Unc", precio: 42999, img: "./imagenes/imagenes-zapatillas/jordan3unc.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan3' , color: 'celeste', sku:"SKU: BST-556"},
    {id: 74, nombre:"Jordan 3 Blue", precio: 52999, img: "./imagenes/imagenes-zapatillas/jordan3blue.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan3' , color: 'azul', sku:"SKU: BST-221"},
    {id: 75, nombre:"Jordan 3 Black", precio: 64899, img: "./imagenes/imagenes-zapatillas/jordan3black.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan3' , color: 'negro', sku:"SKU: BST-176"},
    {id: 76, nombre:"Jordan 3 Chicago", precio: 51999, img: "./imagenes/imagenes-zapatillas/jordan3chicago.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan3' , color: 'rojo', sku:"SKU: BST-233"},
    {id: 77, nombre:"Jordan 3 Chicago Retro", precio: 58999, img: "./imagenes/imagenes-zapatillas/jordan3chicagoretro.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan3' , color: 'rojo', sku:"SKU: BST-322"},
    {id: 78, nombre:"Jordan 4 Bred", precio: 65999, img: "./imagenes/imagenes-zapatillas/jordan4bred.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan4' , color: 'negro', sku:"SKU: BST-155"},
    {id: 79, nombre:"Jordan 4 Chicago", precio: 61999, img: "./imagenes/imagenes-zapatillas/jordan4chicago.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan4' , color: 'rojo', sku:"SKU: BST-255"},
    {id: 80, nombre:"Jordan 4 Kaws", precio: 66999, img: "./imagenes/imagenes-zapatillas/jordan4kaws.jpg", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan4' , color: 'gris', sku:"SKU: BST-355"},
    {id: 81, nombre:"Jordan 4 Mocha", precio: 59999, img: "./imagenes/imagenes-zapatillas/jordan4moha.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan4' , color: 'marron', sku:"SKU: BST-455"},
    {id: 82, nombre:"Jordan 4 PureMoney", precio: 47999, img: "./imagenes/imagenes-zapatillas/jordan4puremoney.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan4' , color: 'blanco', sku:"SKU: BST-555"},
    {id: 83, nombre:"Jordan 4 Purwhite", precio: 44999, img: "./imagenes/imagenes-zapatillas/jordan4purwhite.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan4' , color: 'blanco', sku:"SKU: BST-655"},
    {id: 84, nombre:"Jordan 4 Unc", precio: 70999, img: "./imagenes/imagenes-zapatillas/jordan4unc.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan4' , color: 'celeste', sku:"SKU: BST-575"},
    {id: 85, nombre:"Jordan 4 White Oreo", precio: 48999, img: "./imagenes/imagenes-zapatillas/jordan4whiteoreo.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan4' , color: 'blanco', sku:"SKU: BST-755"},
    {id: 86, nombre:"Jordan 4 X Levis Classic", precio: 39999, img: "./imagenes/imagenes-zapatillas/jordan4xlevis.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan4' , color: 'celeste', sku:"SKU: BST-855"},
    {id: 87, nombre:"Nike Dunk Goldenroad", precio: 44999, img: "./imagenes/imagenes-zapatillas/nikedunkgoldenroad.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'NikeDunk' , color: 'amarillo', sku:"SKU: BST-001"},
    {id: 88, nombre:"Nike Dunk High Brazil", precio: 38999, img: "./imagenes/imagenes-zapatillas/nikedunkhighbrasil.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'NikeDunk' , color: 'verde', sku:"SKU: BST-002"},
    {id: 89, nombre:"Nike Dunk High Orange", precio: 62999, img: "./imagenes/imagenes-zapatillas/nikedunkhighorange.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'NikeDunk' , color: 'blanco', sku:"SKU: BST-003"},
    {id: 90, nombre:"Nike Dunk Kasina", precio: 29999, img: "./imagenes/imagenes-zapatillas/nikedunkkasina.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'NikeDunk' , color: 'azul', sku:"SKU: BST-006"},
    {id: 91, nombre:"Nike Dunk Michigan", precio: 71999, img: "./imagenes/imagenes-zapatillas/nikedunkmichigan.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'NikeDunk' , color: 'azul', sku:"SKU: BST-007"},
    {id: 92, nombre:"Nike Dunk Puregrey", precio: 39999, img: "./imagenes/imagenes-zapatillas/nikedunkpuregrey.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'NikeDunk' , color: 'gris', sku:"SKU: BST-008"},
    {id: 93, nombre:"Nike Dunk Unc", precio: 38999, img: "./imagenes/imagenes-zapatillas/nikedunkunc.jpg", category: 'Zapatillas', marca: 'Jordan', modelo:'NikeDunk' , color: 'celeste', sku:"SKU: BST-009"},
    {id: 93, nombre:"Nike Dunk Union LA", precio: 42999, img: "./imagenes/imagenes-zapatillas/nuikedunkunionla.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'NikeDunk' , color: 'blanco', sku:"SKU: BST-010"},
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
    const carrito = JSON.parse(localStorage.getItem('carrito')) ?? [];
    document.getElementById("sumarCarrito").innerHTML = carrito.length;
    const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    document.getElementById("sumarCarrito").innerHTML = `${carrito.length} - $${total}`;
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

/* funcion para filtrar zapatillas por modelos */

for (const nodoHTML of document.getElementsByClassName('filtrar-zapatilla')){
    nodoHTML.onclick = (event) => {
        const model = (event.target.getAttribute('data-modelo'));
        filtrarZapatillasPorModelo(model)
    }
}

function filtrarZapatillasPorModelo(model){
    document.getElementById("cards").innerHTML = "";
    const productosFiltrados = productos.filter((producto) => producto.modelo === model);
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














/* funciones para filtrar los productos por marca */


for (const nodoHTML of document.getElementsByClassName('filtrar-marca')){
    nodoHTML.onclick = (event) => {
        const brand = (event.target.getAttribute('data-marca'));
        filtrarProductosPorMarca(brand)
    }
}

function filtrarProductosPorMarca(brand){
    document.getElementById("cards").innerHTML = "";
    const productosFiltrados = productos.filter((producto) => producto.marca === brand);
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


/* funciones para filtrar los productos por color */

for (const nodoHTML of document.getElementsByClassName('filtrar-color')){
    nodoHTML.onclick = (event) => {
        const colors = (event.target.getAttribute('data-color'));
        filtrarProductosPorColor(colors)
    }
}

function filtrarProductosPorColor(colors){
    document.getElementById("cards").innerHTML = "";
    const productosFiltrados = productos.filter((producto) => producto.color === colors);
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

