
let producto1 = "Zapatillas Nike";
let precio1 = 560;

let producto2 = "Buzo Puma";
let precio2 = 340;

let nombre = ""


function solicitarNombre(){
    nombre = prompt("¡Bienvenido a Tienda Cactus!. Ingrese su nombre por favor");
    
}

function validarPrecio(precio1, precio2){
    let elegirProducto = prompt("¡Hola"+ " " + nombre + "!"+ " " +"elija con el numero correspondiente el producto que desea añadir al carrito: "+ "\n1)" + producto1 +" "+ "$"+" " +precio1 + "\n2)" + producto2 + " "+"$"+" " + precio2);{
        if (elegirProducto == 1){
        alert("Ha agregado al carrito" + " " + producto1 + ", el precio final de la compra es de " + "$" + precio1);
        }
        else if(elegirProducto == 2){
            alert("Ha agregado al carrito" + " " + producto2 + ", el precio final de la compra es de " + "$" + precio2);
        }
        
    }
}

function cobrarProducto(precio1, precio2){
    let pago = parseInt(prompt("¿Con cuanto dinero va a pagar?"));
    if (pago >= precio1){
        alert("¡Muchas gracias por su compra!. Su vuelto es de: "+ "$" + (pago - precio1));
    }else if (pago >= precio2){
        alert("¡Muchas gracias por su compra!. Su vuelto es de: "+ "$" + (pago - precio2));
    }else{
        alert("No le alcanza el dinero");
    }



}

solicitarNombre()
validarPrecio(precio1, precio2)
cobrarProducto(precio1, precio2)




































/* class Producto{
    constructor(nombre, talle, precio, stock){
        this.nombre = nombre;
        this.talle = talle;
        this.precio = precio;
        this.stock = stock;
    } 
}


const producto1 = new Producto("Nike Jordan 6 off white", 41, 280, 2);
const producto2 = new Producto("Nike Jordan 1 high Og", 40, 410, 5);
const producto3 = new Producto("Nike Jordan 4 X Levis", 43, 100, 1);
const producto4 = new Producto("Nike Jordan 1 low", 39, 615, 3);
const producto5 = new Producto("Hoodie Cactus Jack", "M", 219, 4);
const producto6 = new Producto("Remera Kaws", "S", 90, 4);
const producto7 = new Producto("Remera McQueen", "XL", 75, 2);
const producto8 = new Producto("Crewneck Supreme", "L", 235, 5);  */




