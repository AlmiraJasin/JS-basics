import './App.css';

/* Sukurti komponentą, kuris užrašytų “LABAS, ZUIKI!”. 
Raidžių spalva pink. 
Spalva tekstui nurodoma komponento viduje naudojant style.*/

const Greeting = () => {
  return (
    <div style={{color: "pink"}}>LABAS, ZUIKI!</div>
  )    
}

/* Sukurti komponentą, kuris gauną vieną props. 
Props yra bet koks tekstas, kuris komponente atvaizduojamas h1 tage.*/

const HeadingText = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

/* Sukurti komponentą rodantį tekstą h1 tage- “Zebrai ir Bebrai”, kuris gauna vieną props, kuris lygus 1 arba 2. 
Jeigu props lygus 1 tekstas nudažomas mėlynai, o jeigu 2 - raudonai.*/

const HeadingColor = (props) => {
  const color = props.number === 1 ? 'blue' : 'red';
  return (<h1 style={{color: color}}>Zebrai ir Bebrai</h1>)
}

/* Sukurti komponentą, kuris gauna du props. 
Vienas props bet koks tekstas, kuris komponente atvaizduojamas h1 tage, o antras bet koks tekstas kuris atvaizduojamas h2 tage.*/

const HeadingsText = (props) => {
  return (
    <>
    <h1>{props.textH1}</h1>
    <h2>{props.textH2}</h2>
    </>
  ) 
}

/* Sukurti komponentą, kuris gauna tris props. 
Vienas props bet koks tekstas, kuris komponente atvaizduojamas h1 tage, o 
antras bet koks tekstas kuris atvaizduojamas h2 tage, o 
trečias yra spalva, kuria nudažomi abu tekstai. */

const TripleProps = (props) => {
  return (
    <>
    <h1 style={{color: props.color}}>{props.textH1}</h1>
    <h2 style={{color: props.color}}>{props.textH2}</h2>
    </>
  ) 
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting />
        <HeadingText text={"bet koks tekstas"} />
        <HeadingColor number={1} />
        <HeadingColor number={2} />
        <HeadingsText textH1={"H1 Tag"} textH2={"H2 Tag"} />
        <TripleProps textH1={"Colorful H1 Tag"} textH2={"Colorful H2 Tag"} color="green" />
      </header>
    </div>
  );
}

export default App;
