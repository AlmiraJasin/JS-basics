import './App.css';
import Hello from './Components/009/Hello';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello spalva="green" skaicius={4}></Hello>
        <Hello spalva="black" skaicius={4}></Hello>
        <Hello spalva="red" skaicius={4}></Hello>
      </header>
    </div>
  );
}

export default App;
