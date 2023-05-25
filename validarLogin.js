let boton=document.getElementById("botonEntrar")
let nombre = document.getElementById("nombre")
let formulario=document.getElementById("formulario")
let error=document.getElementById("error")
let ArrayNombre
let puntuacion=10

boton.addEventListener("click", function(evento) {
    evento.preventDefault();

    if (nombre.value == "") {
        error.innerHTML = "Debes introducir un nombre";
    } else {
        formulario.submit();
    }
});







