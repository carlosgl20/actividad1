const USUARIO = ["carlos", "pedro", "pelayo", "adrian", "bartolo"];
const CONTRASEÑA = ["12345", "09876", "03153", "13579", "75319"];

var usuario;
var contraseña;
var contador = 0;

run(usuario, contraseña);

function existeUsuario(usuario) {

    let resultado = false;
    for (let i = 0; i < 5; i++) {
        if (USUARIO[i] == usuario) 
        resultado = true;
    }
    return resultado;
}


function contraseñaValida(contraseña, usuario) {

    let resultado = false;
    for (let i = 0; i < 5; i++) {
        if (CONTRASEÑA[i] == contraseña && USUARIO[i] == usuario) {
            resultado = true;
        }
    }
    return resultado;
}

function run(usuario, contraseña) {

    usuario = prompt("Nombre de usuario:");

    while (!existeUsuario(usuario) && contador < 5) {

        contador++;
        alert("El nombre de ususario no existe");
        usuario = prompt("Nombre de usuario:");
    }

    contraseña = prompt("Contraseña:");
    while (!contraseñaValida(contraseña, usuario) && contador < 5) {
        contador++;
        alert("El nombre de usuario no coincide con la contraseña.");
        contraseña = prompt("Contraseña:");
    }

    if(contador >= 5) 
    alert("Limite de intentos alcanzado.");
    else 
    alert("Usuario y contraseña correctos.");
}
