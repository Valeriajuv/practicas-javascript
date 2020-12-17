function guardarinformacion(){

    var NomUsuario = String(document.getElementById("usuario").value);
    var Email = String(document.getElementById("email").value);
    var Password = String(document.getElementById("password").value);
    var Password2 = String(document.getElementById("password2").value);

    if(NomUsuario != "" && Email != "" && Password !="" && Password2 != ""){
        localStorage.setItem("NomUsuario", NomUsuario);
        localStorage.setItem("Email", Email);

        if(Password == Password2){
            localStorage.setItem("Password", Password);
            localStorage.setItem("Password2", Password2);
        }else{
            alert("Las contraseñas no coinciden");
        }
        alert("La información se guardo correctamente");
    } else{
        alert("Revisa la información, que no esta correcta");
    }

    

}
function Obtenerinformacion(){
    var imprimirNombre = document.getElementById("NomUsuario");
    var imprimirEmail = document.getElementById("Email");
    var imprimirpass = document.getElementById("Password");



    imprimirNombre.innerText = "El nombre del usuario es" + " " + localStorage.getItem("NomUsuario");
    imprimirEmail.innerText = "El correo del usuario es" + " " + localStorage.getItem("Email");
    imprimirpass.innerText = "La contraseña del usuario es" + " " + localStorage.getItem("Password");
}