import './App.css';
//import { Greeting, HeadingColor, HeadingText, HeadingsText, TripleProps } from './Components/react-base/react-base';
import { ShapeShift, ShapeShiftWithNumber, AddAndSubstract } from './Components/react-class-state/react-class-state';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ShapeShift />
      <ShapeShiftWithNumber />
      <AddAndSubstract />
      </header>
    </div>
  );
}

export default App;
