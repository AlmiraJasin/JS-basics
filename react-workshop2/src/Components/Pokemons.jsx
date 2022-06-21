import { useEffect } from "react";
import { useState } from "react";
import { getData, getDataAsync, promiseTest } from "../API/fetchPokemonData";
import { Pokemon } from "./Pokemon";

const Pokemons = () => {
    
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        const tempFuntion = async () => {
            const result = await getDataAsync()
            setPokemons(result)  
        }
        tempFuntion()
    }, [])
    return (
        <div>
            {
                pokemons.map(pokemon => <Pokemon key={pokemon.name} name={pokemon.name} photo={pokemon.url}/>)
            }
        </div>
  )};
  
  export default Pokemons;