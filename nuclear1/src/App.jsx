import { useState } from 'react';
import './App.css';
import randColor from './Functions/randColor';

const katinukai = ['Pilkis', 'Murkis', 'Rainis'];

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

    const [kv, setKv] = useState([]);

    const addKv = () => {
        setKv(k => [...k, randColor()]);
    }

    const remKv = () => {
        setKv(k => k.slice(0, -1));
    }

    return (
        <div className="App">
        <header className="App-header">
            <h1 style={{color: spalva}}>State {skaicius}</h1>
            <div className='kvc'>
                {
                    kv.map((c, i) => <div className='kv' key={i} style={{backgroundColor: c}}>{i + 1}</div>)
                }
            </div>
            <button onClick={addKv}>AddKv</button>
            <button onClick={remKv}>Remove</button>
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