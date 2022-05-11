function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.
 */

console.log('1 uzdavinys');

let array = [];
while (array.length < 30) {
    let randNum = rand(0, 29);
    array.push(randNum);
}
console.log(array);

/* Naudodamiesi 1 uždavinio masyvu:
    a)  Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
    b)  Raskite didžiausią masyvo reikšmę ir jos indeksą;
    c)  Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;
    d)  Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;
    e)  Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;
    f)  Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indeksų reikšmių, o kitas iš porinių (pagal neporinį-porinį indeksą, ne reikšmę);
    g)  Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;
    h)  Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;
 */

console.log('2 uzdavinys');

let numbersOverTen = 0;
array.forEach(i => {
    if (i >= 10) {
    numbersOverTen++;
    }
});
console.log('a)', numbersOverTen);

let arrayCopy = [...array];
function bTask (array) {
    arrayCopy.sort((a, b) => b - a);
    return arrayCopy[0];
}
let largestNumberPosition = array.indexOf(bTask(array));
console.log('b)', 'Number:', bTask(array), 'Position:', largestNumberPosition);

let sumOfEvenIndex = 0;
for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
        sumOfEvenIndex += array[i];
    }
}
console.log('c)', sumOfEvenIndex);

let arrayValuesMinusIndex = [];


/* Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.
 */

console.log('3 uzdavinys');



/* Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. Sudėkite masyvus, sudėdami atitinkamas reikšmes. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.
 */

console.log('4 uzdavinys');

/* Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).
 */

console.log('5 uzdavinys');

/* Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 6 uždavinio masyve, bet nėra antrame 6 uždavinio masyve.
 */

console.log('6 uzdavinys');

/* Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 6 uždavinio masyvuose.
 */

console.log('7 uzdavinys');

/* Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 6 uždavinio masyvo reikšmės, o jo reikšmės iš būtų antrojo masyvo.
 */

console.log('8 uzdavinys');

/* Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.
 */

console.log('9 uzdavinys');
