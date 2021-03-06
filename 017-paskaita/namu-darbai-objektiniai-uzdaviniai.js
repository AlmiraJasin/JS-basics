/* 1
Sukurti klasę Kibiras1. 
Konstruktoriuje sukurti savybę akmenuKiekis  kuri lygi 0. 
Parašyti šiai klasei metodus, pridedančius akmenis: prideti1Akmeni() pridetiDaugAkmenu(kiekis) ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). 
Sukurti vieną kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą. */


/* 2
Sukurti klasę Pinigine. 
Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir metaliniaiPinigai.
Parašyti metodą ideti(kiekis), kuris prideda pinigus į piniginę. 
Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai, jeigu kitaip- prie popieriniaiPinigai. 
Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą. 
Sukurti klasės objektą ir pademonstruoti veikimą. 
Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame pasaulyje. */

/* 3
Sukurti klasę Troleibusas. 
Konstruktoriuje sukurti savybę keleiviuSkaicius kuri yra lygi 0. 
Parašyti du metodus: ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). 
O taip pat parašyti metoda vaziuoja(), kuris į konsolę išvestų troleibusu važiuojančių keleivių skaičių. 
Atkreipkite dėmesį, kad troleibusu važiuoti neigiamas keleivių skaičius negali. */

/* 4
(STATIC) Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), kuris rodytų bendrą keleivių skaičių visuose Troleibusas objektuose. 
Bendram kelevių skaičiaus skaičiavimui sukurkite statinį metodą bendrasKeleiviuSkaicius(keleiviuSkaicius), kuris pridėtų arba atimtų keleivius iš statinės savybės visiKeleiviai (kurioje yra įrašytas bendras keleivių skaičius). 
Taip pat atitinkamai modifikuokite metodus ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). */

/* 5
(MAP) Sukurti klasę PirkiniuKrepselis. 
Konstruktoriuje sukurti savybę turinys, kuri yra Map tipo objektas. 
Sukurti tris metodus: idetiSureli(kiekis), idetiPieno(kiekis), idetiDuonos(kiekis). 
Parašyti metodą krepselioTurinys(), kuris į konsolę išvestų produktų sąrašą (turinys kintamąjį). 
Pridėti tuos pačius produktus galima po kelis kartus, tokiu atveju produktų kiekis turėtų sumuotis. */

/* 6
Patobulinti 2 uždavinio piniginę taip, kad būtų galima skaičiuoti kiek piniginėje yra monetų ir kiek banknotų. 
Parašyti metodą monetos(), kuris skaičiuotų kiek yra piniginėje monetų ir metoda banknotai() - popierinių pinigų skaičiavimui. 
Kiekvieną atskirą dėjimą (ideti(kiekis) metodo kvietimą) laikykite vienu banknotu ar viena moneta. */

/* 7
(STATIC) Klasėje Kibiras1 (pirmas uždavinys) sukurti statinį metodą akmenuSkaiciusVisuoseKibiruose(), kuris rodytų bendrą visuose kibiruose pririnktų akmenų kiekį (visuose sukurtuose Kibiras objektuose). 
Skaičiuoti akmenim, kurie buvo surinkti visuose objektuose, sukurkite statini metodą bendrasAkmenuSkaicius(akmenuSkaicius), kuris pridėtų prie statinės savybės visiAkmenys (kurioje yra įrašytas ir saugomas bendras akmenų skaičius). 
Taip pat atitinkamai modifikuokite metodus prideti1Akmeni(),  pridetiDaugAkmenu(kiekis). */

/* 8
Sukurti klasę Stikline. 
Sukurti savybes turis ir kiekis. 
Turis turi būti pasirenkamas objekto kūrimo metu. 
Parašyti metodą ipilti(kiekis), kuris keistų savybę kiekis. 
Jeigu stiklinės tūris yra mažesnis nei pilamas kiekis- kiekis netelpa ir būna lygus tūriui. 
Parašyti metodą ispilti(), kuris grąžiną kiekį. 
Pilant išpilamas visas kiekis, tas kas netelpa, nuteka per stalo viršų.  
Sukurti metodą stiklinejeYra(), kuris į konsolę atspausdintų kiek stiklinėje yra skysčio. 
Sukurti tris stiklinės objektus su tūriais: 200, 150, 100. 
Didžiausią pripilti pilną ir tada ją ispilti į mažesnę stiklinę, o mažesnę į dar mažesnę. */

class Stikline {
    static gerimukas = 'Pepsi';
    static registas = [];
    static naujaStikline(t) {
        return new Stikline(t)
    }
    static whatType() {
        console.log(this.gerimukas);
    }
    static visosStiklines (stikline) {
        this.registas.push(stikline);
    } 
    constructor(turis) {
        this.turis = turis;
        this.kiekis = 0;
        this.constructor.visosStiklines(this);
    }
    ipilti(kiekis) {
        this.kiekis = Math.min(this.turis, this.kiekis + kiekis);
    }
    ispilti(kiekis) {
        const kiek = this.kiekis;
        this.kiekis = 0;
        return kiek;
    }
    stiklinejeYra() {
        console.log(`Stiklineje ${this.turis} ml yra ${this.kiekis} gerimo`);
    }
}

const s1 = new Stikline(200);
const s2 = new Stikline(150);
const s3 = new Stikline(100);

s1.ipilti(1000);
s1.stiklinejeYra();

s2.ipilti(s1.ispilti());
s2.stiklinejeYra();

s3.ipilti(s2.ispilti());
s3.stiklinejeYra();

console.log(Stikline.registas);

/* 9
Sukurti klasę Grybas. 
Sukurti klasę Krepsys. 
Krepsys turi savybę dydis,kuriai konstruktoriuje yra priskiriama reikšmė 500 ir savybę prikrauta (kuri pradžioje lygi 0). 
Grybas turi tris savybes, kurios taip pat yra paskaičiuojamos konstruktoriuje: valgomas, sukirmijes, svoris. 
Kuriant Grybo objektą jo savybės turi būti atsitiktinai (rand funkcija) priskiriamos taip: valgomas- true arba false, sukirmijes- true arba false ir svoris- nuo 5 iki 45. 
Eiti grybauti, t.y. Kurti naujus Grybas objektus, jeigu nesukirmijęs ir valgomas dėti į Krepsi objektą, t.y. 
Vykdyti deti(grybas) metodą kol bus pririnktas pilnas krepšys nesukirmijusių ir valgomų grybų (gali būti truputį daugiau nei dydis). */

class Grybas {
    constructor() {
        this.valgomas = !this.rand(0, 1);
        this.sukirmijes = !this.rand(0, 1);
        this.svoris = this.rand(5, 45);
    }
    rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

class Krepsys {
    constructor() {
        this.dydis = 500;
        this.prikrauta = 0;
    }
    deti(grybas) {
        if(grybas.valgomas && !grybas.sukirmijes) {
            this.prikrauta += grybas.svoris;
        }
        return this.prikrauta < this.dydis;
    }
}

const Kr = new Krepsys();

while(Kr.deti(new Grybas())){}

console.log(Kr);

/* console.log('uyy');

let a = 'labas';

let b = new String('labas');

String.prototype.tail = function () {
    return(this.valueOf() + '---')
}

console.log(a.tail());

class Cat {
    constructor(n) {
        console.log('Naujas katinas');
        this.name = n
    }
    miau = () => {
        console.log('Miauu');
    }
}

const myCat = new Cat('Pilkis');
const yourCat = new Cat('Rudis')
console.log(myCat);
console.log(yourCat);

myCat.miau() */