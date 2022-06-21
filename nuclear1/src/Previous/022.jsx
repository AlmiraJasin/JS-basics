import './App.scss';
import { useEffect, useReducer } from 'react';
import axios from 'axios';
import { booksReducer } from '../Reducers/booksReducer'

function App() {
    const [books, dispatchBooks] = useReducer(booksReducer, []);

    useEffect(() => {
        axios.get('http://in3.dev/knygos/')
        .then(res => {
            const action = {
                payload:res.data,
                type:'get_from_server'
            }
            dispatchBooks(action);
        })
    }, []);

    const sortByTitle = () => {
        const action = {
            type: 'sort_by_title'
        }
        dispatchBooks(action);
    }
    const resetSort = () => {
        const action = {
            type: 'reset_sort'
        }
        dispatchBooks(action);
    }
    
    return (
        <div className="App">
          <header className="App-header">
           <h1>Reducer</h1>
           <div>   
                {
                    books.length ? books.map(b => <div key={b.id}>{b.title} <i>{b.price} EUR</i> </div>) : <h2>Loading...</h2>
                }
           </div>
           <button onClick={sortByTitle}>Sort By Title</button>
           <button onClick={resetSort}>Reset Sort</button>
           <button onClick={greaterThan13}>13 EUR and more</button>
           <button onClick={newBookList}>New Book List</button>
          </header>
        </div>
    );

}

export default App;