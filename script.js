// Un alert() espone 5 numeri generati casualmente.

// Da li parte un timer di 30 secondi.

// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.






// array numery random generati
var randomNumbers = [];
// array nummeri inseriti dal utente
var userNumbersAdd = [];
// variabile generatore random
var randomGenerator;
// variabile utente prompt
var userPromt;
// variabili globali  min e max  
var minNumber = 1;
var maxNumber = 100;

// ciclo  che genera 5 numeri casuali e li fa vedere in prompt
for (var i = 0; i < 5; i++) {
    randomGenerator = generatorRandonNumber(minNumber, maxNumber);
    console.log(randomGenerator);
    randomNumbers.push(randomGenerator);
}

console.log(randomNumbers);
alert("Cerca di memorizzare questi cinque numeri: " + randomNumbers);

// funzione con il  timer"setTimeout" con un ciclo  promp che chiede 5 volte di inserire un nr al utente 
//  ulteriormente  fa il controlo se il nr inserito e presente in numeri generati random e se si li va vedere tramite alert 

setTimeout(function () {
    for (var i = 0; i < 5; i++) {
       userPromt = parseInt(prompt("inserisci i numeri che ricordi"));
        if(!userPromt && isNaN(userPromt)){
            alert("numero non inserito ")
        }else{

            for (var f = 0; f < randomNumbers.length; f++) {
                
                if (userPromt === randomNumbers[f]){
                    userNumbersAdd.push(userPromt);
                } 
            }
        }

    }

    alert("Hai indovinato " + userNumbersAdd.length + " numeri. Esattamente i numeri: " + userNumbersAdd)
    console.log(userNumbersAdd)

}, 3000)

// funzione  number generator random
function generatorRandonNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}



