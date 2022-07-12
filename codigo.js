/* Clase constructora */
class Producto{
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
const producto8 = new Producto("Crewneck Supreme", "L", 235, 5); 



/* Variables que utilizo dentro del simulador */

let totalCarrito = 1;
let precio = 1;
let respuesta;



/* Simulador */


for (let intentos = 0; intentos <= 2; intentos++) {
    let contraseña = parseInt(prompt('Ingrese su clave'));
    if (contraseña === 321){
            alert("Elija el producto que quiera añadir al carrito");
            function agregarAlCarrito(Producto){
                console.log("Agregaste al carrito: " + Producto + " " + "$" + precio);
                console.log("Total productos: " + totalCarrito++);
                console.log("Precio Total: " + precio++);
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





