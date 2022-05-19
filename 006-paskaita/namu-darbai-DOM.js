// Atskiri elementai
//    a)  Tamsiai žaliai nuspalvinti h1 tagą;
document.getElementsByTagName('h1')[0].style.color = 'green';
//    b)  Tagui i pridėti klasę small; https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
document.getElementsByTagName('i')[0].classList.add("small");
//    c)  Iš tago h1 pašalinti klasę main;
document.getElementsByTagName('h1')[0].classList.remove("main");
//    d)  Tik tam h2 tagui, kuris iškart eina po h1 tago, pridėti klasę first ir pašalinti klasę main; https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove
document.querySelectorAll('h1 + h2').forEach(h2Tag => {
    h2Tag.classList.add("first");
    h2Tag.classList.remove("main");
})
//    e)  Pirmam span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti pilkai
document.querySelectorAll('h2 > span:first-child').forEach(span => {
    span.style.fontSize = '10px';
    span.style.color = 'grey';
})
// Elemetų grupės (nodeList) skaičiavimus išvest į consolę
//    a)  Suskaičiuoti kiek yra h2 tagų;
console.log(document.getElementsByTagName('h2').length);
//    b)  Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first
console.log(document.querySelectorAll('h2:not(.first)').length);
//    c)  Visus h2 tagus nuspalvinti šviesiai mėlynai
document.querySelectorAll('h2').forEach(h2 => {
    h2.style.color = 'blue';
})
//    d)  Tagų, kurie yra div su klase prices, viduje esantiems h2 tagams pridėti klasę price-tag;
document.querySelectorAll('div.prices > h2').forEach(h2InDiv => {
    h2InDiv.classList.add('price-tag');
})
//    e)  Pabraukti visus tagus su klase new;
document.querySelectorAll('.new').forEach(classNew => {
    classNew.style.textDecoration = 'underline';
})
//    f)  Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);
console.log('kategorijos', document.querySelectorAll('ul').length);
console.log('zirafos', document.querySelectorAll('#zirafos > li:not(.like-button)').length);
//    g)  Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;
document.querySelectorAll('ul').forEach(ulTag => {
    ulTag.style.cssText = `
        border: 1px solid black;
        border-radius: 5px;
        padding: 15px 50px;
    `;
})
//    h)  Suskaičiuoti kiek yra naujų gyvūnų (su klase new);
console.log(document.querySelectorAll('.new').length);
//    i)  Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;
document.querySelectorAll('ul').forEach(ulTag => {
    console.log(`${ulTag.id}`, ulTag.querySelectorAll('.new').length)
})
//Elementų events
//    a)  Padaryti tai ką liepia mygtukai Header1 sekcijoje;
const buttonColor = document.querySelector('#h1-color')
buttonColor.addEventListener('click', () => {
    document.querySelectorAll('h1').forEach(h1Tag => {
        h1Tag.style.color = 'red';
    })
})
//    b)  Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;

//    c)  Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeistų į pilką, o paspaudus dar kartą vėl grįžtu į baltą spalvą;

//    d)  Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css savybė color = orange;

//    e)  Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, tagui su id contacts būtų pridėta css savybė fontSize = 20px;

//    f)  Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, pridėtos tage su id contacts savybės būtų panaikintos https://stackoverflow.com/questions/18691655/remove-style-on-element

//    g)  Padaryti tai ką liepia mygtukai Header2 sekcijoje;


/* Elementų grupių events
    a)  Padaryti, kad dukartus paspaudus ant naujų gyvūnų jie nusispalvintu raudonai https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
    b)  Padaryti, kad paspaudus ant gyvūno jis būtų atvaizduojamas 130% didesniu fonto dydžiu. “PATINKA” tas neturi galioti.
    c)  Padaryti, kad paspaudus ant “PATINKA”, atitinkamai (tėvinei) sekcijai būtų priskirta klasė like; */