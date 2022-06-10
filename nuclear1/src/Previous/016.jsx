import { useState } from 'react';
import './App.scss';
import getId from '../Functions/getId';
//import { v4 as uuidv4 } from 'uuid';

function App() {

    const [kv, setKv] = useState([]);
    const add = () => {
        setKv(k => [...k, getId('KV')]);
    }

    return (
        <div className="App">
            <header className="App-header">
                <button onClick={add}>Add kv</button>
                <div className='kvc'>
                    {
                        kv.map((k, i) => <div key={i} className="kv">{k}</div>)
                    }
                </div>
            </header>
        </div>
    );
}

export default App;