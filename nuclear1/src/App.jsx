import { useRef, useState } from 'react';
import './App.scss';

function App() {

    const [count, setCount] = useState(0);
    const numb = useRef(0);
    const panda = useRef()
    const add = () => {
        setCount(c => c + 1);
        numb.current = numb.current + 3;
        console.log(numb);
        // const p = document.querySelector('#panda');
        // const p = panda.current;
        // console.log(p.dataset.panda);
    }

    const addCat = () => {
        localStorage.setItem('cat', 'Cat Tom')
    }

    const getCat = () => {
        console.log(localStorage.getItem('cat'));
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
