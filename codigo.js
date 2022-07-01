




ingresarResultado = prompt("¿Cuanto es 3x3?")
if (ingresarResultado == 9){
    alert("sos un crack")
} else{
    alert(" Resultado incorrecto,a practicar las tablas broder")
} 


let ingresarNumero = parseInt (prompt("Ingrese un numero"));

for (let i = 1; i < 25; i++){
    let resultado = ingresarNumero + i;
    alert (ingresarNumero +"+"+ i +"="+ resultado);
    if (resultado == 10){
        break;
    }
}


