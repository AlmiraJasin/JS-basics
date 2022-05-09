import { rand } from "../001-paskaita/namu-darbai";

// ciklas while skirtas skaiciavimams nuo 0 iki Infinity;
// ciklas do...While skirtas skaiciavimams nuo 1 iki Infinity;


//break - nutraukia visa cikla;
//continue - pabaigia iteracija ir pradeda nauja iteracija;

console.log('While Loop');

let a = 0;

let b = 0;

let c = 0;

while (b < 10) {
    if (++a > 100) {
        console.log('avarija');
        break;
    }
    b++;
}

console.log(b);


console.log('For Loop');

for (let i = 0; i < 10; i++) {
    if (i === 7) {
        break;
    }
    if (i === 5) {
        continue;
    }
    console.log(`dabar yra ${i + 1} skaicius`);
}


console.log('Do...While Loop');

do {
    if (++a > 100) {
        console.log('avarija');
        break;
    }
    c++;
}while(c < 10)

console.log(b, c);


console.log('Maisto valgymas');

const kotletoKasniai = rand(10, 30);
let kotletasSuvalgytasPer = 0;

/*for (let i = 0; i < kotletoKasniai; i++) {
    const gabaliukasSukramtomasPer = rand(1, 10);
    kotletasSuvalgytasPer += gabaliukasSukramtomasPer;
}

console.log(kotletasSuvalgytasPer);*/

do {
    kotletasSuvalgytasPer++;
} while(rand(0,4))
