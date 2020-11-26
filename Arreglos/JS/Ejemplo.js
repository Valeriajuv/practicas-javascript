function EventListener(){
    document.getElementById("btnordenar").addEventListener("click", Ordenarnumeros());
}

function Ordenarnumeros(){

    var Arreglonumero = [1, 4, 2, 9, 11, 44, 111, 7, 4];
    var imprimirmayoramenor = document.getElementById("imprimirmayoramenor");
    var imprimirmenoramayor = document.getElementById("imprimirmenoramayor");

    Arreglonumero.sort();
    imprimirmenoramayor.innerText = Arreglonumero.sort(MenorAMayor());
    imprimirmayoramenor.innerText = Arreglonumero.sort(MayorAMenor());


}

function MenorAMayor(elem1, elem2){
    return elem1 - elem2;
}

function MayorAMenor(elem1, elem2){
    return elem1 - elem2;
}