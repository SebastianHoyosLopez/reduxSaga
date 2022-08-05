import React from "react";
import { useSelector } from "react-redux";
import PokemonList from "../components/PokemonList"

const Pokebola = () => {
    const pokemonsPoke = useSelector((state) => state.pokebola);
    // const namePokemons = pokemonsPoke.map(pokemonName => pokemonName.name).join(", ");
    return (
        <div className="App">
            <PokemonList pokemons={pokemonsPoke} />
        </div>
    )
};

export default Pokebola;
