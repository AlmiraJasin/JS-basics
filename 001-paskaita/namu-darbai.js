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

let a = rand(0, 4);
let b = rand(0, 4);

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



/*
3 uzduotis

Įvedami skaičiai -a, b, c –kraštinių ilgiai, trys kintamieji (naudokite ​rand()​ funkcija nuo 1 iki 10). 
Parašykite skriptą, kuris nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų naudojant console.log(). 
*/

console.log('3 uzduotis')


/*
4 uzduotis

Sukurkite keturis kintamuosius ir ​rand()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. 
Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. Rezultatus atspauzdinkite su console.log()
*/

console.log('4 uzduotis')

/*
5 uzduotis

Naudokite funkcija rand(). 
Atspausdinkite 3 skaičius naudodami console.log() nuo -10 iki 10. 
Prie skaičių mažesnių už 0 iš abiejų pusių atspauzdinkite “+” simbolius,  
didesnių už 0 iš abiejų pusių atspauzdinkite “-” simbolius, 
o prie 0 “*” simbolius
*/

console.log('5 uzduotis')

/*
6 uzduotis

Įmonė parduoda žvakes po 1 EUR. 
Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. 
Parašykite skriptą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą su console.log() kiek žvakių ir kokia kaina perkama. 
Žvakių kiekį generuokite ​rand()​ funkcija nuo 5 iki 3000.
*/

console.log('6 uzduotis')

/*
7 uzduotis

Naudokite funkcija rand(). 
Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. 
Paskaičiuokite jų aritmetinį vidurkį. 
Ir aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. 
Abu vidurkius atspausdinkite su console.log()
*/

console.log('7 uzduotis')