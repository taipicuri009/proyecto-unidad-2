document.getElementById("button").addEventListener("click", guardarNombre)

function guardarNombre() {
    let  nombreUsuario = document.getElementById("nombre").value;
    localStorage.setItem("name", nombreUsuario);
}
function pintarNombre() {
    document.getElementById("saludo").innerHTML += localStorage.getItem("name"); 
}

pintarNombre()