import { useEffect, useRef, useState } from 'react';
import './App.scss';

function App() {

    const [count, setCount] = useState(null);
    const numb = useRef(0);
    const panda = useRef()

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

    return (
        <div className="App">
        <header className="App-header">
            <h1>useRef LocalStorage {count}</h1>
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
