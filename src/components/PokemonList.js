import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {

  return (
    <div className="PokemonList">
      {pokemons.map((pokemon, index) => {
        return (
          <div key={index}>
            <PokemonCard
              name={pokemon.name}
              image={pokemon.sprites.front_default}
              types={pokemon.types}
              id={pokemon.id}
              favorite={pokemon.favorite}
              pokemon={pokemon}
            />
          </div>
        );
      })}
    </div>
  );
};

// PokemonList.defaultProps = {
//     pokemons: Array(10).fill(""),
// };

export default PokemonList;
