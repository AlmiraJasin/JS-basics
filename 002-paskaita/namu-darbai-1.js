import { rand } from '../001-paskaita/namu-darbai.js';

/* console.log’e, naudojant ciklą atspausdinti penkias eilutes ‘Labas’;
 */

console.log('1 uzduotis');

for (let i = 0; i < 5; i++) {
    console.log('Labas');
}

/* console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje);
 */

console.log('2 uzduotis');

for (let i = 0; i < 5; i++) {
    console.log(i);
}

/* console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje);
 */

console.log('3 uzduotis');

for (let i = 0; i < 5; i++) {
    console.log(i * 10);
}

/* console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje);
 */

console.log('4 uzduotis');

for (let i = 49; i < 54; i++) {
    console.log(i);
}

/* console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 (vienas skaičius vienoje eilutėje);
 */

console.log('5 uzduotis');

for (let i = 4; i >= 0; i--) {
    console.log(i);
}

/* console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 2 4 6 8 (vienas skaičius vienoje eilutėje, daugybos konsolėje nenaudoti!, if’ų nenaudoti, ciklas for);
 */

console.log('6 uzduotis');

for (let i = 0; i < 5; i++) {
    let result = i * 2;
    console.log(result);
}

/* console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje);
 */

console.log('7 uzduotis');

for (let i = 0; i < 5; i++) {
    let res = rand(0, 10)
    console.log(res);
}

/* console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5;
 */

console.log('8 uzduotis');

for (let i = 0; i < Infinity; i++) {
    let r = rand(0, 10)
    console.log(r);
    if (r === 5) break;
} 

/* console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;
 */

console.log('9 uzduotis');

let totalCount = 0;
while (totalCount < 100) {
    const randomNumber = rand(0, 10);
    totalCount += randomNumber;
    console.log(randomNumber, totalCount);
}

/* console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko;
 */

console.log('10 uzduotis');

let cycleCount = 0;
for (let i = 0; i < Infinity; i++) {
    let r = rand(0, 10)
    console.log(r);
    cycleCount++;
    if (r === 5 || r === 7) break;
} 

console.log('Sugeneruota skaiciu:', cycleCount);


/* console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų;
 */

console.log('11 uzduotis');

let sumCount = 0;
let numCount = 0;
while (sumCount < 20 || numCount < 12) {
    const randomNumber = rand(0, 10);
    sumCount += randomNumber;
    console.log(randomNumber, sumCount, numCount);
    numCount++;
}

/* console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai;
 */

console.log('12 uzduotis');

let oddNumCount = 0;
while (oddNumCount < 3) {
    let randomNumber = rand(0, 10);
    console.log(randomNumber);
    if (randomNumber % 2 !== 0) {
        oddNumCount++;
    }
}

/* console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti tol, kol neiškris abu vienodi skaičiai;
 */

console.log('13 uzduotis');

let a = 0;
let b;

while (a !== b) {
    a = rand(0, 10);
    b = rand(0, 10);
    console.log(a, b);
}


/* console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Skaičiuoti abiejų skaičių sumas skirtinguose kintamuosiuose (skaičiuoti skaičių stulpelių sumas). Ciklą kartoti tol, kol kiekviena iš sumų bus daugiau nei 100;
 */

console.log('14 uzduotis');

let x = 0;
let xSum = 0;
let z = 0;
let zSum = 0;

while (xSum < 100 || zSum < 100) {
    x = rand(0, 10);
    z = rand(0, 10);
    xSum += x;
    zSum += z;
    console.log('Skaiciai', x, z);
    console.log('Skaiciu Suma', xSum, zSum);
}

/* console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti kol bus sugeneruota po tris arba daugiau nelyginių skaičių  (skaičiai atskiruose stulpeliuose).
 */

console.log('15 uzduotis');

let n = 0;
let nOddNumbers = 0;
let m = 0;
let mOddNumbers = 0;

while (nOddNumbers < 3 || mOddNumbers < 3) {
    n = rand(0, 10);
    m = rand(0, 10);
    if (n % 2 !== 0) {
        nOddNumbers++;
    }
    if (m % 2 !== 0) {
        mOddNumbers++;
    }
    console.log('Skaiciai', n, m);
    console.log('Nelyginiui Skaiciu Kiekis', nOddNumbers, mOddNumbers);
}
