var operandoX = parseInt(prompt("Introduce un operando"));
var operandoY = parseInt(prompt("Introduce otro operando"));
var operador = prompt("Introduce la operación que desea hacer --> ('+', '-', '*', '/', 'FIN')");
var resultado = 0;

while (operador != "FIN") {

    operadorValido();

    switch (operador) {
        
        case "+":
            resultado = operandoX + operandoY;
            operandoX = resultado;
            console.log(resultado);
            operandoY = parseInt(prompt("Resultado = " + resultado + ". Introduce el siguiente operando"));
            operador = prompt("Introduce un nuevo operador ('+', '-', '*', '/', 'FIN'):");
            break;

        case "-":
            resultado = operandoX - operandoY;
            operandoX = resultado;
            console.log(resultado);
            operandoY = parseInt(prompt("Resultado = " + resultado + ". Introduce el siguiente operando"));
            operador = prompt("Introduce un nuevo operador ('+', '-', '*', '/', 'FIN'):");
            break;

        case "*":
            resultado = operandoX * operandoY;
            operandoX = resultado;
            console.log(resultado);
            operandoY = parseInt(prompt("Resultado = " + resultado + ". Introduce el siguiente operando"));
            operador = prompt("Introduce un nuevo operador ('+', '-', '*', '/', 'FIN'):");
            break;

        case "/":
            if (divisionValida()) {
                resultado = operandoX / operandoY;
                operandoX = resultado;
                console.log(resultado);
                operandoY = parseInt(prompt("Resultado = " + resultado + ". Introduce el siguiente operando"));
                operador = prompt("Introduce un nuevo operador ('+', '-', '*', '/', 'FIN'):");
            }
    }
}

function operadorValido() {

    if (operador == "+" || operador == "-" || operador == "*" || operador == "/" || operador == "FIN") {
        if (operador == "/") {
            while (!divisionValida(operandoY)) operandoY = prompt("Division incorreta! Introduzca un operando que sea válido");
        }
        return true;
    }
    else while (operador != "+" || operador != "-" || operador != "*" || operador != "/" || operador != "FIN") operador = prompt("Error!! Introduce un operador válido --> ('+', '-', '*', '/', 'FIN'):")
}

function divisionValida() {

    if (operandoY === null) 
    return false;
    else 
    return true;
}