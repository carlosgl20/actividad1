var numeros = [];

for (let i = 0; i < 4; i++) {

    let numero = prompt("Introduce un número positivo");

    while (numero < 0 || parseInt(numero) != numero) {

        console.error("El número introducido no es un entero positivo");
        numero = parseInt(prompt("Error!! Vuelve a introducir un número entero positivo"));
    }
    numeros[i] = numero;
}

function creciente() {

    let resultado = false;

    if (numeros[0] < numeros[1] && numeros[1] < numeros[2] && numeros[2] < numeros[3]) 
    resultado = true;
    return resultado;
}

alert(creciente());