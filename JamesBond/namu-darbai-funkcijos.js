function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra atspausdinamas su console.log;
 */

console.log('1 uzduotis');

const printArgument = (textToPrint) => {
    console.log(textToPrint);
}
printArgument('Labas')

/* Parašykite funkciją su dviem argumentais, pirmas argumentas tekstas, įterpiamas atspausdinamas su console.log, o antrasis kiek kartų spausdinimas atliekamas. Rašydami šią funkciją remkitės pirmame uždavinyje parašytą funkciją; */

console.log('2 uzduotis');

const printArgumentLoop = (textToPrint, timesToPrint) => {
    for (let i = 0; i < timesToPrint; i++) {
    console.log(textToPrint);
    }
}
printArgumentLoop('Rytas', 4)

/* Parašykite funkciją, kuri skaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos (išskyrus vienetą ir patį save)
 */

console.log('4 uzduotis');

/* Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 33 iki 77. Išrūšiuokite masyvą pagal daliklių be liekanos kiekį mažėjimo tvarka, panaudodami ketvirto uždavinio funkciją.
 */

console.log('5 uzduotis');

/* Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 333 iki 777. Naudodami 4 uždavinio funkciją iš masyvo ištrinkite pirminius skaičius. */

console.log('6 uzduotis');

/* Sugeneruokite atsitiktinio (nuo 10 iki 20) ilgio masyvą, kurio visi, išskyrus paskutinį, elementai yra atsitiktiniai skaičiai nuo 0 iki 10, o paskutinis masyvas, kuris generuojamas pagal tokią pat salygą kaip ir pirmasis masyvas. Viską pakartokite atsitiktinį nuo 10 iki 30  kiekį kartų. Paskutinio masyvo paskutinis elementas yra lygus 0; */

console.log('7 uzduotis');

const randArrayLength = rand(10, 30);
const generateArray = () => {
    const array = [];
    const size = rand(10, 20);
    for (let i = 0; i < size; i++) {
        array.push(rand(0, 10));
    }
    return array;
}

let finalArray = [];
for (let sizeNumber = 0; sizeNumber < randArrayLength; sizeNumber++) {
    const monsterPart = generateArray();
    if (!sizeNumber) {
        monsterPart[monsterPart.length - 1] = 0;
    } else {
        monsterPart[monsterPart.length - 1] = finalArray;
    }
    finalArray = monsterPart;
}
console.log(finalArray);

/* Suskaičiuokite septinto uždavinio elementų, kurie nėra masyvai, sumą. Skaičiuoti reikia visuose masyvuose ir submasyvuose. */

console.log('8 uzduotis');

/* Sugeneruokite masyvą iš trijų elementų, kurie yra atsitiktiniai skaičiai nuo 1 iki 33. Jeigu tarp trijų paskutinių elementų yra nors vienas ne pirminis skaičius, prie masyvo pridėkite dar vieną elementą- atsitiktinį skaičių nuo 1 iki 33. Vėl patikrinkite pradinę sąlygą ir jeigu reikia pridėkite dar vieną elementą. Kartokite, kol sąlyga nereikalaus pridėti elemento.  */

console.log('9 uzduotis');



/* Sugeneruokite masyvą iš 10 elementų, kurie yra masyvai iš 10 elementų, kurie yra atsitiktiniai skaičiai nuo 1 iki 100. Jeigu tokio didelio masyvo (ne atskirai mažesnių) pirminių skaičių vidurkis mažesnis už 70, suraskite masyve mažiausią skaičių (nebūtinai pirminį) ir prie jo pridėkite 3. Vėl paskaičiuokite masyvo pirminių skaičių vidurkį ir jeigu mažesnis nei 70 viską kartokite.  */

console.log('10 uzduotis');

const prime = (a) => {
    let count = 0;
    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            count++;
        }
    }
    return count;
};
const sqArray = [];
for (let i = 0; i < 10; i++) {
    const row = [];
    for (let y = 0; y < 10; y++) {
        row.push(rand(0, 100));
    }
    sqArray.push(row);
}

const primeSum = a => {
    let sum = 0;
    let count = 0;
    a.forEach(e => e.forEach(v => {
        if (!prime(v)) {
        count++;
        sum += v;
        }
    }))
    return count ? sum / count : 0;
}

const findMin = a => {
    let min = a[0][0];
    let coordinates = [0, 0];
    a.forEach((row, rowi) => {
        row.forEach((v, columni) => {
            if (v < min) {
                min = v;
                coordinates = [rowi, columni];
            }
        })
    })
    return coordinates;
}

console.log(findMin(sqArray));


console.log(primeSum(sqArray));

let s = 1000;

while (primeSum(sqArray) < 70) {
    if (--s === 0) {
        console.log('BR');
        break;
    }
    const [x, y] = findMin(sqArray);
    sqArray[x][y] += 3;
}

console.table(sqArray);