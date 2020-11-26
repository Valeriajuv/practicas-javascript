function EventListener(){
    document.getElementById("boton").addEventListener("click", imparypromedio());
}

function imparypromedio(){
    
    var imprimirpromedio = document.getElementById("imprimir");
    var imprimirsuma = document.getElementById("imprimir2");
    var Nnumeros = Number(prompt("¿Cuantos números en total vas a ingresar?"));
    var contador1 = 0, contador2 = 0, sumapares=0, promedio=0, sumaimpares=0;
    
    for(var x=1; x < Nnumeros; x++){
        var introduce = Number(prompt("Ingresa un número"));
        if(introduce > 0 && introduce % 2 == 0){
            contador1++;
            sumapares = introduce +sumapares;
            promedio = sumapares / contador1;
        }else{
            contador2++;
            sumaimpares = introduce + sumaimpares;
        }
        imprimirpromedio.innerText = "El promedio de los numeros pares es " + " " + promedio;
        imprimirsuma.innerText = "La suma de los numeros impares es" + " " + sumaimpares;

    }

}