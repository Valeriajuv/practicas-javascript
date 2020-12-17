function LocalStorage(){

    localStorage.setItem("Nombre", "Valeria Juarez");
    localStorage.setItem("Numero", 20);
    localStorage.setItem("Booleano", true);
    localStorage.setItem("Arreglo", [1,2,3,4,5]);


    var ropa = {
        calzado: "tenis",
        calzado2: "pantunflas",
        calzado3: "chanclas",
        jeans: "Pantalon mezclilla"
    };

    localStorage.setItem("Objeto", JSON.stringify(ropa));

    
    
    console.log(localStorage.getItem("Nombre"));

    localStorage.removeItem("booleano");

    localStorage.clear();

    var usuario = {
        nombre: "Valeria",
        edad: 20,
        Nacionalidad: "Mexicana"
    }

    localStorage.setItem("Usuarios", JSON.stringify(usuario));
    console.log(JSON.parse(localStorage.getItem("Usuarios")));
}