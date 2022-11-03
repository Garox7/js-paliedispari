/*
Palindroma
Chiedere al'untente di inserire una parola tramite un prompt
Creare una funzione per capire se la parola è palindroma
    acquisiamo la parola e la splittiamo in tutte le sue lettere,
    la invertiamo e la "rimettiamo al suo posto".

    confrontiamo la parola acquisita con la parola invertita
    SE uguali
        restituisce "true"

    ALTRIMENTI
        restituisce "false"

    FINE SE

Utilizziamo la funzione all'interno di una condizione dove:
    SE il risultato della funzione è TRUE
        stampa ""palindroma"

    ALTRIMENTi
        stampa "non è palindroma"
*/

const word = prompt('Inserisci la parola');

if (palindroma(word)) {
    console.log('è palindroma')
} else {
    console.log('non è palindroma')
}

function palindroma(wordTest) {
    const invertWord = wordTest.split('').reverse().join('');
    console.log(invertWord);

    if (wordTest === invertWord) {
        return true;
    } else {
        return false;
    }
}
