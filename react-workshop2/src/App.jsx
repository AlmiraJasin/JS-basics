import { getData } from './API/fetchPokemonData';
import './App.css';
import Pokemons from './Components/Pokemons';

function App() {
  getData()
  return (
    <div className="App">
      <header className="App-header">
        <Pokemons />
      </header>
    </div>
  );
}

export default App;
