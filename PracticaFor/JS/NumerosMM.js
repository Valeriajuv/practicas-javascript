// Se requiere un algoritmo para determinar, de N cantidades, cuantas son menores o iguales a 0 y cuantas mayores a 0

function NumerosMayoresMenores(){
        //con esta instruccion vamos a saber cuantos numers vamos a contar
        //prompt es un cuadro de texto que nos permite ingresar la info

        var Nnumeros = prompt("¿Cuántos números en total vas a ingresar?"); //5
        var contador = 0, contadorneg=0;
        var contador2 = 1, contadorneg2=1;
        


        //for(var x=0; x<5; x++) for(inicializar una varible; realizar la comparacion con la variable; contar en 1 en 1 la variable)
    for(var x=0; x<Nnumeros; x++){
        var numero = prompt("Ingresa un número");
        if(numero >= 0){
            contador = contador + contador2;
        }else{
            contadorneg = contadorneg + contadorneg2;
        }
        
    }
    alert("Los número mayores a cero son:" + contador + "Los menores a cero son contador" + contadorneg);
    
    


}