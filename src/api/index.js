import axios from "axios";

export const getPokemon = () => {
  return axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((res) => res.data.results)
    .catch((err) => console.log(err));
};

export const getPokemonDetails = (pokemon) => {
  return axios
    .get(pokemon.url)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};


export const getDatosCrossRef = () => {
  return axios
    .get("https://rickandmortyapi.com/api/character")
    .then((res) => res.data.results)
    .catch((err) => console.log(err));
};