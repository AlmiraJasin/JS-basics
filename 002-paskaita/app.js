console.log('labas');

let skaicius = 444;
let netikrasSkaicius = '';
let loginisKintamasis = false;


console.log(typeof skaicius);
console.log(typeof netikrasSkaicius);
console.log(typeof loginisKintamasis);

console.log(!!skaicius);
console.log(!!netikrasSkaicius);


if (netikrasSkaicius) {
    console.log('yes');
} else if (skaicius) {
    console.log('nezinau');
} else {    
    console.log('no');
}