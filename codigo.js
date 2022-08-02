document.addEventListener("keyup", e => {
    
    if(e.target.matches("#buscador")){

        if(e.key=== "Escape")e.target.value = ""
        
        document.querySelectorAll(".productos").forEach(productos =>{

            productos.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?productos.classList.remove("filtro")
            :productos.classList.add("filtro")
        })
    }
}) 
























































































/* const carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];
const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
document.getElementById("sumarCarrito").innerHTML =  `${carrito.length} - $${total}`; */

/* function generarCardsCarrito(){
    carrito.forEach((producto) => {
        document.getElementById("cards-modal").innerHTML +=  
    })
} */





/* Array con los prodcutos de la seccion de cards 1 */

/* const productosCard1 = [
    {id: 1, nombre:"Nike Jordan 6 off white", precio: 45670, img: "./imagenesIndex/imagenesCards/imagencard1.webp"},
    {id: 2, nombre:"Nike Jordan 1 high Og", precio: 38200, img: "./imagenesIndex/imagenesCards/imagencard2.webp"},
    {id: 3, nombre:"Nike Jordan 4 X Levis", precio: 68000, img: "./imagenesIndex/imagenesCards/imagencard3.jpg"},
    {id: 4, nombre:"Nike Jordan 1 low", precio: 50000, img: "./imagenesIndex/imagenesCards/imagencard4.jpg"},
]; */

/* Array con los productos de la seccion de cards 2 */

/* const productosCard2 = [
    {id: 5, nombre:"Hoodie Cactus Jack", precio: 23500, img: "./imagenesIndex/imagenesCards/hoodie1.jpg"},
    {id: 6, nombre:"Remera Kaws", precio: 9800, img:"./imagenesIndex/imagenesCards/cardremera.webp"},
    {id: 7, nombre:"Remera McQueen", precio: 12500, img:"./imagenesIndex/imagenesCards/cardremera2.webp"},
    {id: 8, nombre:"Crewneck Supreme", precio: 28000, img:"./imagenesIndex/imagenesCards/cardneck.webp"},
];

let cards = ""; */


/* Seccion de cards 1 */

/* productosCard1.forEach((producto) => {
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
}) */

/* productosCard1.forEach((producto) => {
    const idButton = `agregarCarrito${producto.id}`
    document.getElementById(idButton).addEventListener('click', () => {
        carrito.push(producto); */
        /* localStorage.setItem("carrito", JSON.stringify(carrito));
        const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
        document.getElementById("sumarCarrito").innerHTML =  `${carrito.length} - $${total}`; */
        /* document.getElementById("cards").innerHTML +=  `<tr>
        <th scope ="row">${producto.id}</th>
        <td>${producto.nombre}</td>
        <td><img src="${producto.img}"</td>
        <td>${producto.precio}</td>
        <td><button>Eliminar del carrrito</button></td>
        </tr>` */
        
      /*   document.getElementById("sumarCarrito").innerHTML = carrito.length; 
    })
});  */














/* Seccion de cards 2 */

/* productosCard2.forEach((producto) => {
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
})



productosCard2.forEach((producto) => {
    const idButton = `agregarCarrito${producto.id}`
    document.getElementById(idButton).addEventListener('click', () => {
        carrito.push(producto);
        document.getElementById("sumarCarrito").innerHTML = carrito.length;
        console.log(carrito);
        localStorage.setItem("totalCarrito", carrito.length);
    })
}); */










/* "Buscador casero jeje" */









































/* let producto1 = new Producto("Nike Jordan 6 off white", 280, 2);
let producto2 = new Producto("Nike Jordan 1 high Og", 410, 5);
let producto3 = new Producto("Nike Jordan 4 X Levis", 100, 1);
let producto4 = new Producto("Nike Jordan 1 low", 615, 3);
let producto5 = new Producto("Hoodie Cactus Jack", 219, 4);
let producto6 = new Producto("Remera Kaws", 90, 4);
let producto7 = new Producto("Remera McQueen", 75, 2);
let producto8 = new Producto("Crewneck Supreme", 235, 5); */  




/* class Producto {
    constructor(nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    
    }
} 












/* Arrays para manipular en las funciones */
/* const listadoProductos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8];

let añadirAlCarrito = [];

let numCompra = [0003, 1111, 2222, 3434];
let numEnvio = [1010, 2121, 9999, 9876];

let totalCarrito = 1;
let precio = 1;
let respuesta;  */

/*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  *//*  */


/* funcion para que el usuario elija que tipo de opreacion desea realizar */

/* function ingresarOperacion(){
    let entrada = parseInt(prompt("Bienvenido a Tienda Cactus, Ingrese con el numero correspondiente la operacion que desea realizar: \n1)Visitar la tienda\n2)Ver mis compras\n3)Estado de envio de mi compra\n4)Salir"));
    while (entrada !== 4){

        switch (entrada){
            case 1: visitarLaTienda();
            break;
            
            case 2: verMisCompras();
            break;
            
            case 3: estadoDeEnvio();
            break;
            
        }
        entrada = parseInt(prompt("Ingrese con el numero correspondiente la operacion que desea realizar: \n1)Visitar la tienda\n2)Ver mis compras\n3)Estado de envio de mi compra\n4)Salir"));
    }
    
} */

/* funcion para mostrar los productos de la tienda */

/* function visitarLaTienda(){
    let textoAux = ""
        listadoProductos.forEach((producto) => {
            textoAux += "-" +
            producto.nombre + " " + "Precio:" + " " + "$" + " " + producto.precio + " " + "Stock:"+ " " + producto.stock + "\n";
        });
        prompt(textoAux);
}  */


/* funcion para que el usuario pueda ver las compras que hizo mediante el ingreso del numero de compra */

/* function verMisCompras(){
let ingresarNumero = parseInt(prompt("Ingrese su numero de compra"));
let existe = numCompra.find((numero) => {
    return numero = ingresarNumero
}); 

if (ingresarNumero === 0003){
    alert("Producto: " + producto1.nombre + "\n"
    + "Precio: " + "$" + producto1.precio + "\n"
    + "Costo de envio a domicilio: $500 " + "\n"
    + "Direccion de envio: 23 n678, Cordoba " + "\n"
    + "Total: $780" + "\n"
    + "Metodo de pago: MercadoPago" + "\n"
    + "Fecha de compra: 20/7/22" + "\n");
    return existe;
}

if (ingresarNumero === 2222){
    alert("Producto: " + producto6.nombre + "\n"
    + "Precio: " + "$" + producto6.precio + "\n"
    + "Costo de envio a domicilio: $500 " + "\n"
    + "Direccion de envio: Calle 12 n20, Entre Rios " + "\n"
    + "Total: $590" + "\n"
    + "Metodo de pago: Efectivo, Rapipago" + "\n"
    + "Fecha de compra: 2/5/22" + "\n");
    return existe;
}


if (ingresarNumero === 1111){
    alert("Producto: " + producto2.nombre + "\n"
    + "Precio: " + "$" + producto2.precio + "\n"
    + "Costo de envio a sucursal: $400 " + "\n"
    + "Direccion de sucursal: n34, Capital Federal " + "\n"
    + "Total: $810" + "\n"
    + "Metodo de pago: Visa debito terminada en 0011" + "\n"
    + "Fecha de compra: 16/6/22" + "\n");
        return existe;
    }
    
    if (ingresarNumero === 3434){
        alert("Producto: " + producto4.nombre + "\n"
        + "Precio: " + "$" + producto4.precio + "\n"
        + "Costo de envio a domicilio: $500 " + "\n"
        + "Direccion de envio: Calle 68 n111, Jujuy, Capital " + "\n"
        + "Total: $1115" + "\n"
        + "Metodo de pago: Paypal" + "\n"
        + "Fecha de compra: 10/6/22" + "\n");
        return existe;
    }
    
    else(ingresarNumero !== numCompra);{
        
        alert("Numero de compra ingresado incorrecto")
    }
    
    
    
} */

/* funcion para que el usuario pueda ver el seguimiento de su compra */

/* function estadoDeEnvio(){
    let ingresarNumeroDeEnvio = parseInt(prompt("Ingrese numero de envio"));
    let existeNumero = numEnvio.find((numero) => {
        return numero = ingresarNumeroDeEnvio
    }); 
    
    if (ingresarNumeroDeEnvio === 1010){
        alert("Fecha y hora: 12/07/2022, 14:41" + "\n"
        + "Estado: Pendiente de ingreo al Correo" + "\n"
        + "Sucursal: Rodriguez A");
        return existeNumero;
    }
    
    if (ingresarNumeroDeEnvio === 2121){
        alert("Fecha y hora: 10/07/2022, 20:51" + "\n"
        + "Estado: Admitido en el Correo" + "\n"
            + "Sucursal: Maipu 455" + "\n"
            + "\n"
            + "Fecha y hora: 11/07/2022, 9:23" + "\n"
            + "Estado: En proceso en el Correo" + "\n"
            + "Sucursal: Maipu 455" + "\n");
            return existeNumero;
        }
        
        if (ingresarNumeroDeEnvio === 9999){
            alert("Fecha y hora: 17/07/2022, 17:08" + "\n"
            + "Estado: Admitido en el Correo" + "\n"
            + "Sucursal: Balcarce 102" + "\n"
            + "\n"
            + "Fecha y hora: 18/07/2022, 14:00" + "\n"
            + "Estado: En proceso en el Correo" + "\n"
            + "Sucursal: Balcarce 102" + "\n"
            + "\n"
            + "Fecha y hora: 18/07/2022, 19:13" + "\n"
            + "Estado: En viaje a sucursal de destino" + "\n"
            + "Sucursal: Balcarce 102" + "\n"
            +"\n"
            + "Fecha y hora: 19/07/2022, 8:05" + "\n"
            + "Estado: Programado para visita a domicilio" + "\n"
            + "Sucursal: Centro de operaciones Bs As" + "\n");
            return existeNumero;
        }
        
        if (ingresarNumeroDeEnvio === 9876){
            alert("Fecha y hora: 25/07/2022, 02:18" + "\n"
            + "Estado: Admitido en el Correo" + "\n"
            + "Sucursal: Villa Gral Gonzales" + "\n"
            + "\n"
            + "Fecha y hora: 25/07/2022, 9:10" + "\n"
            + "Estado: En proceso en el Correo" + "\n"
            + "Sucursal: Villa Gral Gonzales" + "\n"
            + "\n"
            + "Fecha y hora: 26/07/2022, 12:23" + "\n"
            + "Estado: En viaje a sucursal de destino" + "\n"
            + "Sucursal: Villa Gral Gonzales" + "\n"
            +"\n"
            + "Fecha y hora: 27/07/2022, 10:28" + "\n"
            + "Estado: Programado para visita a domicilio" + "\n"
            + "Sucursal: General Paz" + "\n"
            + "\n"
            + "Fecha y hora: 27/07/2022, 14:58" + "\n"
            + "Estado: Entregado" + "\n"
            + "Sucursal: General Paz" + "\n");
            return existeNumero;
        }
        
        else(ingresarNumeroDeEnvio !== numEnvio);{
            alert("Numero de envio ingresado incorrecto")
        }
    }
    
    let validar = ingresarOperacion();
    if (validar){
        ingresarOperacion();
}
 */

























    











































































/* for (let intentos = 0; intentos <= 2; intentos++) {
    let contraseña = parseInt(prompt('Ingrese su clave'));
    if (contraseña === 321){
            alert("Elija el producto que quiera añadir al carrito");
            function agregarAlCarrito(Producto){
                alert("Agregaste al carrito: " + Producto + " " + "$" + precio);
                alert("Total productos: " + totalCarrito++);
                alert("Precio Total: " + precio++);
                if (totalCarrito === 4){
                    prompt("Su carrito ya esta lleno, ¿Desea finalizar la compra?");
                    if (respuesta === "si" && respuesta === "Si");{
                    alert("El precio total de su compra es de: " + " "+ "$" + precio);
                    }
        
                    let pago = parseInt(prompt("¿Con cuanto dinero paga?"));{
                        if(pago >= precio){
                            alert("Gracias por su compra, su vuelto es de: " + "$" + (pago - precio));
                            }
                            else{
                                alert("No le alcanza el dinero")
                            }
                    }
                }
            }
            break;
        }
        else{
            alert("Contraseña incorrecta");
    }
    
    if (intentos === 2){
        alert("Intentos agotados, vuelva pronto")
    }
}
 */



