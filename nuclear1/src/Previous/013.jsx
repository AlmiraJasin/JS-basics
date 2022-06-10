import { useEffect, useRef, useState } from 'react';
import './App.scss';
import randColor from '../Functions/randColor';



function App() {
    const [count, setCount] = useState(null);
    const numb = useRef(0);
    const panda = useRef();
    useEffect(() => {
        setCount(parseInt(localStorage.getItem('count') ?? 0));
    }, [])

    useEffect(() => {
        if (null === count) {
            return;
        }
        localStorage.setItem('count', count);
    }, [count]);

    const add = () => {
        setCount(c => c + 1);
        numb.current = numb.current + 3;
        console.log(numb.current);
        // const p = document.querySelector('#panda');
        // const p = panda.current;
        // console.log(p.dataset.panda);
    }

    const addCat = () => {
        localStorage.setItem('cat', JSON.stringify(['Cat Tom', 'Cat Poppy']))
    }

    const getCat = () => {
        console.log(JSON.parse(localStorage.getItem('cat')));
    }

    const removeCat = () => {
        localStorage.removeItem('cat')
    }

    const [kv, setKv] = useState([]);

    const addKv = () => {
        setKv(k => [...k, randColor()]);
        
    }

    const remKv = () => {
        setKv(k => k.slice(0, -1));
    }

    useEffect(() => {
        
    })

    return (
        <div className="App">
        <header className="App-header">
            <h1>useRef LocalStorage {count}</h1>
            <div className='kvc'>
                {
                    kv.map((c, i) => <div className='kv' key={i} style={{backgroundColor: c}}>{i + 1}</div>)
                }
            </div>
            <button onClick={addKv}>AddKv</button>
            <button onClick={remKv}>Remove</button>
            <button onClick={add}>Add One</button>
            <button onClick={addCat}>Add Cat</button>
            <button onClick={getCat}>Get Cat</button>
            <button onClick={removeCat}>Remove Cat</button>
            <div ref={panda} data-panda='miega'></div>
        </header>
        </div>
    );
}

export default App;
