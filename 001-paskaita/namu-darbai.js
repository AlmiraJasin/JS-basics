function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
1 uzduotis

Naudokite funkcija rand(). 
Sukurkite du kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. 
Didesnę reikšmę padalinkite iš mažesnės. 
Atspausdinkite rezultatą naudodami console.log()
*/

console.log('1 uzduotis')

const a = rand(0, 4);
const b = rand(0, 4);

if (a > b) {
    console.log(a / b);
} else {
    console.log(b / a);
}

/*
2 uzduotis

Naudokite funkcija rand(). 
Sukurkite tris kintamuosius ir naudodamiesi funkcija rand() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. 
Raskite ir su console.log() atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/

console.log('2 uzduotis')

const x = rand(0, 25);
const y = rand(0, 25);
const z = rand(0, 25);

let arr = [x, y, z];
let newArr = arr.sort(function(a, b) {
    return a - b;
});
console.log(newArr[1]);

/*
3 uzduotis

Įvedami skaičiai -a, b, c –kraštinių ilgiai, trys kintamieji (naudokite ​rand()​ funkcija nuo 1 iki 10). 
Parašykite skriptą, kuris nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų naudojant console.log(). 
*/

console.log('3 uzduotis')

const q = rand(1, 10);
const w = rand(1, 10);
const e = rand(1, 10);

console.log('Visada bus true')

/*
4 uzduotis

Sukurkite keturis kintamuosius ir ​rand()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. 
Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. Rezultatus atspauzdinkite su console.log()
*/

console.log('4 uzduotis')


const array = [];

for (let i = 0; i < 4; i++) {
    array.push(rand(0, 2));
}

let count0 = 0;
let count1 = 0;
let count2 = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
        count0 += 1;
    } else if (array[i] === 1) {
        count1 += 1;
    } else {
        count2 += 1;
    }
}
console.log(count0);
console.log(count1);
console.log(count2);

/*
5 uzduotis

Naudokite funkcija rand(). 
Atspausdinkite 3 skaičius naudodami console.log() nuo -10 iki 10. 
Prie skaičių mažesnių už 0 iš abiejų pusių atspauzdinkite “+” simbolius,  
didesnių už 0 iš abiejų pusių atspauzdinkite “-” simbolius, 
o prie 0 “*” simbolius
*/

console.log('5 uzduotis')

for (let i = 0; i < 3; i++) {
    let num = rand(-10, 10)
    if (num === 0) {
        console.log(`*${num}*`); 
    } else if (num < 0) {
        console.log(`+${num}+`); 
    } else {
        console.log(`-${num}-`); 
    }
}

/*
6 uzduotis

Įmonė parduoda žvakes po 1 EUR. 
Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. 
Parašykite skriptą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą su console.log() kiek žvakių ir kokia kaina perkama. 
Žvakių kiekį generuokite ​rand()​ funkcija nuo 5 iki 3000.
*/

console.log('6 uzduotis')

const priceForOneUnit = 1;
const quantity = rand(5, 3000);
const totalPrice = quantity * priceForOneUnit;

if (totalPrice >= 1000) {
    let newPrice = totalPrice * 0.97;
    console.log(`${quantity} candles for ${newPrice.toFixed(2)} Eur`)
} else if (totalPrice >= 2000) {
    let newPrice = totalPrice * 0.96;
    console.log(`${quantity} candles for ${newPrice.toFixed(2)} Eur`)
} else {
    console.log(`${quantity} candles for ${totalPrice} Eur`)
}

/*
7 uzduotis

Naudokite funkcija rand(). 
Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. 
Paskaičiuokite jų aritmetinį vidurkį. 
Ir aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. 
Abu vidurkius atspausdinkite su console.log()
*/

console.log('7 uzduotis')

let averageCount = 0;
let sumForAverageWithout = 0;
let numbersInAverageWithout = 0;

for (let i = 0; i < 3; i++) {
    let num = rand(0, 100)
    console.log(num);
    if (num > 10 && num < 90) {
        sumForAverageWithout = sumForAverageWithout + num;
        numbersInAverageWithout++;
    }
    averageCount = averageCount + num;
}

const strangeAverage = sumForAverageWithout / numbersInAverageWithout;
const average = averageCount / 3;

console.log(strangeAverage);
console.log(average);
