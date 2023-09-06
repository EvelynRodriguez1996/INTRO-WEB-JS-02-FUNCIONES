//Funciones 
//Programa para hacer limonada
function exprimirLimones(cantidad){
    console.log ("Exprimiendo " + cantidad + "Limones.");
    let jugoExtraido = cantidad *10; //Considerando obtener 10 ml de jugo por cada limon
    console.log ("Se obtuvo " + jugoExtraido + " ml de jugo de limon.");
    return jugoExtraido; //return
}

//Funcion para mezclar el jugo de limon con agua y zaucar
function mezclarJugoDeLimon (cantidadDeJugo, cantidadDeAgua, cantidadDeAzucar) {
    console.log ("Mezclando " + cantidadDeJugo + " ml de jugo de limon con " + cantidadDeAgua + " ml de agua y " + cantidadDeAzucar + " gramos de azucar");
}
 //Funcion para servir Limonada
 function servirLimonada () {
    console.log ("Sirviendo la limonada en un vaso");
    vasoDeLimonada = true;
 }

 //Funcion principal que prepare mi limonada 
 function prepararLimonada(cantidadDeLimon) {
    let jugoDeLimon = exprimirLimones (cantidadDeLimon);
    mezclarJugoDeLimon(jugoDeLimon, 200, 10); // Cantidades ficticias de jugo de limon, de agua y de azucar
    servirLimonada();
 }

 // Llamamos a la función principal para preparar limonada
 var vasoDeLimonada = false;
 prepararLimonada(5);//Llamado al programa 


