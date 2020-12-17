function guardarinformacion(){

    var NomUsuario = String(document.getElementById("Usuario").value);
    var Email = String(document.getElementById("correo").value);
    var Password = String(document.getElementById("password").value);

    if(NomUsuario != "" && Email != "" && Password != ""){
        localStorage.setItem("NomUsuario", NomUsuario);
        localStorage.setItem("Email", Email);
        localStorage.setItem("Password", Password);
    }
}