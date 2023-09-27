var numero;

function esEntero(numero) {
    var entero = false;
    if(numero == parseInt(numero)) {
        entero = true;
        }
        return entero;
    }

function esPositivo(numero) {
    var resultado = false;
    if(numero>=0) {
        resultado = true;
        }
        return resultado;
    }
console.error("El número no es positivo, introduce otro");

function sumatorio