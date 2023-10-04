
var numero = prompt("Introduce un número entero");

esEntero();
esPositivo();

alert(suma());

function esEntero() {

    let resultado = false;

    if (parseInt(numero) == numero) 
    resultado = true;
    else 
    console.error("El número introducido no es entero");

    return resultado;
}

function esPositivo() {

    let resultado = false;

    if(num > 0) 
    resultado = true;
    else 
    console.error("El número introducido no es positivo");

    return resultado;
}

function suma(){

    let resultado = 0;

    for(let i = 0; i < numero; i ++){
        resultado += i;
    }
    return resultado;
}