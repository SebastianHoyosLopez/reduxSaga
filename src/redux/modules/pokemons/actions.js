import { createAction } from "redux-actions";
import { createRoutine } from "redux-saga-routines";
import { SET_FAVORITE, SET_LOADING, SET_POKEMONS, SET_POKEBOLA, SET_POKEBOLA_DELETE, GET_POKEMONS, GET_POKEMON_DETAIL } from "./types";

export const getPokemons = createRoutine(GET_POKEMONS);
export const getPokemonDetail = createRoutine(GET_POKEMON_DETAIL);

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

export const setPokebola = createAction(SET_POKEBOLA);


export const setPokebolaDelete = (payload) => ({
  type: SET_POKEBOLA_DELETE,
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


// export const setPokemonsRequest = () => ({
//   type: SET_POKEMONS_REQUEST,
// })

// export const setPokemonsSuccess = (payload) => ({
//   type: SET_POKEMONS_SUCCESS,
//   payload
// })

// export const setPokemonsFailure = (payload) => ({
//   type: SET_POKEMONS_FAILURE,
//   payload
// })

// export const setPokemonsFulfill = () => ({
//   type: SET_POKEMONS_FULFILL,
// })