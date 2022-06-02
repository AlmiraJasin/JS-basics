class Senelis {
    constructor() {
        this.name = 'Bronius';
    }
    miegoti() {
        console.log('Z zzz zzz');
    }
}

class Tevas extends Senelis {
    constructor() {
        super();
        this.name = 'Kazys';
    }
    barti() {
        console.log('Nu nu nu');
    }
}

class Vaikutis extends Tevas {
    constructor() {
        super();
        this.name = 'Petras';
    }
    bliauti() {
        console.log('Beee');
    }
}

const v = new Vaikutis;
const t = new Tevas;

console.log(v.name);

v.bliauti();
v.barti();
v.miegoti();
t.barti();


document.querySelector('button').addEventListener('click', () => {
    v.barti();
})





