const productoAMostrar = JSON.parse(localStorage.getItem('verProducto'));
console.log(productoAMostrar);
document.getElementById("nombre").innerHTML = productoAMostrar.nombre;
document.getElementById("precio").innerHTML = "$"+ productoAMostrar.precio;
document.getElementById("seccion-imagenes").innerHTML += `<img class="card-img-top mb-5 mb-md-0" src="./${productoAMostrar.img}" alt="imagen">`
document.getElementById("descripcion").innerHTML = productoAMostrar.descripcion;
document.getElementById("sku").innerHTML = productoAMostrar.sku;


const carrito = JSON.parse(localStorage.getItem('carrito')) ?? [];
document.getElementById("sumarCarrito").innerHTML = carrito.length;
const total = carrito.reduce((acumulador, productoAMostrar) => acumulador + productoAMostrar.precio, 0);
document.getElementById("sumarCarrito").innerHTML = `${carrito.length} - $${total}`;

/*funcion para agregar al carrito  */

document.getElementById("agregarAlCarrito").addEventListener('click', () => {
    validarStock(productoAMostrar);
    }
    
)

