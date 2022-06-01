import './App.css';
//import { Greeting, HeadingColor, HeadingText, HeadingsText, TripleProps } from './Components/react-base/react-base';
import { ShapeShift, ShapeShiftWithNumber, AddAndSubstract, AddSquare, AddColorfulSquare } from './Components/react-class-state/react-class-state';
import { DogsAndSquares, DogsAndCircles, DogsByIndex, BigDogsNotAllowed, DogsNameLegth } from './Components/react-base-list/react-base-list'

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <ShapeShift />
      <ShapeShiftWithNumber />
      <AddAndSubstract />
      <AddSquare />
      <AddColorfulSquare />

      <DogsAndSquares />
      <DogsAndCircles />
      <DogsByIndex />
      <BigDogsNotAllowed />
      <DogsNameLegth />
      
      </header>
    </div>
  );
}

export default App;
