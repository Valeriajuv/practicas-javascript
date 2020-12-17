function Objetos(){

    var coche1 = {
        ruedas: 4,
        puertas: 2,
        color: "Verde",
        luces: 4,
        espejo: 2,
    };

    var coche2 = {
        ruedas: 4,
        puertas: 2,
        color: "gris",
        luces: 4,
        espejos: 2
    };

    var coche3 = {
        ruedas:4,
        puertas: 2,
        color: "Azul",
        luces: 4,
        espejos: 2
    };

    var coche4 = {
        ruedas: 4,
        puertas: 2,
        color: "rojo",
        luces: 4,
        espejos: 2,
    };


    var fabricantes = {
        marca1: "Ford",
        modelo1: "Ford focus",
        anio1: 2010,
        marca2: "Seat",
        modelo2: "Seat Ibiza",
        anio2: 2020,
        marca3: "BMW",
        modelo3: "BMW Serie 3",
        anio3: 2015,
        marca4: "Peugeot",
        modelo4: "Peugeot 2006",
        anio4: 2018
    };

    var ford = {
        puertas: coche1.puertas,
        ruedas: coche1.ruedas,
        color: coche1.color,
        anio: fabricantes.anio1,
        marca: fabricantes.marca1,
        modelo: fabricantes.anio1,
        espejos: coche1.espejo,
        luces: coche1.luces
    }

    console.log(ford);
    console.log(ford.color);
    console.log(ford.anio);

    var Seat = {
        puertas: coche2.puertas,
        ruedas: coche2.ruedas,
        color: coche2.color,
        espejos: coche2.espejos,
        luces: coche2.luces,
        anio: fabricantes.anio2,
        marca: fabricantes.anio2,
        modelo: fabricantes.modelo2,
        
    }



}