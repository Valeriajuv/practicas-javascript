function EventListener(){
    document.getElementById("click").addEventListener("click", Darleclick());
    document.getElementById("click2").addEventListener("click", DarleClick2());
}


function Darleclick(){

    var salida = document.getElementById("salida1");
//document.createElement se utiliza para crear una etiquta desde javascript
    var button = document.createElement("button");
    //La instruccion ser attribute llamamos a la clase para darle forma al boton
    button.setAttribute("class", "btn btn-primary btn-lg btn-block");
    // se utiliza para imprimir informacion en la etiqueta(boton);
    button.setAttribute("id", "boton"); // = id = "Boton"
    button.setAttribute("type", "button"); // = type = "button"
    button.innerText = "Boton Impreso";

    salida.appendChild(button);
}

function DarleClick2(){

    var salida2 = document.getElementById("salida2");

    for(var x=0; x<5; x++){

        var boton = document.createElement("button");
        boton.setAttribute("class", "btn btn-primary btn-lg btn-block mt-2");
        boton.setAttribute("id", "click");
        boton.setAttribute("type", "button");
        boton.setAttribute("onclick", "click2()");

        boton.innerText = "Varios botones impresos";

        salida2.appendChild(boton);

    }
}