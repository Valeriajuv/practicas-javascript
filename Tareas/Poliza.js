function EventListener(){
    document.getElementById("calcula").addEventListener("click" , calculapoliza());
}

function  calculapoliza(){
    var tipopoliza = String(document.getElementById("tipopoliza").value);
    var cospoliza = String(document.getElementById("costopoliza").value);
    var habitos = String(document.getElementById("cargo").value);

    var imprpoliza = document.getElementById("imprpoliza");
    var cargo=0;
    var costototal = 0

    if(tipopoliza == "A" && cospoliza == "1" && habitos == "1"){
        cargo = (1200 * 0.10);
        costototal = (1200 + cargo)
    }

    else if(tipopoliza == "A" && cospoliza == "1" && habitos == "2"){
        cargo = (1200 * 0.05);
        costototal = (1200 + cargo)
    }

    else if(tipopoliza == "A" && cospoliza == "1" && habitos == "3"){
        cargo = (1200 * 0.05);
        costototal = (1200 + cargo)
    }

    else if(tipopoliza == "A" && cospoliza == "1" && habitos == "4"){
        cargo = (1200 * 0.20);
        costototal = (1200 + cargo)
    }

    else if(tipopoliza == "A" && cospoliza == "1" && habitos == "5"){
        cargo = (1200 * 0.10);
        costototal = (1200 + cargo)
    }

    //-------------------------------------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------------------------------------


    else if(tipopoliza == "B" && cospoliza == "2" && habitos == "1"){
        cargo = (950 * 0.10);
        costototal = (950 + cargo)
    }

    else if(tipopoliza == "B" && cospoliza == "2" && habitos == "2"){
        cargo = (950 * 0.05);
        costototal = (950 + cargo)
    }

    else if(tipopoliza == "B" && cospoliza == "2" && habitos == "3"){
        cargo = (950 * 0.05);
        costototal = (950 + cargo)
    }

    else if(tipopoliza == "B" && cospoliza == "2" && habitos == "4"){
        cargo = (950 * 0.20);
        costototal = (950 + cargo)
    }

    else if(tipopoliza == "B" && cospoliza == "2" && habitos == "5"){
        cargo = (950 * 0.10);
        costototal = (950 + cargo)
    }

    imprpoliza.innerText = "Esta poliza cuesta " + costototal;
}