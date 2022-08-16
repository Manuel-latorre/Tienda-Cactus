const productoAMostrar = JSON.parse(localStorage.getItem('verProducto'));
console.log(productoAMostrar);
document.getElementById("nombre").innerHTML = productoAMostrar.nombre;
document.getElementById("precio").innerHTML = "$"+ productoAMostrar.precio;
document.getElementById("seccion-imagenes").innerHTML += `<img class="card-img-top mb-5 mb-md-0" src="${productoAMostrar.img}" alt="imagen">`
document.getElementById("descripcion").innerHTML = productoAMostrar.descripcion;
document.getElementById("sku").innerHTML = productoAMostrar.sku;


const carrito = JSON.parse(localStorage.getItem('carrito')) ?? [];
document.getElementById("sumarCarrito").innerHTML = carrito.length;
const total = carrito.reduce((acumulador, productoAMostrar) => acumulador + productoAMostrar.precio, 0);
document.getElementById("sumarCarrito").innerHTML = `${carrito.length} - $${total}`;


document.getElementById("agregarAlCarrito").addEventListener('click', () => {
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
})


