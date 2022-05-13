const tagH1 = document.querySelector('h1');
const tag2H1 = document.querySelector('h1+h1');

const tagAll = document.querySelectorAll('h1')

console.log(tagH1);
console.log(tag2H1);
console.log(tagAll);

tagAll.forEach(h1 => {
    console.log('h1');
    h1.style.color = '#fff';
    h1.innerText = 'Valio';
    h1.innerHTML = '<i>Valio valio</i>'
});



