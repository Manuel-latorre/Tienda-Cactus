
async function validarStock(id) {
    console.log(id)
    await fetch("productos.json")
    .then(response => response.json())
    .then(data => {
        const idproductos = data.find(x => x.id == id.id)
        if (idproductos.stock > 0) {
            carrito.push(productoAMostrar);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            const total = carrito.reduce((acumulador, productoAMostrar) => acumulador + productoAMostrar.precio, 0);
            document.getElementById("sumarCarrito").innerHTML = `${carrito.length} - $${total}`;
            
        Swal.fire({
            title: 'Agregaste al carrito:',
            text: productoAMostrar.nombre,
            imageUrl: productoAMostrar.img,
            imageWidth: 200,
            imageHeight: 200,
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
    {id: 1, nombre:"Hoodie Cactus Jack", precio: 23500, img: "./imagenesIndex/imagenesCards/hoodie1.jpg", category: 'Home', marca: 'Cactus Jack', color: 'marron', descripcion: "Este buzo con capucha y bolsillos tipo canguro es tan cómoda que la usarás todos los días. Su maravilloso diseño complementará tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: Hoodie", sku:"SKU: BXA-668"},
    {id: 2, nombre:"Remera McQueen", precio: 12500, img:"./imagenesIndex/imagenesCards/cardremera2.webp", category: 'Home', marca: 'Mc Queen', color: 'negro', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BXA-828"},
    {id: 3, nombre:"Crewneck Supreme", precio: 28000, img:"./imagenesIndex/imagenesCards/cardneck.webp", category: 'Home', marca: 'Supreme', color: 'blanco', sku:"SKU: BXA-118"},
    {id: 4, nombre:"Nike Jordan 1 low", precio: 50000, img: "./imagenesIndex/imagenesCards/imagencard4.jpg", category:'Home', marca: 'Jordan', color: 'rojo', sku:"SKU: BXA-346", descripcion:"Material: Mix de materiales Hi<br>Composición: Capellada: Sintetico / Suela: Goma<br>Definición de tecnología: Nike Air<br>Tecnología: Nike Air<br>Origen: Importado"},
    {id: 10, nombre:"Buzo Amiri Paint", precio: 21000, img: "./imagenesIndex/imagenes-buzos/buzoamiri.webp", category: 'Buzos', marca: 'Amiri', color: 'negro', descripcion: "Este buzo con capucha y bolsillos tipo canguro es tan cómoda que la usarás todos los días. Su maravilloso diseño complementará tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: Hoodie", sku:"SKU: BSA-862"},
    {id: 11, nombre:"Buzo Amiri Bandana ", precio: 17499, img: "./imagenesIndex/imagenes-buzos/buzoamiribandana.webp", category: 'Buzos', marca: 'Amiri', color: 'rojo', descripcion: "Este buzo con capucha y bolsillos tipo canguro es tan cómoda que la usarás todos los días. Su maravilloso diseño complementará tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: Hoodie", sku:"SKU: BSA-222"},
    {id: 12, nombre:"Buzo Amiri Blue Paint", precio: 25500, img: "./imagenesIndex/imagenes-buzos/buzoamirirazul.webp", category: 'Buzos', marca: 'Amiri', color: 'negro', descripcion: "Este buzo con capucha y bolsillos tipo canguro es tan cómoda que la usarás todos los días. Su maravilloso diseño complementará tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: Hoodie", sku:"SKU: BSA-143"},
    {id: 13, nombre:"Buzo Cactus Jack Corp", precio: 20199, img: "./imagenesIndex/imagenes-buzos/buzocactusjackcorp.webp", category: 'Buzos', marca: 'Cactus Jack', color: 'negro', descripcion: "Este buzo con capucha y bolsillos tipo canguro es tan cómoda que la usarás todos los días. Su maravilloso diseño complementará tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: Anorak", sku:"SKU: BSA-732"},
    {id: 14, nombre:"Buzo Cactus Jack X PlayStation", precio: 28800, img: "./imagenesIndex/imagenes-buzos/buzocactusjackps.webp", category: 'Buzos', marca: 'Cactus Jack', color: 'negro', descripcion: "Este buzo con capucha y bolsillos tipo canguro es tan cómoda que la usarás todos los días. Su maravilloso diseño complementará tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: Hoodie", sku:"SKU: BSA-1297"},
    {id: 15, nombre:"Buzo Cactus Jack Speed Cacti", precio: 12799, img: "./imagenesIndex/imagenes-buzos/buzocactusjackspeed.jpg", category: 'Buzos', marca: 'Cactus Jack', color: 'marron', descripcion: "Este buzo con capucha y bolsillos tipo canguro es tan cómoda que la usarás todos los días. Su maravilloso diseño complementará tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: Hoodie", sku:"SKU: BSA-782"},
    {id: 16, nombre:"Buzo Cactus Jack Speed Pina Cacti", precio: 24499, img: "./imagenesIndex/imagenes-buzos/buzocactusjackspeedpina.webp", category: 'Buzos', marca: 'Cactus Jack', color: 'azul', descripcion: "Este buzo con capucha y bolsillos tipo canguro es tan cómoda que la usarás todos los días. Su maravilloso diseño complementará tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: Hoodie", sku:"SKU: BXA-888"},
    {id: 17, nombre:"Buzo Nike CTLB Blue", precio: 26699, img: "./imagenesIndex/imagenes-buzos/buzodrakeazul.webp", category: 'Buzos', marca: 'Nike', color: 'azul', descripcion: "Este buzo con capucha y bolsillos tipo canguro es tan cómoda que la usarás todos los días. Su maravilloso diseño complementará tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: Hoodie", sku:"SKU: BXA-988"},
    {id: 18, nombre:"Buzo Nike CTLB White", precio: 26699, img: "./imagenesIndex/imagenes-buzos/buzodrakeblanco.webp", category: 'Buzos', marca: 'Nike', color: 'blanco', descripcion: "Este buzo con capucha y bolsillos tipo canguro es tan cómoda que la usarás todos los días. Su maravilloso diseño complementará tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: Hoodie", sku:"SKU: BXA-808"},
    {id: 19, nombre:"Buzo nike Have A Nike Day", precio: 19999, img: "./imagenesIndex/imagenes-buzos/buzohavenikeday.webp", category: 'Buzos', marca: 'Nike', color: 'negro', descripcion: "Este buzo con capucha y bolsillos tipo canguro es tan cómoda que la usarás todos los días. Su maravilloso diseño complementará tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: Hoodie", sku:"SKU: BXA-999"},
    {id: 20, nombre:"Buzo Kappa Colors", precio: 18999, img: "./imagenesIndex/imagenes-buzos/buzokappa.webp", category: 'Buzos', marca: 'Kappa', color: 'negro', descripcion: "Este buzo con capucha y bolsillos tipo canguro es tan cómoda que la usarás todos los días. Su maravilloso diseño complementará tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: Hoodie", sku:"SKU: BXA-654"},
    {id: 21, nombre:"Buzo Zip Kappa", precio: 9999, img: "./imagenesIndex/imagenes-buzos/buzokappanegro.jpg", category: 'Buzos', marca: 'Kappa', color: 'negro', descripcion: "Este buzo con capucha y bolsillos tipo canguro es tan cómoda que la usarás todos los días. Su maravilloso diseño complementará tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: Anorak", sku:"SKU: BXA-0101"},
    {id: 22, nombre:"Buzo Levis Moment", precio: 22199, img: "./imagenesIndex/imagenes-buzos/buzolevis.webp", category: 'Buzos', marca: 'Levis', color: 'negro', descripcion: "Este buzo con capucha y bolsillos tipo canguro es tan cómoda que la usarás todos los días. Su maravilloso diseño complementará tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: Hoodie", sku:"SKU: BXA-8768"},
    {id: 23, nombre:"Buzo Nike ACG", precio: 29999, img: "./imagenesIndex/imagenes-buzos/buzonikeacg.webp", category: 'Buzos', marca: 'Nike', color: 'negro', descripcion: "Este buzo con capucha y bolsillos tipo canguro es tan cómoda que la usarás todos los días. Su maravilloso diseño complementará tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: Hoodie", sku:"SKU: BXA-000"},
    {id: 24, nombre:"Buzo Nike Hoodie Yellow", precio: 14999, img: "./imagenesIndex/imagenes-buzos/buzonikeamarillo.webp", category: 'Buzos', marca: 'Nike', color: 'amarillo', descripcion: "Este buzo con capucha y bolsillos tipo canguro es tan cómoda que la usarás todos los días. Su maravilloso diseño complementará tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: Hoodie", sku:"SKU: BXA-444"},
    {id: 25, nombre:"Crewneck Nike Blue", precio: 13599, img: "./imagenesIndex/imagenes-buzos/buzonikeazul.jpg", category: 'Buzos', marca: 'Nike', color: 'azul', descripcion: "Este buzo con capucha y bolsillos tipo canguro es tan cómoda que la usarás todos los días. Su maravilloso diseño complementará tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: Hoodie", sku:"SKU: BXA-211"},
    {id: 26, nombre:"Buzo Cacti", precio: 17489, img: "./imagenesIndex/imagenes-buzos/buzonikecacti.jpg", category: 'Buzos', marca: 'Cactus Jack', color: 'verde', descripcion: "Este buzo con capucha y bolsillos tipo canguro es tan cómoda que la usarás todos los días. Su maravilloso diseño complementará tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: Hoodie", sku:"SKU: BXA-898"},
    {id: 27, nombre:"Crewneck Nike Coffe", precio: 32999, img: "./imagenesIndex/imagenes-buzos/buzonikecoffe.webp", category: 'Buzos', marca: 'Nike', color: 'marron', descripcion: "Este buzo con capucha y bolsillos tipo canguro es tan cómoda que la usarás todos los días. Su maravilloso diseño complementará tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: Hoodie", sku:"SKU: BXA-777"},
    {id: 28, nombre:"Nike X Jordan", precio: 11999, img: "./imagenesIndex/imagenes-buzos/buzonikejordan.webp", category: 'Buzos', marca: 'Jordan', color: 'negro', descripcion: "Este buzo con capucha y bolsillos tipo canguro es tan cómoda que la usarás todos los días. Su maravilloso diseño complementará tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: Hoodie", sku:"SKU: BXA-034"},
    {id: 29, nombre:"Buzo Nike Margaritas", precio: 21799, img: "./imagenesIndex/imagenes-buzos/buzonikemarge.webp", category: 'Buzos', marca: 'Nike', color: 'celeste', descripcion: "Este buzo con capucha y bolsillos tipo canguro es tan cómoda que la usarás todos los días. Su maravilloso diseño complementará tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: Hoodie", sku:"SKU: BXA-299"},
    {id: 30, nombre:"Buzo Nike Flowers", precio: 22390, img: "./imagenesIndex/imagenes-buzos/buzonikemarron.jpg", category: 'Buzos', marca: 'Nike', color: 'marron', descripcion: "Este buzo con capucha y bolsillos tipo canguro es tan cómoda que la usarás todos los días. Su maravilloso diseño complementará tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: Hoodie", sku:"SKU: BXA-878"},
    {id: 31, nombre:"Remera Cactus Jack Cacti", precio: 28500, img: "./imagenesIndex/imagenes-remeras/remeracactusjackcacti.jpg", category: 'Remeras', marca: 'Cactus Jack', color: 'marron', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-498"},
    {id: 32, nombre:"Remera Cactus Jack Cross", precio: 28500, img: "./imagenesIndex/imagenes-remeras/remeracactusjackcross.webp", category: 'Remeras', marca: 'Cactus Jack', color: 'marron', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-432"},
    {id: 33, nombre:"Remera Cactus Jack X Fragment Danger", precio: 28500, img: "./imagenesIndex/imagenes-remeras/remeracactusjackdanger.webp", category: 'Remeras', marca: 'Cactus Jack', color: 'negro', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-438"},
    {id: 34, nombre:"Remera Cactus Jack X Fragment Wolf", precio: 28500, img: "./imagenesIndex/imagenes-remeras/remeracactusjackfragment.webp", category: 'Remeras', marca: 'Cactus Jack', color: 'blanco', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-499"},
    {id: 35, nombre:"Remera Cactus Jack X Hiroyhi", precio: 28500, img: "./imagenesIndex/imagenes-remeras/remeracactusjackfragment2.webp", category: 'Remeras', marca: 'Cactus Jack', color: 'marron', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-234"},
    {id: 36, nombre:"Remera Cactus Jack X PlayStation", precio: 28500, img: "./imagenesIndex/imagenes-remeras/remeracactusjackps.webp", category: 'Remeras', marca: 'Cactus Jack', color: 'negro', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-121"},
    {id: 37, nombre:"Remera Cactus Jack See You", precio: 28500, img: "./imagenesIndex/imagenes-remeras/remeracactusjackseeyou.webp", category: 'Remeras', marca: 'Cactus Jack', color: 'marron', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-987"},
    {id: 38, nombre:"Remera Nike Swoosh Yellow", precio: 28500, img: "./imagenesIndex/imagenes-remeras/remeranikeamarilla.webp", category: 'Remeras', marca: 'Nike', color: 'amarillo', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-653"},
    {id: 39, nombre:"Remera Nike Basketball Colors", precio: 28500, img: "./imagenesIndex/imagenes-remeras/remeranikecolores.webp", category: 'Remeras', marca: 'Nike', color: 'blanco', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-325"},
    {id: 40, nombre:"Remera Nike Colors", precio: 28500, img: "./imagenesIndex/imagenes-remeras/remeranikecolores2.webp", category: 'Remeras', marca: 'Nike', color: 'blanco', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-884"},
    {id: 41, nombre:"Remera Nike CTLB Black", precio: 28500, img: "./imagenesIndex/imagenes-remeras/remeranikedrake.webp", category: 'Remeras', marca: 'Nike', color: 'negro', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-147"},
    {id: 42, nombre:"Remera Nike Swoosh Grey", precio: 28500, img: "./imagenesIndex/imagenes-remeras/remeranikegris.jpg", category: 'Remeras', marca: 'Nike', color: 'gris', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-006"},
    {id: 43, nombre:"Remera Have A Nike Day", precio: 28500, img: "./imagenesIndex/imagenes-remeras/remeranikehaveanikeday.webp", category: 'Remeras', marca: 'Nike', color: 'azul', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-564"},
    {id: 44, nombre:"Remera Nike Jordan", precio: 28500, img: "./imagenesIndex/imagenes-remeras/remeranikejordan.webp", category: 'Remeras', marca: 'Jordan', color: 'negro', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-752"},
    {id: 45, nombre:"Remera Nike Swoosh Red", precio: 28500, img: "./imagenesIndex/imagenes-remeras/remeranikeroja.webp", category: 'Remeras', marca: 'Nike', color: 'rojo', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-863"},
    {id: 46, nombre:"Remera Nike Swoosh Pink", precio: 28500, img: "./imagenesIndex/imagenes-remeras/remeranikerosa.webp", category: 'Remeras', marca: 'Nike', color: 'rosa', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-444"},
    {id: 47, nombre:"Remera Nike Undercover", precio: 28500, img: "./imagenesIndex/imagenes-remeras/remeranikeundercover.webp", category: 'Remeras', marca: 'Nike', color: 'rojo', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-286"},
    {id: 48, nombre:"Remera Off White", precio: 28500, img: "./imagenesIndex/imagenes-remeras/remeraoffwhite.webp", category: 'Remeras', marca: 'Off White', color: 'blanco', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-549"},
    {id: 49, nombre:"Remera Off White Ld", precio: 28500, img: "./imagenesIndex/imagenes-remeras/remeraoffwhitemangalarga.webp", category: 'Remeras', marca: 'Off White', color: 'blanco', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-377"},
    {id: 50, nombre:"Remera Palm Angels Bear", precio: 28500, img: "./imagenesIndex/imagenes-remeras/remerapalmangelsnegra.webp", category: 'Remeras', marca: 'Palm Angels', color: 'negro', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-669"},
    {id: 51, nombre:"Remera Sun of Beach", precio: 28500, img: "./imagenesIndex/imagenes-remeras/remerasunofbeach.webp", category: 'Remeras', marca: 'Palm Angels', color: 'negro', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-765"},  
    {id: 52, nombre:"Vans Authentic 44", precio: 36999, img: "./imagenes/imagenes-zapatillas/vansauthentic44.webp", category: 'Zapatillas', marca: 'Vans', modelo:'vans' , color: 'amarillo', sku:"SKU: BST-761", descripcion:"Las Zapatillas Vans Authentic están confeccionadas en lona, gamuza y sintético para lograr un calzado liviano y sofisticado ideal para todos tus días. De caña baja, con sistema de ajuste de cordones y suela de caucho, te brindan un confort y control hechos a tu medida."},
    {id: 53, nombre:"Vans Authentic Bandana", precio: 22999, img: "./imagenes/imagenes-zapatillas/vansauthenticbandana.jpg", category: 'Zapatillas', marca: 'Vans', modelo:'vans' , color: 'blanco', sku:"SKU: BSW-749", descripcion:"Las Zapatillas Vans Authentic están confeccionadas en lona, gamuza y sintético para lograr un calzado liviano y sofisticado ideal para todos tus días. De caña baja, con sistema de ajuste de cordones y suela de caucho, te brindan un confort y control hechos a tu medida."},
    {id: 54, nombre:"Vans Old Skool Navy", precio: 19999, img: "./imagenes/imagenes-zapatillas/vansazules.webp", category: 'Zapatillas', marca: 'Vans', modelo:'vans' , color: 'azul', sku:"SKU: BST-122", descripcion:"Las Zapatillas Vans Old Skool están confeccionadas en lona, gamuza y sintético para lograr un calzado liviano y sofisticado ideal para todos tus días. De caña baja, con sistema de ajuste de cordones y suela de caucho, te brindan un confort y control hechos a tu medida."},
    {id: 55, nombre:"Vans Old Skool Bandana", precio: 16999, img: "./imagenes/imagenes-zapatillas/vansoldschoolbandana.webp", category: 'Zapatillas', marca: 'Vans', modelo:'vans' , color: 'marron', sku:"SKU: BST-777", descripcion:"Las Zapatillas Vans Old Skool están confeccionadas en lona, gamuza y sintético para lograr un calzado liviano y sofisticado ideal para todos tus días. De caña baja, con sistema de ajuste de cordones y suela de caucho, te brindan un confort y control hechos a tu medida."},
    {id: 56, nombre:"Vans Old Skool Race", precio: 23999, img: "./imagenes/imagenes-zapatillas/vansoldskoolrace.webp", category: 'Zapatillas', marca: 'Vans', modelo:'vans' , color: 'blanco', sku:"SKU: BST-599", descripcion:"Las Zapatillas Vans Old Skool están confeccionadas en lona, gamuza y sintético para lograr un calzado liviano y sofisticado ideal para todos tus días. De caña baja, con sistema de ajuste de cordones y suela de caucho, te brindan un confort y control hechos a tu medida."},
    {id: 57, nombre:"Vans Sk8 Hi Navy", precio: 25999, img: "./imagenes/imagenes-zapatillas/vanssk8hiazules.webp", category: 'Zapatillas', marca: 'Vans', modelo:'vans' , color: 'azul', sku:"SKU: BST-229", descripcion:"Las Zapatillas Vans Sk8 Hi están confeccionadas en lona, gamuza y sintético para lograr un calzado liviano y sofisticado ideal para todos tus días. De caña baja, con sistema de ajuste de cordones y suela de caucho, te brindan un confort y control hechos a tu medida."},
    {id: 59, nombre:"Vans Sk8 Hi Brown", precio: 20999, img: "./imagenes/imagenes-zapatillas/vanssk8himarron.webp", category: 'Zapatillas', marca: 'Vans', modelo:'vans' , color: 'marron', sku:"SKU: BST-119", descripcion:"Las Zapatillas Vans Sk8 Hi están confeccionadas en lona, gamuza y sintético para lograr un calzado liviano y sofisticado ideal para todos tus días. De caña baja, con sistema de ajuste de cordones y suela de caucho, te brindan un confort y control hechos a tu medida."},
    {id: 60, nombre:"Jordan 1 Dior", precio: 60999, img: "./imagenes/imagenes-zapatillas/jordan1dior.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan1' , color: 'gris', sku:"SKU: BST-449", descripcion:"Material: Mix de materiales Hi<br>Composición: Capellada: Sintetico / Suela: Goma<br>Definición de tecnología: Nike Air<br>Tecnología: Nike Air<br>Origen: Importado"},
    {id: 61, nombre:"Jordan 1 Fearless", precio: 56799, img: "./imagenes/imagenes-zapatillas/jordan1fearless.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan1' , color: 'blanco', sku:"SKU: BST-118", descripcion:"Material: Mix de materiales Hi<br>Composición: Capellada: Sintetico / Suela: Goma<br>Definición de tecnología: Nike Air<br>Tecnología: Nike Air<br>Origen: Importado"},
    {id: 62, nombre:"Jordan 1 Gold", precio: 49999, img: "./imagenes/imagenes-zapatillas/jordan1gold.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan1' , color: 'amarillo', sku:"SKU: BST-133", descripcion:"Material: Mix de materiales Hi<br>Composición: Capellada: Sintetico / Suela: Goma<br>Definición de tecnología: Nike Air<br>Tecnología: Nike Air<br>Origen: Importado"},
    {id: 63, nombre:"Jordan 1 Green", precio: 58999, img: "./imagenes/imagenes-zapatillas/jordan1green.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan1' , color: 'verde', sku:"SKU: BST-988", descripcion:"Material: Mix de materiales Hi<br>Composición: Capellada: Sintetico / Suela: Goma<br>Definición de tecnología: Nike Air<br>Tecnología: Nike Air<br>Origen: Importado"},
    {id: 64, nombre:"Jordan 1 GreyFrog", precio: 66999, img: "./imagenes/imagenes-zapatillas/jordan1greyfog.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan1' , color: 'gris', sku:"SKU: BST-101", descripcion:"Material: Mix de materiales Hi<br>Composición: Capellada: Sintetico / Suela: Goma<br>Definición de tecnología: Nike Air<br>Tecnología: Nike Air<br>Origen: Importado"},
    {id: 65, nombre:"Jordan 1 Mid", precio: 59999, img: "./imagenes/imagenes-zapatillas/jordan1mid.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan1' , color: 'azul', sku:"SKU: BST-103", descripcion:"Material: Mix de materiales Hi<br>Composición: Capellada: Sintetico / Suela: Goma<br>Definición de tecnología: Nike Air<br>Tecnología: Nike Air<br>Origen: Importado"},
    {id: 66, nombre:"Jordan 1 Se", precio: 44999, img: "./imagenes/imagenes-zapatillas/jordan1se.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan1' , color: 'amarillo', sku:"SKU: BST-100", descripcion:"Material: Mix de materiales Hi<br>Composición: Capellada: Sintetico / Suela: Goma<br>Definición de tecnología: Nike Air<br>Tecnología: Nike Air<br>Origen: Importado"},      
    {id: 67, nombre:"Jordan 1 Snake", precio: 42999, img: "./imagenes/imagenes-zapatillas/jordan1snake.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan1' , color: 'negro', sku:"SKU: BST-818", descripcion:"Material: Mix de materiales Hi<br>Composición: Capellada: Sintetico / Suela: Goma<br>Definición de tecnología: Nike Air<br>Tecnología: Nike Air<br>Origen: Importado"},
    {id: 68, nombre:"Jordan 1 Unc", precio: 66999, img: "./imagenes/imagenes-zapatillas/jordan1unc.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan1' , color: 'celeste', sku:"SKU: BST-434", descripcion:"Material: Mix de materiales Hi<br>Composición: Capellada: Sintetico / Suela: Goma<br>Definición de tecnología: Nike Air<br>Tecnología: Nike Air<br>Origen: Importado"},
    {id: 69, nombre:"Jordan 3 Green", precio: 50999, img: "./imagenes/imagenes-zapatillas/jordan3green.webp", category: 'Zapatillas', marca: 'Jordan', color: 'verde', sku:"SKU: BST-766", descripcion:"Material: Mix de materiales Hi<br>Composición: Capellada: Sintetico / Suela: Goma<br>Definición de tecnología: Nike Air<br>Tecnología: Nike Air<br>Origen: Importado"},
    {id: 70, nombre:"Jordan 3 Patchwork ", precio: 49999, img: "./imagenes/imagenes-zapatillas/jordan3patchwork.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan3' , color: 'marron', sku:"SKU: BST-677", descripcion:"Material: Mix de materiales Hi<br>Composición: Capellada: Sintetico / Suela: Goma<br>Definición de tecnología: Nike Air<br>Tecnología: Nike Air<br>Origen: Importado"},
    {id: 71, nombre:"Jordan 3 Red", precio: 52999, img: "./imagenes/imagenes-zapatillas/jordan3red.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan3' , color: 'rojo', sku:"SKU: BST-676", descripcion:"Material: Mix de materiales Hi<br>Composición: Capellada: Sintetico / Suela: Goma<br>Definición de tecnología: Nike Air<br>Tecnología: Nike Air<br>Origen: Importado"},
    {id: 72, nombre:"Jordan 3 Red Retro", precio: 56999, img: "./imagenes/imagenes-zapatillas/jordan3redretro.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan3' , color: 'rojo', sku:"SKU: BST-686", descripcion:"Material: Mix de materiales Hi<br>Composición: Capellada: Sintetico / Suela: Goma<br>Definición de tecnología: Nike Air<br>Tecnología: Nike Air<br>Origen: Importado"},
    {id: 73, nombre:"Jordan 3 Unc", precio: 42999, img: "./imagenes/imagenes-zapatillas/jordan3unc.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan3' , color: 'celeste', sku:"SKU: BST-556", descripcion:"Material: Mix de materiales Hi<br>Composición: Capellada: Sintetico / Suela: Goma<br>Definición de tecnología: Nike Air<br>Tecnología: Nike Air<br>Origen: Importado"},
    {id: 74, nombre:"Jordan 3 Blue", precio: 52999, img: "./imagenes/imagenes-zapatillas/jordan3blue.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan3' , color: 'azul', sku:"SKU: BST-221", descripcion:"Material: Mix de materiales Hi<br>Composición: Capellada: Sintetico / Suela: Goma<br>Definición de tecnología: Nike Air<br>Tecnología: Nike Air<br>Origen: Importado"},
    {id: 75, nombre:"Jordan 3 Black", precio: 64899, img: "./imagenes/imagenes-zapatillas/jordan3black.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan3' , color: 'negro', sku:"SKU: BST-176", descripcion:"Material: Mix de materiales Hi<br>Composición: Capellada: Sintetico / Suela: Goma<br>Definición de tecnología: Nike Air<br>Tecnología: Nike Air<br>Origen: Importado"},
    {id: 76, nombre:"Jordan 3 Chicago", precio: 51999, img: "./imagenes/imagenes-zapatillas/jordan3chicago.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan3' , color: 'rojo', sku:"SKU: BST-233", descripcion:"Material: Mix de materiales Hi<br>Composición: Capellada: Sintetico / Suela: Goma<br>Definición de tecnología: Nike Air<br>Tecnología: Nike Air<br>Origen: Importado"},
    {id: 77, nombre:"Jordan 3 Chicago Retro", precio: 58999, img: "./imagenes/imagenes-zapatillas/jordan3chicagoretro.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan3' , color: 'rojo', sku:"SKU: BST-322", descripcion:"Material: Mix de materiales Hi<br>Composición: Capellada: Sintetico / Suela: Goma<br>Definición de tecnología: Nike Air<br>Tecnología: Nike Air<br>Origen: Importado"},
    {id: 78, nombre:"Jordan 4 Bred", precio: 65999, img: "./imagenes/imagenes-zapatillas/jordan4bred.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan4' , color: 'negro', sku:"SKU: BST-155", descripcion:"Material: Mix de materiales Hi<br>Composición: Capellada: Sintetico / Suela: Goma<br>Definición de tecnología: Nike Air<br>Tecnología: Nike Air<br>Origen: Importado"},
    {id: 79, nombre:"Jordan 4 Chicago", precio: 61999, img: "./imagenes/imagenes-zapatillas/jordan4chicago.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan4' , color: 'rojo', sku:"SKU: BST-255", descripcion:"Material: Mix de materiales Hi<br>Composición: Capellada: Sintetico / Suela: Goma<br>Definición de tecnología: Nike Air<br>Tecnología: Nike Air<br>Origen: Importado"},
    {id: 80, nombre:"Jordan 4 Kaws", precio: 66999, img: "./imagenes/imagenes-zapatillas/jordan4kaws.jpg", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan4' , color: 'gris', sku:"SKU: BST-355", descripcion:"Material: Mix de materiales Hi<br>Composición: Capellada: Sintetico / Suela: Goma<br>Definición de tecnología: Nike Air<br>Tecnología: Nike Air<br>Origen: Importado"},
    {id: 81, nombre:"Jordan 4 Mocha", precio: 59999, img: "./imagenes/imagenes-zapatillas/jordan4moha.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan4' , color: 'marron', sku:"SKU: BST-455", descripcion:"Material: Mix de materiales Hi<br>Composición: Capellada: Sintetico / Suela: Goma<br>Definición de tecnología: Nike Air<br>Tecnología: Nike Air<br>Origen: Importado"},
    {id: 82, nombre:"Jordan 4 PureMoney", precio: 47999, img: "./imagenes/imagenes-zapatillas/jordan4puremoney.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan4' , color: 'blanco', sku:"SKU: BST-555", descripcion:"Material: Mix de materiales Hi<br>Composición: Capellada: Sintetico / Suela: Goma<br>Definición de tecnología: Nike Air<br>Tecnología: Nike Air<br>Origen: Importado"},
    {id: 83, nombre:"Jordan 4 Purwhite", precio: 44999, img: "./imagenes/imagenes-zapatillas/jordan4purwhite.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan4' , color: 'blanco', sku:"SKU: BST-655", descripcion:"Material: Mix de materiales Hi<br>Composición: Capellada: Sintetico / Suela: Goma<br>Definición de tecnología: Nike Air<br>Tecnología: Nike Air<br>Origen: Importado"},
    {id: 84, nombre:"Jordan 4 Unc", precio: 70999, img: "./imagenes/imagenes-zapatillas/jordan4unc.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan4' , color: 'celeste', sku:"SKU: BST-575", descripcion:"Material: Mix de materiales Hi<br>Composición: Capellada: Sintetico / Suela: Goma<br>Definición de tecnología: Nike Air<br>Tecnología: Nike Air<br>Origen: Importado"},
    {id: 85, nombre:"Jordan 4 White Oreo", precio: 48999, img: "./imagenes/imagenes-zapatillas/jordan4whiteoreo.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan4' , color: 'blanco', sku:"SKU: BST-755", descripcion:"Material: Mix de materiales Hi<br>Composición: Capellada: Sintetico / Suela: Goma<br>Definición de tecnología: Nike Air<br>Tecnología: Nike Air<br>Origen: Importado"},
    {id: 86, nombre:"Jordan 4 X Levis Classic", precio: 39999, img: "./imagenes/imagenes-zapatillas/jordan4xlevis.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'Jordan4' , color: 'celeste', sku:"SKU: BST-855", descripcion:"Material: Mix de materiales Hi<br>Composición: Capellada: Sintetico / Suela: Goma<br>Definición de tecnología: Nike Air<br>Tecnología: Nike Air<br>Origen: Importado"},
    {id: 87, nombre:"Nike Dunk Goldenroad", precio: 44999, img: "./imagenes/imagenes-zapatillas/nikedunkgoldenroad.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'NikeDunk' , color: 'amarillo', sku:"SKU: BST-001", descripcion:"Material: Mix de materiales Hi<br>Composición: Capellada: Sintetico / Suela: Goma<br>Definición de tecnología: Nike Air<br>Tecnología: Nike Air<br>Origen: Importado"},
    {id: 88, nombre:"Nike Dunk High Brazil", precio: 38999, img: "./imagenes/imagenes-zapatillas/nikedunkhighbrasil.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'NikeDunk' , color: 'verde', sku:"SKU: BST-002", descripcion:"Material: Mix de materiales Hi<br>Composición: Capellada: Sintetico / Suela: Goma<br>Definición de tecnología: Nike Air<br>Tecnología: Nike Air<br>Origen: Importado"},
    {id: 89, nombre:"Nike Dunk High Orange", precio: 62999, img: "./imagenes/imagenes-zapatillas/nikedunkhighorange.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'NikeDunk' , color: 'blanco', sku:"SKU: BST-003", descripcion:"Material: Mix de materiales Hi<br>Composición: Capellada: Sintetico / Suela: Goma<br>Definición de tecnología: Nike Air<br>Tecnología: Nike Air<br>Origen: Importado"},
    {id: 90, nombre:"Nike Dunk Kasina", precio: 29999, img: "./imagenes/imagenes-zapatillas/nikedunkkasina.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'NikeDunk' , color: 'azul', sku:"SKU: BST-006", descripcion:"Material: Mix de materiales Hi<br>Composición: Capellada: Sintetico / Suela: Goma<br>Definición de tecnología: Nike Air<br>Tecnología: Nike Air<br>Origen: Importado"},
    {id: 91, nombre:"Nike Dunk Michigan", precio: 71999, img: "./imagenes/imagenes-zapatillas/nikedunkmichigan.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'NikeDunk' , color: 'azul', sku:"SKU: BST-007", descripcion:"Material: Mix de materiales Hi<br>Composición: Capellada: Sintetico / Suela: Goma<br>Definición de tecnología: Nike Air<br>Tecnología: Nike Air<br>Origen: Importado"},
    {id: 92, nombre:"Nike Dunk Puregrey", precio: 39999, img: "./imagenes/imagenes-zapatillas/nikedunkpuregrey.webp", category: 'Zapatillas', marca: 'Jordan', modelo:'NikeDunk' , color: 'gris', sku:"SKU: BST-008", descripcion:"Material: Mix de materiales Hi<br>Composición: Capellada: Sintetico / Suela: Goma<br>Definición de tecnología: Nike Air<br>Tecnología: Nike Air<br>Origen: Importado"},
    {id: 93, nombre:"Nike Dunk Unc", precio: 38999, img: "./imagenes/imagenes-zapatillas/nikedunkunc.jpg", category: 'Zapatillas', marca: 'Jordan', modelo:'NikeDunk' , color: 'celeste', sku:"SKU: BST-009", descripcion:"Material: Mix de materiales Hi<br>Composición: Capellada: Sintetico / Suela: Goma<br>Definición de tecnología: Nike Air<br>Tecnología: Nike Air<br>Origen: Importado"},
    {id: 94, nombre:"Buzo The North Face Black", precio: 32999, img: "./imagenesIndex/imagenes-buzos/buzonorthblack.webp", category: 'Buzos', marca: 'The North Face', color: 'negro', sku:"SKU: BST-014", descripcion: "Este buzo con capucha y bolsillos tipo canguro es tan cómoda que la usarás todos los días. Su maravilloso diseño complementará tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: Hoodie", sku:"SKU: BSW-622"},
    {id: 95, nombre:"Buzo The North Face White", precio: 32999, img:"./imagenesIndex/imagenes-buzos/buzonorthwhite.webp" , category: '  Buzos', marca: 'The North Face', color: 'blanco', sku:"SKU: BSW-220", descripcion: "Este buzo con capucha y bolsillos tipo canguro es tan cómoda que la usarás todos los días. Su maravilloso diseño complementará tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: Hoodie", sku:"SKU: BSA-342"},
    {id: 96, nombre:"Buzo Palace Grey", precio: 13999, img:"./imagenesIndex/imagenes-buzos/buzopalacegris.webp" , category: 'Buzos', marca: 'Palace', color: 'gris', sku:"SKU: BSW-110", descripcion: "Este buzo con capucha y bolsillos tipo canguro es tan cómoda que la usarás todos los días. Su maravilloso diseño complementará tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: Hoodie", sku:"SKU: BSW-962"},
    {id: 97, nombre:"Buzo Palace Black", precio: 12999, img:"./imagenesIndex/imagenes-buzos/buzopalacengro.webp" , category: 'Buzos', marca: 'Palace', color: 'negro', sku:"SKU: BSW-110", descripcion: "Este buzo con capucha y bolsillos tipo canguro es tan cómoda que la usarás todos los días. Su maravilloso diseño complementará tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: Hoodie", sku:"SKU: BSA-112"},
    {id: 98, nombre:"Buzo Palace Green", precio: 12999, img:"./imagenesIndex/imagenes-buzos/buzopalaceverde.webp" , category: 'Buzos', marca: 'Palace', color: 'verde', sku:"SKU: BSW-000", descripcion: "Este buzo con capucha y bolsillos tipo canguro es tan cómoda que la usarás todos los días. Su maravilloso diseño complementará tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: Hoodie", sku:"SKU: BSA-042"},
    {id: 99, nombre:"Buzo Palace Greenapple", precio: 12999, img:"./imagenesIndex/imagenes-buzos/buzopalaceverde2.webp" , category: 'Buzos', marca: 'Palace', color: 'verde', sku:"SKU: BSW-310", descripcion: "Este buzo con capucha y bolsillos tipo canguro es tan cómoda que la usarás todos los días. Su maravilloso diseño complementará tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: Hoodie", sku:"SKU: BSA-030"},
    {id: 100, nombre:"Buzo The North Face Redfire", precio: 32999, img:"./imagenesIndex/imagenes-buzos/buzorojonorth.webp" , category: 'Buzos', marca: 'The North Face', color: 'rojo', sku:"SKU: BSW-432", descripcion: "Este buzo con capucha y bolsillos tipo canguro es tan cómoda que la usarás todos los días. Su maravilloso diseño complementará tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: Anorak", sku:"SKU: BSA-2252"},
    {id: 101, nombre:"Buzo Zip Carhartt", precio: 36999, img:"./imagenesIndex/imagenes-buzos/buzozipcarhartt.webp" , category: 'Buzos', marca: 'Carhartt', color: 'blanco', sku:"SKU: BSW-510", descripcion: "Este buzo con capucha y bolsillos tipo canguro es tan cómoda que la usarás todos los días. Su maravilloso diseño complementará tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: Anorak", sku:"SKU: BSA-007"},
    {id: 102, nombre:"Anorak Carhartt Work", precio: 44999, img:"./imagenesIndex/imagenes-buzos/buzozipcarharttnegro.webp" , category: 'Buzos', marca: 'Carhartt', color: 'negro', sku:"SKU: BSW-440", descripcion: "Este buzo con capucha y bolsillos tipo canguro es tan cómoda que la usarás todos los días. Su maravilloso diseño complementará tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: Hoodie", sku:"SKU: BSA-700"},
    {id: 103, nombre:"Buzo Zip The North Face", precio: 40999, img:"./imagenesIndex/imagenes-buzos/buzozipnorth.webp" , category: 'Buzos', marca: 'The North Face', color: 'negro', sku:"SKU: BSW-119", descripcion: "Este buzo con capucha y bolsillos tipo canguro es tan cómoda que la usarás todos los días. Su maravilloso diseño complementará tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: Anorak", sku:"SKU: BSA-998"},
    {id: 104, nombre:"Hoodie Carhartt Logo", precio: 33999, img:"./imagenesIndex/imagenes-buzos/buzocarharharrtnegrologo.webp" , category: 'Buzos', marca: 'Carhartt', color: 'negro', sku:"SKU: BSW-132", descripcion: "Este buzo con capucha y bolsillos tipo canguro es tan cómoda que la usarás todos los días. Su maravilloso diseño complementará tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: Hoodie", sku:"SKU: BSA-665"},
    {id: 105, nombre:"Hoodie Carhartt Grey", precio: 42999, img:"./imagenesIndex/imagenes-buzos/buzocarharttgris.jpg" , category: 'Buzos', marca: 'Carhartt', color: 'gris', sku:"SKU: BSW-180", descripcion: "Este buzo con capucha y bolsillos tipo canguro es tan cómoda que la usarás todos los días. Su maravilloso diseño complementará tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: Hoodie", sku:"SKU: BSA-599"},
    {id: 106, nombre:"Hoodie Carhartt Brown", precio: 29599, img:"./imagenesIndex/imagenes-buzos/buzocarharttmarron.jpg" , category: 'Buzos', marca: 'Carhartt', color: 'marron', sku:"SKU: BSW-180", descripcion: "Este buzo con capucha y bolsillos tipo canguro es tan cómoda que la usarás todos los días. Su maravilloso diseño complementará tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: Hoodie", sku:"SKU: BSA-977"},
    {id: 107, nombre:"Remera Bape", precio: 18500, img: "./imagenesIndex/imagenes-remeras/remerabape.webp", category: 'Remeras', marca: 'Bape', color: 'blanco', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BSW-222"},
    {id: 108, nombre:"Remera Bape Whitek", precio: 22500, img: "./imagenesIndex/imagenes-remeras/remerabapeblanca.webp", category: 'Remeras', marca: 'Bape', color: 'blanco', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-2316"},
    {id: 109, nombre:"Remera Bape Music & Life", precio: 21500, img: "../imagenesIndex/imagenes-remeras/remerabapemusiclife.webp", category: 'Remeras', marca: 'Bape', color: 'negro', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-211"},
    {id: 110, nombre:"Remera BapeBape", precio: 18900, img: "./imagenesIndex/imagenes-remeras/remerabapenegra.jpg", category: 'Remeras', marca: 'Bape', color: 'negro', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-2432"},
    {id: 111, nombre:"Remera Carhartt", precio: 14500, img: "./imagenesIndex/imagenes-remeras/remeracarhartt.webp", category: 'Remeras', marca: 'Carhartt', color: 'blanco', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-231"},
    {id: 112, nombre:"Remera Carhartt Black", precio: 14500, img: "./imagenesIndex/imagenes-remeras/remeracarharttnegra.webp", category: 'Remeras', marca: 'Carhartt', color: 'negro', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-2116"},
    {id: 113, nombre:"Remera The North Face Black", precio: 19500, img: "./imagenesIndex/imagenes-remeras/remeranorthblack.webp", category: 'Remeras', marca: 'The North Face', color: 'negro', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-1186"},
    {id: 114, nombre:"Remera Palace White", precio: 11500, img: "./imagenesIndex/imagenes-remeras/remerapalaceblanca.webp", category: 'Remeras', marca: 'Palace', color: 'blanco', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-586"},
    {id: 115, nombre:"Remera Palace Black", precio: 11500, img: "./imagenesIndex/imagenes-remeras/remerapalacenegra.webp", category: 'Remeras', marca: 'Palace', color: 'negro', descripcion:"Esta Graphic Set-In Neck es suave y cómoda, esta prenda básica está hecha con un corte relajado. Combina esta remera con tus jeans favoritos y dale un renovado giro a tu look.<br> Composicion: 100% poliester <br> Origen: China <br> Calce: SS TEES GRAPHICS", sku:"SKU: BST-5486"},

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
    const carrito = JSON.parse(localStorage.getItem('carrito')) ?? [];
    carrito.forEach((producto) => {
        document.getElementById("cards-modal").innerHTML += `<div class="modal-texto">
        <p>${producto.nombre} </p>
        <p>$${producto.precio} </p>
        <p><img src="${producto.img}" style="width:80px"></p>
        <button class="botonEliminar btn btn-danger btn-small fa fa-trash" id="botonEliminar" onclick="eliminarProducto(${producto.id})"></button>
        </div>`;
    });
    
    const total = carrito.reduce((acumulador, productoAMostrar) => acumulador + productoAMostrar.precio, 0);
    document.getElementById("sumarCarrito").innerHTML = `${carrito.length} - $${total}`;
    
    const btnEliminar = document.getElementById("botonEliminar")
    btnEliminar.addEventListener("click", (idDelProducto) => {
        const eliminarDelCarrito = carrito.findIndex((borrar) => borrar.id === idDelProducto)
        carrito.splice(eliminarDelCarrito, 1)
        localStorage.setItem("carrito", JSON.stringify(carrito));
        window.location.reload();
    });

    
    
    const btnVaciar = document.getElementById('vaciarCarrito')
    btnVaciar.addEventListener("click", () => {
        let carrito = [];
        localStorage.setItem("carrito", JSON.stringify(carrito));
        window.location.reload();
    });
    
}

function eliminarProducto(idDelProducto) {
    const eliminarDelCarrito = carrito.findIndex((borrar) => borrar.id === idDelProducto)
    carrito.splice(eliminarDelCarrito, 1)
    localStorage.setItem("carrito", JSON.stringify(carrito));
    window.location.reload();
}






/* funcion para vaciar carrito */



const btnVaciar = document.getElementById('vaciarCarrito')
btnVaciar.addEventListener("click", () => {
    let carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
    window.location.reload();
});




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
};

carrusel.addEventListener('mouseover', () => {
    stop();
})
carrusel.addEventListener('mouseout', () => {
    start();
})




start();



/* buscador interno */


document.addEventListener("keyup", e=> {
    if(e.target.matches("#buscador")){

        if (e.key == "Escape")e.target.value = ""

        document.querySelectorAll(".marcas").forEach(elemento => {
            elemento.textContent.toLowerCase().includes(e.target.value.toLowerCase())

            ?elemento.classList.remove("filtro")
            :elemento.classList.add("filtro")
        })
    }
})


