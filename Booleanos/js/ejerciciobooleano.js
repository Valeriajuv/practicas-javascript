function EjercicioVariables(){

   // var mayorde25 = false;
  //  mayorde25 = otravariable;
    //alert("Mostrar un mensaje que no se ejecuta"); 

    //var foco = false;
    
   // if(foco == false){
       // alert("El foco esta encendido");

   // }else{
       // alert("El foco esta apagado");
    //}

    //if(!foco == true){
      //  alert("El foco esta encendido");
    //} else{
     //   alert("El foco esta apagado");
    //}

    var a=1; b=2; c=3;
    var casado = true;
    var mayorde25 = false;
    var texto1 = "En un lugar de la mancha";

    console.log("La variable casado vale" + " " + casado);
    console.log("La variable de mayor de 25 vale" + " " + mayorde25);
    console.log("La multiplicacion del true es" + " " + (casado * 5));
    console.log("La multiplicacion del false es" + " " + (mayorde25 * 5));
    console.log("La varible casado ahora vale" + " " + casado);
    console.log("La variable mayorde25 ahora vale" + " " + mayorde25);
    console.log("La suma de los numeros es:" + " " + (a + b + c));
    console.log("Que obtenemos multiplicando texto con un numero" + " " + (texto1 * a));
    console.log("Mostramos lo equivalente en string" + " " + casado.toString());
    console.log(texto1.toString());
    
    var arreglo = ["Quiero", "Aprender"];
    console.log(arreglo.toString());

    console.log(a.toString() + b.toString());
    console.log(b.toString() + c.toString());
    console.log(c.toString() + a.toString());


    console.log(a + b);

}