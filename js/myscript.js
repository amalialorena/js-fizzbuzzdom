// Scrivi un programma che esegua un ciclo da 1 a 100
// e a ogni iterazione appenda un elemento html al container con uno stile differente a seconda del valore dell’indice
// per i multipli di 3,
// per i multipli di 5
// e per i valori che sono sia multipli di 3 che di 5
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per? 
// Come creare nuovi elementi html e appenderli al container?

let container = document.getElementById("container");

for(let i = 1; i <= 100; i++ ) {

    let square = document.createElement("div");
    square.classList.add("square");
    container.append(square);
    
    if (i % 3 == 0 && i % 5 == 0) {
        square.classList.add("fizzBuzz");
        square.append("fizzBuzz");
    } else if (i % 3 == 0) {
        square.classList.add("fizz");
        square.append("fizz");
    } else if (i % 5 == 0 ) {
        square.classList.add("buzz");
        square.append("buzz");
    } else {
        container.append(square);
        square.append(i)
    }  
}




