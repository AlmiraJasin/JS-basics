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

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    console.log('atliktas paspaudimas');
});

tagAll.forEach(h1 => {
    h1.addEventListener('click', () => {
        h1.style.color = h1.style.color === 'red' ? '#fff' : 'red';
        console.log(e);
    })
});

document.querySelector('a').addEventListener('click', e => {
    e.preventDefault();
    e.target.style.color = 'red';
});

document.querySelector('#child').addEventListener('click', e => {
    e.stopPropagation();
    e.target.style.backgroundColor = 'red';
});

document.querySelector('#parent').addEventListener('click', e => {
    document.querySelector('#parent').style.backgroundColor = 'red';
});





