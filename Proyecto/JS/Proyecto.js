function Submit2(){

    var Nombre = String(document.getElementById("Nombres").value);
    var Email = String(document.getElementById("correo2").value);
    var comentarios = String(document.getElementById("comentarios").value);
    var apellido = String(document.getElementById("apellido").value);

    if(Nombre != "" && Email != "" && apellido != "" && comentarios != ""){
   
        localStorage.setItem("Nombre", Nombre);
        localStorage.setItem("Email", Email);
        localStorage.setItem("comentarios", comentarios);
        localStorage.setItem("apellido", apellido);
    }
}

function Submit(){
    var Email = String(document.getElementById("correo").value);

    if(Email != ""){
        localStorage.setItem("Email", Email);
    }

}


