function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);
 */

console.log('1 uzdavinys');

let wallet = [];
const walletSize = rand(10, 30);
for (let i = 0; i < walletSize; i++) {
    let money = rand(0, 10);
    wallet.push(money);
}
console.log(wallet);

/* Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;
 */

console.log('2 uzdavinys');

let totalMoney = 0;
wallet.forEach(m => totalMoney += m);
console.log(totalMoney);

/* Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;
 */

console.log('3 uzdavinys');

let banknoteTotal = 0;
wallet.forEach(m => {
    if (m > 2) {
    banknoteTotal += m};
})
console.log(banknoteTotal);

/* Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;
 */

console.log('4 uzdavinys');

let newWallet = [];
wallet.forEach(m => {
    if (m > 2) {
    newWallet.push(m)};
})
console.log(newWallet);

/* Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;
 */

console.log('5 uzdavinys');

let newWalletForSort = [...wallet];
const largestBanknote = newWalletForSort.sort((a, b) => b - a)[0];
let largestBanknoteCount = 0;
for (let i = 0; i < newWalletForSort.length; i++) {
    if (newWalletForSort[i] === largestBanknote) {
        largestBanknoteCount++;
    }
}
console.log(largestBanknoteCount);

/* Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes;
 */

console.log('6 uzdavinys');

let newWalletNoNull = [...wallet];
for (let i = 0; i < wallet.length; i++) {
    if (newWalletNoNull[i] === 0) {
        newWalletNoNull[i] = i;
    }
}
console.log(newWalletNoNull);

/* Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;
 */

console.log('7 uzdavinys');

let newWalletTo30 = [...wallet];
while (newWalletTo30.length < 30) {
    newWalletTo30.push(rand(0, 10));
}
console.log(newWalletTo30);

/* Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus);
 */

console.log('8 uzdavinys');

let coins = [];
let banknotes = [];

wallet.forEach(m => (m > 2) ? banknotes.push(m) : coins.push(m));

console.log(coins);
console.log(banknotes);


/* Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, kurio pirmas elementas būtų masyvas iš 8 uždavinio su monetom, o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais;
 */

console.log('9 uzdavinys');

let newWalletWithCompartments = [coins, banknotes];

console.table(newWalletWithCompartments);

/* Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį- masyvą su kortelėm: ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
 */

console.log('10 uzdavinys');

newWalletWithCompartments.push(['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI']);

console.table(newWalletWithCompartments);

/* Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;
 */

console.log('11 uzdavinys');

let cardCompartment = ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];

cardCompartment.sort();

console.log(cardCompartment);

/* Į kortelių skyrelį pridėti mokėjimo kortelių rand(0, 1)'MasterCard', 'Visa' (su rand generuokite atsitiktines reikšmes 'MasterCard' arba 'Visa' ir rašykite į masyvą) iš skirtingų bankų tiek, kad skyrelis (masyvo ilgis) pasidarytų lygus 20;
 */

console.log('12 uzdavinys');

while (cardCompartment.length < 30) {
    (rand(0, 1) === 0) ? cardCompartment.push('MasterCard') : cardCompartment.push('Visa');
}
console.log(cardCompartment);

/* Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau;
 */

console.log('13 uzdavinys');

let visaCount = 0;
let masterCount = 0;
for (let i = 0; i < cardCompartment.length; i++){ 
    if (cardCompartment[i] === 'Visa') {
        visaCount++;
    } else if (cardCompartment[i] === 'MasterCard') {
        masterCount++;
    }
}
console.log('Visa:', visaCount, 'MasterCard:', masterCount);

/* Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 loterijos bilietų, kurių numerius sugeneruokite atsitiktinai su rand funkcija nuo 1000000000 iki 9999999999;
 */

console.log('14 uzdavinys');

let lotteryCompartment = [];
while (lotteryCompartment.length < 10) {
    let lotteryTicket = rand(1000000000, 9999999999)
    lotteryCompartment.push(lotteryTicket);
}
newWalletWithCompartments.push(lotteryCompartment);
console.table(newWalletWithCompartments);

/* Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio;
 */

console.log('15 uzdavinys');

newWalletWithCompartments[3].sort();
console.table(newWalletWithCompartments);

/* Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom ( generuoti atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, kol įdėta suma bus lygi 500);
 */


console.log('16 uzdavinys');

let newBanknotesTotal = 0;
while (newBanknotesTotal < 500) {
    let randNum = rand(3, 10);
    newBanknotesTotal += randNum;
    newWalletWithCompartments[1].push(randNum);
}
console.log(newWalletWithCompartments);

/* Patikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 ir jeigu numeris išsidalins be liekanos - jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.
 */ 

console.log('17 uzdavinys');

let luckyTickets = 0;
newWalletWithCompartments[3].forEach(t => {
        if (t % 777 === 0) {luckyTickets++;}
    }
);
console.log(luckyTickets);

/* Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'] ir jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi žodžiai;
 */

console.log('18 uzdavinys');

const photos = ['šuo', 'katė', 'automobilis', 'namas', 'kiemas']
newWalletWithCompartments.push(photos)

newWalletWithCompartments[4].sort(
    (a, b) => a.length - b.length
)

console.table(newWalletWithCompartments);