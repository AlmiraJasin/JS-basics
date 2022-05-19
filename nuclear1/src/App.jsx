import { useState } from 'react';
import './App.css';

function App() {
    const [spalva, setSpalva] = useState('yellow');
    /* const mygtukas = () => {
        console.log('As grazus mygtukas');
        return mygtukoBrolis;
    }
    const mygtukoBrolis = () => {
        console.log('As grazus mygtuko brolis');
    } */
    const beArgumentu = () => {
        console.log('beArgumentu');
    }
    const suArgumentu = ka => {
        console.log('suArgumentu' + ka);
    }
    const keistiSpalva = () => {
        // const naujaSpalva = spalva === 'yellow' ? 'pink' : 'yellow'; - neteisingas budas
        // teisingas budas:
        setSpalva(old => old === 'yellow' ? 'pink' : 'yellow');
        // console.log(spalva);
    }

    const [skaicius, setSkaicius] = useState(1);

    const skaiciuotuvas = (reiksme) => {
        setSkaicius(skaiciukas => skaiciukas + reiksme);
    }
    return (
        <div className="App">
        <header className="App-header">
            <h1 style={{color: spalva}}>State {skaicius}</h1>
            <button onClick={() => skaiciuotuvas(1)}>Add One</button>
            <button onClick={() => skaiciuotuvas(-1)}>Subs One</button>
            <button onClick={() => suArgumentu(' Labas')}>Press me! SU</button>
            <button onClick={beArgumentu}>Press me! BE</button>
            <button onClick={keistiSpalva}>Kita Spalva</button>
        </header>
        </div>
    );
}

export default App;