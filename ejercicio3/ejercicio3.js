const MINIMO = 1;
const MAXIMO = 100;

const DIVISORES = [2, 3, 5, 10];

var divisoresValidos = [];

while (numero < 1 || numero > 100 || isNaN(numero)) {
    numero = prompt("Error!! Introduce un numero entre 1 y 100");
}

function esDivisible(numero, divisor) {

    if (numero % divisor == 0) 
    return true;
    else 
    return false;
}

for (let i = 0; i < 4; i++) {

    if (esDivisible(numero, DIVISORES[i])) divisoresValidos[i] = DIVISORES[i];
}

if (divisoresValidos.length === 0)  
alert("no es divisible entre " + DIVISORES);
else 
alert("divisible entre " + divisoresValidos);