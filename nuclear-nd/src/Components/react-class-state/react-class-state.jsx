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
    const [state, setState] = useState("circle");

    return (
        <div>
            <div className="container">
                <div className={state}></div>
            </div> 
            <button
            onClick={
                () => setState(state === "circle" ? "rectangle" : "circle" )
            }>
            Change
            </button>
        </div>
    )
}
export { ShapeShiftWithNumber }




/* Sukurti aplikaciją, kuri turi mygtukus plus ir minus, bei atvaizduoja skaičių 0. 
Paspaudus plus mygtuką, skaičius padidėja 1, 
o paspaudus minus- sumažėja 3 */

/* Sukurti aplikaciją, kuri turi mygtuką add, kurį paspaudus vieną kartą atsiranda mėlynas kvadratas, 
paspaudus du - du kvadratai ir t.t. */

/* Sukurti aplikaciją, kuri turi mygtukus add red, add blue ir reset. 
Paspaudus add red, prisideda raudonas kvadratas, paspaudus add blue - mėlynas ir t.t. 
Spaudinėjant prisideda vis daygiau kvadratų. 
Paspaudus reset viskas išsitrina */























