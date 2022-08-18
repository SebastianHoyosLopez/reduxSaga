import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Spin } from "antd";
import Searcher from "../components/Searcher";
import PokemonList from "../components/PokemonList";
import {
  getPokemonsLoaded,
  getLoadingPokemons,
  getPokemonLoaded,
} from "../redux/modules/pokemons/selectors";
import { getPokemonDetail } from "../redux/modules/pokemons/actions";
import PokemonCard from "../components/PokemonCard";

const Home = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(getPokemonsLoaded);
  const pokemon = useSelector(getPokemonLoaded);
  const loading = useSelector(getLoadingPokemons);

  const handlePokemonClick = (url) => {
    dispatch(getPokemonDetail.trigger(url));
  };

  return (
    <div className="App">
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <div className="PokemonList">
          {pokemon ? (
                   <PokemonCard
                   name={pokemon.name}
                   image={pokemon.sprites.front_default}
                   types={pokemon.types}
                   id={pokemon.id}
                   favorite={pokemon.favorite}
                   pokemon={pokemon}
                 />
          ) : (
            pokemons &&
            pokemons.length > 0 &&
            pokemons.map((pokemon, index) => {
              return (
                <div key={index}>
                  <a onClick={(e) => handlePokemonClick(pokemon.url)}>
                    {pokemon.name}
                  </a>
                </div>
              );
            })
          )}
        </div>

        // <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
};

export default Home;
