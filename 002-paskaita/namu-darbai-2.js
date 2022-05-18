function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* Sukurkite tris kintamuosius ir priskirkite jiems skirtingus sveikus skaičius iš intervalo 5…25;
    a)  Paskaičiuokite jų sumą ir priskirkite ją kintamajam. Pasinaudokite console.log atspauzdinkite sumos kintamąjį;
    b)  Sudėkite skaičius į stringo tipo kintamąjį ir jį atspauszdinkite pasinaudodami console.log;
    c)  Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir jį atspauszdinkite pasinaudodami console.log;
    d)  Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir gale pridedėkite trijų skaičių sumą, paskaičiuotą A dalyje. Atspausdinkite gautą stringo tipo kintąmąjį pasinaudodami console.log;
 */

console.log('1 uzduotis');

let randNumSum = 0;
let randNumsStr = '';
let randNumsStrWithSpaces = ' ';
for (let i = 0; i < 3; i++) {
    let randNum = rand(5, 25);
    randNumSum += randNum;
    randNumsStr += randNum;
    randNumsStrWithSpaces += randNum + ' ';
}
const oneByOne = randNumsStr.split('')
    console.log('a) Suma:', randNumSum);
    console.log('b) String:', randNumsStr);
    console.log('c) String with space:', randNumsStrWithSpaces);
    console.log('d) One by one:', oneByOne.join(' '), randNumSum);

/* Sukurkite vieną kintamąjį, jam priskirkite skaičių (iš intervalo 5…10), kurį sugeneruoja funkcija rand(5, 10) ir jį atspauszdinkite pasinaudojus console.log;
 */

console.log('2 uzduotis');

const aRand = rand(5, 10)
console.log(aRand);

/* Sukurkite kintamąjį ir jam priskirkite stringą “Labas”. Pasinaudodami ciklu ir console.log atspauzdinkite kintamąjį 5 kartus;
 */

console.log('3 uzduotis');

const text = 'Labas';
for (let i = 0; i < 5; i++) {
    console.log(text);
}

/* Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio 7 kartus;
 */

console.log('4 uzduotis');

for (let i = 0; i < 5; i++) {
    console.log(aRand);
}

/* Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas;
 */

console.log('5 uzduotis');

for (let i = 0; i < aRand; i++) {
    console.log(aRand);
}

/* Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas, bet tik tada jeigu jis didesnis už 7;
 */

console.log('6 uzduotis');

for (let i = 0; i < aRand; i++) {
    (aRand > 7) ? console.log(aRand) : 'Random number is less than 7'
}

/* Deklaruokite kintamąjį už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10…20. Ciklą kartokite 5 kartus;
    a)  Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;
    b)  Skaičiuokite ciklo viduje generuojamų reikšmių sumą, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;
    c)  Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą. Stringo tipo kintamąjį atspazdinkite už ciklo ribų jam pasibaigus;
    d)  Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą. Ciklui pasibaigus prie stringo tipo kintamojo pridėkite ciklo viduje generuotų skaičių sumą, paskaičiuotą kaip B dalyje. Stringo tipo kintamąjį atspausdinkite pasinaudodami console.log;
 */

console.log('7 uzduotis');

let randomNumber = 0;
let randomNumberSum = 0;
let randomNumberStr = '';
for (let i = 0; i < 5; i++) {
    randomNumber = rand(10, 20);
    randomNumberSum += randomNumber;
    randomNumberStr += randomNumber + ' ';
}
console.log('a)', randomNumber);
console.log('b)', randomNumberSum);
console.log('c)', randomNumberStr);
console.log('d)', randomNumberStr + randomNumberSum);

/* Deklaruokite kintamąjį (jeigu reikia kelis kintamuosius) už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10…25. Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius mažesnis nei 12;
    a)  Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;
    b)  Suskaičiuokite kiek iteracijų padarėte ir jų kiekį atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;
    c)  Skaičiuokite ciklo viduje generuojamų reikšmių sumą, atmesdami (neskaičiuodami) skaičius, kurie yra didesni nei 18, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;
    d)  Sumą skaičiuokite kaip C dalyje, bet papildomai susikurkite kintamąjį, kuriame suskaičiuokite kiek reikšmių atmetėte (nesumavote). Rezultatą su suma ir atmestų reikšmių kiekiu atspauzdinkite pasinaudodami console.log už ciklo ribų;
    e)  Suskaičiuokite kiek tarp cikle atsitiktinai generuojamų reikšmių yra lyginių ir kiek nelyginių skaičių. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus.
    f)  Ciklą iš dalies B kartokite tol,  kol to ciklo iteracijų kiekis bus didesnis nei 20 (vieno ciklo). Paskaičiuokite kiek pakartojimų buvo atlikta ir rezultatą atspauzdinkite pabaigoje. 
 */

console.log('8 uzduotis');

/* Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 5-10. Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius 5;
    a)  Ciklo viduje paleiskite dar vieną ciklą kurį kartokite tiek kartų, koks skaičius buvo sugeneruotas. Paskaičiuokite kiek iteracijų padarė išorinis ciklas ir kiek bendrai iteracijų padarė vidinis ciklas. Rezultatus atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;
    b)  Padarykite taip, kad išorinis ciklas pasibaigtų kai 5 yra sugeneruojamas ne pirmą, bet trečią kartą ir paskaičiuokite iteracijas analogiškai kaip A dalyje;
    c)  Padarykite analogiškai kaip B dalyje, bet tik kai 5 yra sugeneruojami 3 kartus iš eilės;
 */

console.log('9 uzduotis');

/* Kazys ir Petras žaidžiai bingo. Petras per vieną partiją surenka taškų kiekį nuo 10 iki 20, Kazys - surenka taškų kiekį nuo 5 iki 25. Console.log išvesti žaidėjų vardus su taškų kiekiu ir “Partiją laimėjo: ​laimėtojo vardas​”. Taškų kiekį generuokite funkcija ​rand()​. Žaidimą laimi tas, kas greičiau surenka 222 taškus. Partijas kartokite tol, kol kažkuris žaidėjas pirmas surenks 222 arba daugiau taškų.
 */

console.log('10 uzduotis');
