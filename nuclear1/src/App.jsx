import './App.scss';
import { useReducer, useState } from 'react'
import { colorReducer } from './Reducers/colorReducer'
import { spanReducer } from './Reducers/spanReducer'
 
function App() {

    const [color, dispatchColor] = useReducer(colorReducer, 'grey')
    const [span, dispatchSpan] = useReducer(spanReducer, '0000')
    const [colorInput, setColorInput] = useState('grey')

    const goPink = () => {
        const action = {
            type: 'go_pink'
        }
        dispatchColor(action);
    }
    const goGrey = () => {
        const action = {
            type: 'go_grey'
        }
        dispatchColor(action);
    }
    const goChange = () => {
        const action = {
            type: 'change_color'
        }
        dispatchColor(action);
    }
    const generateRandom = () => {
        const action = {
            type: 'change_number'
        }
        dispatchSpan(action);
    }
    const changeColor = () => {
        const action = {
            type: 'change_background',
            payload: colorInput
        }
        dispatchSpan(action);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1 style={{backgroundColor: color}}>Learn Reducer</h1>
                <span> {span} </span>
                <button onClick={goPink}>Go Pink</button>
                <button onClick={goGrey}>Go Grey</button>
                <button onClick={goChange}>Change Color</button>
                <button onClick={generateRandom}>Change Number</button>
                <input type="color" value={colorInput} onChange={e => setColorInput(e.target.input)}></input>
                <button onClick={changeColor}>Change Background</button>
            </header>
        </div>
    );
}

export default App;
