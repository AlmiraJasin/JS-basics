import { useState } from 'react';



/* Sukurti aplikaciją, kuri turi mygtuką change ir atvaizduoja apskritimą. 
Paspaudus mygtuką change apskritimas turi pavirsti į kvadratą, o paspaudus dar kartą vėl pavirsti apskritimu. */

const ShapeShift = () => {
    const [state, setState] = useState("circle");

    return (
        <div>
            <div className={state}></div>
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

/* Sukurti aplikaciją, kuri turi mygtukus plus ir minus, bei atvaizduoja skaičių 0. 
Paspaudus plus mygtuką, skaičius padidėja 1, 
o paspaudus minus- sumažėja 3 */

/* Sukurti aplikaciją, kuri turi mygtuką add, kurį paspaudus vieną kartą atsiranda mėlynas kvadratas, 
paspaudus du - du kvadratai ir t.t. */

/* Sukurti aplikaciją, kuri turi mygtukus add red, add blue ir reset. 
Paspaudus add red, prisideda raudonas kvadratas, paspaudus add blue - mėlynas ir t.t. 
Spaudinėjant prisideda vis daygiau kvadratų. 
Paspaudus reset viskas išsitrina */























