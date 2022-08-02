import { getPokemonDetails } from "../../../api";
import { SET_FAVORITE, SET_LOADING, SET_POKEMONS, SET_POKEBOLA } from "./types";

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

export const setPokebola = (payload) => ({
  type: SET_POKEBOLA,
  payload,
})

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
})

export  const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload
})

export const getPokemonsWithDetails = (pokemons = []) => async (dispatch) => {
  const pokemonsDetailed = await Promise.all(
    pokemons.map((pokemon) => getPokemonDetails(pokemon))
  );
  dispatch(setPokemons(pokemonsDetailed));
};