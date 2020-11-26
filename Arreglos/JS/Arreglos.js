function MetodosdeArreglos(){

    var ArreglosNumeros = [ 1,4,5,7,8,9,5,4];
    var Arreglo2 = [2,5,6,7,0];
    var Arreglo3 = [1,2,3,4,5,11,33,22,28,6,55,44,111];
    var Arreglo4 = ["Manzana", "Pera", "Mesa", "Pared", "Ropero", "Raton"];


//Agrega el número al final del arreglo y además cuenta cuantos valores son el total despues de agregar el número

    console.log(ArreglosNumeros.push(5));

//Imprime todos los valores del arreglo
    console.log(ArreglosNumeros.slice());

    console.log(Arreglo2.unshift(9));

    console.log(Arreglo2.slice());

    console.log(Arreglo3);

    console.log(Arreglo3.sort());

    console.log(Arreglo4);

    console.log(Arreglo4.sort());
}