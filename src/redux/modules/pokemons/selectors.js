export const pokemonsState = (state) => state.pokemonsReducer;

export const getLoadingPokemons = (state) => pokemonsState(state).loading;

export const getPokemonsLoaded = (state) => pokemonsState(state).pokemons;

export const getPokemonLoaded = (state) => pokemonsState(state).pokemon;
