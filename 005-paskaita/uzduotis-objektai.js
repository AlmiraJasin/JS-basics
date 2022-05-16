function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randPrice(min, max) {
    return +(Math.random() * (max - min + 1) + min).toFixed(2);
}
/* Duomenų struktūros

Sukurti 100 sąskaitų masyvą.
Kiekviena sąskaita yra objektas ir turi po 5 savybes:
    number: pagal taisykle INV001, INV002, … INV099, INV100;
    products: masyvas random ilgio nuo 1 iki 10;
        products masyvo elementai objektai, turintys po 4 savybes:
            title: random iš products masyvo (vienoje sąskaitoje gali būti keli vienodi produktai. Vistiek jų kainos bus skirtingos); 
            price: random skaičius su kableliu nuo 1.00 iki 100.00; 
            amount: random skaičius nuo 1 iki 20;
            total:  price ir amount sandauga.
    total: visų products masyvo elementų total suma
    vat: 21% nuo total
    grandTotal: vat ir total suma
Sugeneruotame (ne generavimo metu!) masyve paskaičiuoti ir konsolėje atspausdinti visų sąskaitų grandTotal sumą, produktų sąrašą prie kiekvieno produkto pavadinimo pridedant koks to produkto kiekis yra visose sąskaitose bendrai ir už kokią bendrą sumą.
Pvz: 
Dviratis 35 479.55
Triratis 10 457.22
…..
Medinė dėžė 47 1025.74
*/

const products = ['Dviratis', 'Triratis', 'Žvakidė', 'Stalas', 'Kėdė', 'Knygų lentyna', 'Paveikslas su rėmu', 'Veidrodis', 'Keturių vietų palapinė', 'Pripučiama valtis', 'Meškerė karosams gaudyti', 'Planšetė', 'Pastatoma lempa', 'Vazonas', 'Baterijų pakrovėjas', 'Pagalvių komplektas', 'Oro drėkintuvas', 'Oro sausintuvas', 'Kavinukas elektrinis', 'Kilimas 2 X 3 metrų', 'Kilimėlis kojoms valyti', 'Užuolaidos', 'Vėjo malūnas', 'Dažai sienoms', 'Dažai luboms', 'Medinė dėžė'];

// Funkcija kiekvieno produkto kaip objekto generavimui
const generateProducts = (productsAmount) => {
    const productsList = [];
    for (let i = 0; i < productsAmount; i++) {
        let price = randPrice(1, 100);
        let amount = rand(1, 20);
        productsList.push({
            title: products[rand(0, products.length - 1)],
            price,
            amount,
            total: +(price * amount).toFixed(2)
        });
    }
    return productsList;
};

// Funkcija kiekvienos saskaitos ID generavimui
const generateId = (number) => {
    if (number < 10) {
        return `INV00${number}`;
    } else if (number < 100) {
        return `INV0${number}`;   
    } else {
        return `INV${number}`;         
    }
}

// Funkcija kiekvienos saskaitos kaip objekto generavimui
const generateInvoice = (id) => {
    let products = generateProducts(rand(1, 10));
    const total = +products.reduce((total, product) => {
        total += product.total;
        return total;
    }, 0).toFixed(2)
    const vat = +(total * 0.21).toFixed(2);
    const invoice = {
        number: id,
        products,
        total,
        vat,
        grandTotal: +(total + vat).toFixed(2)
    }
    return invoice;
}

// Ciklas galutiniam saskaitu masyvui sudaryti
let invoiceList = [];
for(let i = 1; i <= 100; i++){
    invoiceList.push(generateInvoice(generateId(i)));
}
console.log(invoiceList);

// Rasti: produktu sarasa, bendra to product amount, to product total price
const invoicesTotal = new Map();
invoiceList.forEach((invoice) => {
    invoice.products.forEach(product => {
        if(!invoicesTotal.has(product.title)){
            invoicesTotal.set(product.title, { amount: product.amount, total: product.total })
        } else {
            const productDetails = invoicesTotal.get(product.title);
            productDetails.amount += product.amount;
            productDetails.total += product.total;
        }
    });
})

invoicesTotal.forEach((productDetails, productName) => {
    console.log(productName, productDetails.amount, +productDetails.total.toFixed(2));
})

// Visu saskaitu bendra suma

const invoicesGrandTotal = invoiceList.reduce((finalTotal, total) => {
    finalTotal += total.grandTotal;
    return finalTotal;
}, 0)
console.log('GrandTheftTotal', invoicesGrandTotal.toFixed(2));
