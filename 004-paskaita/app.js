function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const n = ['Petras', 'Asilas', 'Barsukas', 'Kate'];

console.log(n);

console.table(n);


console.log(n[2]);


n[1] = 'Kazys';

// n[8] = 'Suo Sarikas';

// n.pop();

// n.shift();


n.push('Suo Sarikas');

n.unshift('Pele');


// n.splice(2, 1);


console.table(n);

console.log(n.length);


for (let i = 0; i < n.length; i++) {

    console.log(n[i]); // i= 0, 1, 2, ....
}

const nPlus = [
    [4, 7, 12],
    [85, 17, 12],
    [10, 33, 74],
    [26, 41, 99],
];

console.table(nPlus);

for (let i = 0; i < nPlus.length; i++) {
    for (let k = 0; k < nPlus[i].length; k++) {
        console.table('for', nPlus[i][k]);
    }
}

nPlus.forEach(m => m.forEach(k => console.log('foreach', k)))

const newArr = [];

for (let i = 0; i < 100; i++) {
    newArr.push(rand(0, 10));
}

console.log('100 Array', newArr);



const newArray = [];

for (let k = 0; k < 10; k++) {
    const sub = [];
    for (let i = 0; i < 10; i++) {
        sub.push(rand(0, 10));
    }
    newArray.push(sub);
}
console.table(newArray);






