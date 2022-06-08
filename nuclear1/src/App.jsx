import { useReducer } from 'react';
import './App.scss';
import listReducer from './Reducers/listReducer';


function App() {
    const [list, listDispach] = useReducer(listReducer, []);

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
    const softDelete = () => {
        const action = {
            type: 'softDelete'
        }
        listDispach(action)
    }    

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
                <div className="kvc" onClick={softDelete}>
                    {
                        list.map((o, i) => o.show ? <div key={i} className="kv" style={{backgroundColor: o.color}}>{o.number}</div> : null)
                    }
                </div>

            </header>
        </div>
    );
}

export default App;