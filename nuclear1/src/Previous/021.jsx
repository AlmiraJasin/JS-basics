import { useEffect, useReducer, useRef, useState } from 'react';
import './App.scss';
import listReducer from '../Reducers/listReducer';


function App() {
    const [list, listDispach] = useReducer(listReducer, []);
    const [number, setNumber] = useState('');
    const [range, setRange] = useState(0);
    const doRange = useRef(true); 

    const newList = () => {
        const action = {
            type: 'new'
        }
        listDispach(action);
    }
    const sortList = () => {
        const action = {
            type: 'sort'
        }
        listDispach(action)
    }
    const sortLarge = () => {
        const action = {
            type: 'sort_Large'
        }
        listDispach(action)
    }
    const sortSmall = () => {
        const action = {
            type: 'sort_Small'
        }
        listDispach(action)
    }
    const resetFilter = () => {
        const action = {
            type: 'reset_Filter'
        }
        listDispach(action)
    }    
    const resetSort = () => {
        const action = {
            type: 'reset_Sort'
        }
        listDispach(action)
    }      
    const resetColor = () => {
        const action = {
            type: 'reset_Color'
        }
        listDispach(action)
    }    
    const add = () => {
        const action = {
            type: 'add'
        }
        listDispach(action)
    }    
    const softDelete = number => {
        const action = {
            type: 'softDelete',
            payload: number
        }
        listDispach(action)
    }      
    const hideNumber = () => {
        const action = {
            type: 'softDelete',
            payload: number
        }
        listDispach(action)
    }    
    useEffect(() => {
        if (!doRange.current) {
            return;
        }
        doRange.current = false;
        setTimeout(() => doRange.current = true, 100)
        const action = {
            type: 'range',
            payload: range.padStart(4, 0)
        }
        listDispach(action)
    }, [range])

    return (
        <div className="App">
            <header className="App-header">
                <h1>REDUCER</h1>
                <div className="kvc">
                <button onClick={newList}>New List</button>
                <button onClick={sortList}>Sort List</button>
                <button onClick={sortLarge}>Larger than 4000</button>
                <button onClick={sortSmall}>Smaller than 4000</button>
                <button onClick={resetFilter}>Reset Filter</button>
                <button onClick={resetSort}>Reset Sort</button>
                <button onClick={resetColor}>Reset Color</button>
                <button onClick={add}>Add</button>
                </div>
                <div className="kvc">
                    {
                        list.map((o, i) => o.show ? <div key={i} className="kv" onClick={() => softDelete(o.number)} style={{backgroundColor: o.color}}>{o.number}</div> : null)
                    }
                </div>
                <div className="kvc">
                    <input onChange={e => setNumber(e.target.value)} value={number}></input> 
                </div>
                <button onClick={hideNumber}>Hide</button>

                <div className="kvc">
                    <h2>{range.padStart(4, 0)}</h2>
                    <input type='range' min={0} max={9999} onChange={e => setRange(e.target.value)} value={range}></input> 
                </div>
            </header>
        </div>
    );
}

export default App;