import './App.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('https://in3.dev/knygos/')
        .then(res => {
            setBooks(res.data)
        })
    }, []);
    
    return (
        <div className="App">
          <header className="App-header">
           <h1>Reducer</h1>
           <div>   
                {
                    books.length ? books.map(b => <div key={b.id}>{b.title}</div>) : <h2>Loading...</h2>
                }
           </div>
          </header>
        </div>
    );

}

export default App;