/*
L’utente inserisce pari o dispari da un prompt
    SE inserisce pari
        la variabile assumerà un valore 1
    ALTRIMENTI
        la variabile assumerà un valore 0
    FINE SE

L’utente inserisce un numero da 1 a 5 da un prompt

Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri.
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

let userDivisibility = prompt('inserisci: "pari" o "dispari"');

if (userDivisibility === 'pari') {
    userDivisibility = 1;
    console.log('ha inserito pari');

} else {
    userDivisibility = 0;
    console.log('ha inserito dispari');

}


const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5 compresi'));
const computerNumer = randomNumber(1, 5);

if (isDivisible(userNumber + computerNumer, userDivisibility)) {
    console.log(userNumber, computerNumer, 'hai vinto');
    
} else {
    console.log(userNumber, computerNumer, 'hai perso');
    
}
console.log(userNumber + computerNumer);

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function isDivisible(number, userDivisibility) {
    if ((userDivisibility === 1 && number % 2 === 0) || (userDivisibility === 0 && number % 2 !== 0)){
        return true;
    }
    return false;
}



