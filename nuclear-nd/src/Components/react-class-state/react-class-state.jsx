import { useState } from 'react';

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default rand;

/* Sukurti aplikaciją, kuri turi mygtuką change ir atvaizduoja apskritimą. 
Paspaudus mygtuką change apskritimas turi pavirsti į kvadratą, o paspaudus dar kartą vėl pavirsti apskritimu. */

const ShapeShift = () => {
    const [state, setState] = useState("circle");

    return (
        <div>
            <div className="container">
                <div className={state}></div>
            </div> 
            <button
            onClick={
                () => setState(state === "circle" ? "square" : "circle" )
            }>
            Change
            </button>
        </div>
    )
}
export { ShapeShift }

/* Sukurti aplikaciją, kuri turi mygtukus change ir random bei atvaizduoja apskritimą su random skaičiumi viduje. 
Paspaudus change mygtuką apskritimas keičiasi į stačiakampį kaip pirmame uždavinyje, 
o paspaudus random mygtuką, skaičius pasikeičia į rand 5 - 25 */

const ShapeShiftWithNumber = () => {
    const [shape, setShape] = useState("circle");
    const [randNum, setRandNum] = useState(rand(5, 25))

    return (
        <div>
            <div className="container">
                <div className={shape}>
                    <span className="randnum">{randNum}</span>
                </div>
            </div> 
            <button
            onClick={
                () => setShape(shape === "circle" ? "rectangle" : "circle" )
            }>
            Change
            </button>
            <button
            onClick={
                () => setRandNum(rand(5, 25))
            }>
            Random
            </button>
        </div>
    )
}
export { ShapeShiftWithNumber }

/* Sukurti aplikaciją, kuri turi mygtukus plus ir minus, bei atvaizduoja skaičių 0. 
Paspaudus plus mygtuką, skaičius padidėja 1, 
o paspaudus minus- sumažėja 3 */

const AddAndSubstract = () => {
    const [number, setNumber] = useState(0);
    return (
        <div>
            <div className="container">
                <span className="randnum">{number}</span>
            </div> 
            <button onClick={() => setNumber(number => number + 1)}>Add 1</button>
            <button onClick={() => setNumber(number => number - 3)}>Substract 3</button>
        </div>
    )
}
export { AddAndSubstract }

/* Sukurti aplikaciją, kuri turi mygtuką add, kurį paspaudus vieną kartą atsiranda mėlynas kvadratas, 
paspaudus du - du kvadratai ir t.t. */

const AddSquare = () => {
    const [square, setSquare] = useState([]);
    const addSquare = () => {

    }
    return (
        <div>
            <div className="container">
                {
                    square.map()
                }
            </div> 
            <button onClick={addSquare}>Add Square</button>
        </div>
    )
}
export { AddSquare }

/* Sukurti aplikaciją, kuri turi mygtukus add red, add blue ir reset. 
Paspaudus add red, prisideda raudonas kvadratas, paspaudus add blue - mėlynas ir t.t. 
Spaudinėjant prisideda vis daygiau kvadratų. 
Paspaudus reset viskas išsitrina */























