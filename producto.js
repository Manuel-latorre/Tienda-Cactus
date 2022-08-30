if (document.title === "Productos"){

    const productoAMostrar = JSON.parse(localStorage.getItem('verProducto'));
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
        else {Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '¡Lo sentimos! No hay stock de este producto',
                })
            }
        })
    }

    
    document.getElementById("agregarAlCarrito").addEventListener('click', () => {
        validarStock(productoAMostrar);
        }
    )
}