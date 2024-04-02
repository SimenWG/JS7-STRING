/*
// OPPGAVE 1

function minTekst(str) {
    if (str === '') {
        return 'Teksten er tom';
    } else {
        return 'Teksten er ikke tom';
    }
}

console.log(minTekst(''));
console.log(minTekst('Røyken VGS'));
*/

/*
// OPPGAVE 2

function minTekst(str) {
    str = str.trim();
    var ord = str.split(' ');
    ord = ord.filter(function(word) {
        return word !== '';
    });
    return ord;
}

alert(minTekst(' Røyken Videregående Skole '));
*/

/*
// OPPGAVE 3
function erPalindrom(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
 
console.log(erPalindrom('radar')); // true
console.log(erPalindrom('hello')); // false
*/

/*
// OPPGAVE 4
function sortertTekst(str) {
    return str.split('').sort().join('');
}

alert(sortertTekst('serdar'));
*/

/*
// OPPGAVE 5
function tellForekomster(avsnitt, bokstav) {
    avsnitt = avsnitt.toLowerCase();
    var antall = 0;
    for (var i = 0; i < avsnitt.length; i++) {
        if (avsnitt[i] === bokstav.toLowerCase()) {
            antall++;
        }
    }
    return antall;
}

console.log(tellForekomster("Welcome to Norge", "o"));

*/

/*
// OPPGAVE 6
function skrivHvertNteTegn(str, n) {
    for (var i = 0; i < str.length; i += n) {
        console.log(str.substring(i, i + n));
    }
}

skrivHvertNteTegn("ABCAABCAAADA", 3);

*/

// OPPGAVE 7
