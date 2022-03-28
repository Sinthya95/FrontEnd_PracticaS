//fetch = consulta al API
const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url =`https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if(res.status !="200"){
            console.log(res);
            pokeImage("./pikachu-pokémon.gif");
                }
                else{
                    return res.json();
                }

    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);
        console.log(pokeName);
        let pokein = data.sprites.front_default;
        console.log(pokein);
        pokeinfo(pokein);
        console.log(pokeName);
        let pokein = data.sprites.front_default;
        console.log(poketi);
        poketipo(poketi);
        console.log(pokeName);


    })
} 
//fetchPokemon();

const pokeImage = (url) => {
   const pokeImg = document.getElementById("pokeImg");
   pokeImg.src = url;
}
// pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png");

const pokeinfo = (url) => {
    const pokein = document.getElementById("pokein");
    pokeImg.src = url;

const poketipo = (url) => {
const poketi = document.getElementById("poketi");
pokeImg.src = url;


const poketesta = (url) => {
    const pokees = document.getElementById("pokees");
    pokeImg.src = url;



    //llamada de varoables y dandole valores
//console.log("\n************variables****************\n");
//var numero1;
//var numlet="4";
//numero1=4;
//var numero2;
//numero2=2;
//imprimir
//console.log(numero1); esta es una opcion de imprimir solo un dato
//console.log("numero1: "  +   numero1 + "numero2:" + numero2);//juntar datos con las variables

//console.log("\n************cadenas****************\n");
//cadena de caracteres
//var frasea;
//frasea="ejemplo comillas dobles";
//var fraseb;
//fraseb='ejemplo "comillas" simples';
//var frasec;
//frasec= `ejemplo comillas ${numero1}invertidas`;
//opcion de imprimir solo un dato a la vez 
//console.log(frasea);
//console.log(fraseb);
//console.log(frasec);
//opcion de imprimir varios datos en una misma linea de codigo
//console.log( frasea + "\n" + fraseb +"\n" + frasec );

//console.log("\n************Condicionales****************\n");
//= es valor
//== es contexto
//=== es variable
//console.log(numero1 > numero2); //verdadero o falso
//console.log(numero1 = numlet);
//console.log(numero1 == numlet);
//console.log(numero1 === numlet);
//console.log(numero1 != numlet); //!= es diferente


//console.log("\n************operador logico AND****************\n");
//console.log(true && false);
//console.log(true && true);
// si a "Y" b

//console.log("\n************operador logico OR****************\n");
//console.log(true || false);
//console.log(false || false);
// si a "O" b 

//console.log("\n************ectores (arreglos)****************\n");
//lista de nunmero en forma de vector

//let listadenumeros = [2, 3, 5, 7, 11, 243];
//console.log(listadenumeros[0]);
//console.log(listadenumeros[1]);
//console.log(listadenumeros[2]);
//console.log(listadenumeros[3]);
//console.log(listadenumeros[4]);
//console.log(listadenumeros[5]);


//listadenumeros.push(16); //el psuh es para agregar dos valores mas
//listadenumeros.push(939);
//console.log(listadenumeros); //para imprimir
// tipo cadena de caracteres
//let listadepalabras=["JIMIN", "V", "RM", "JHOPE", "SUGA", "JIN", "KOOK"];
//console.log(listadepalabras);


//otra forma de ir letra por letra

//let palabra = "JIMIN";
////console.log(palabra[0]);
////console.log(palabra[4]);

//me da la longitud de mi lista
//palabra.length(); //calcular

////console.log("\n************objetos****************\n");
////let explorer = {
   //// nombre: "JIMIN",
    //email: "jimin@gmail.com",
    //numerorg: 123,
    //mission: "practica",
    //proyectos: ["abogabot", "pasteleria", "vacunacion"],
    //proper: {
       // escolar: "tareas",
        //profesional: "trabajo",
        //personal: "negocio",

    }
}
//console.log(explorer);
//console.log(explorer.email);
//console.log(explorer.proper);