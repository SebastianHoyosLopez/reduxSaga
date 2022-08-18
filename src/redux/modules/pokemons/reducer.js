import { getPokemons, getPokemonDetail } from "./actions";
import { initialState } from "./states";
import {
  SET_FAVORITE,
  SET_LOADING,
  SET_POKEMONS,
  SET_POKEBOLA,
  SET_POKEBOLA_DELETE,
} from "./types";

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case getPokemons.TRIGGER: 
      return {...state, loading: true }
    case getPokemons.REQUEST: 
      return {...state }
    case getPokemons.SUCCESS: 
      return { ...state, pokemons: action.payload };
    case getPokemons.FAILURE: 
      return { ...state, pokemons: [] };
    case getPokemons.FULFILL: 
      return { ...state, loading: false };
    
      case getPokemonDetail.TRIGGER: 
      return {...state, loading: true }
    case getPokemonDetail.REQUEST: 
      return {...state }
    case getPokemonDetail.SUCCESS: 
      return { ...state, pokemon: action.payload };
    case getPokemonDetail.FAILURE: 
      return { ...state, pokemon: null };
    case getPokemonDetail.FULFILL: 
      return { ...state, loading: false };

    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case SET_POKEBOLA:
      const pokebolaList = [...state.pokebola, action.payload];
      return { ...state, pokebola: pokebolaList };

    case SET_POKEBOLA_DELETE:
      const pokebola = [...state.pokebola];
      const pokebolaFilter = pokebola.filter(
        (pokemon) => pokemon.id !== action.payload.id
      );
      return { ...state, pokebola: pokebolaFilter };

    case SET_FAVORITE:
      const newPokemonsList = [...state.pokemons];
      const currentPokemonIndex = newPokemonsList.findIndex((pokemon) => {
        return pokemon.id === action.payload.pokemonId;
      });
      if (currentPokemonIndex < 0) {
        return state;
      }

      newPokemonsList[currentPokemonIndex].favorite =
        !newPokemonsList[currentPokemonIndex].favorite;

      return { ...state, pokemons: newPokemonsList };

    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

// case SET_POKEMONS_REQUEST:
//       return { ...state, loading: true };
//     case SET_POKEMONS_SUCCESS:
//       return {...state, pokemons: action.payload, loading: false }
//     case SET_POKEMONS_FAILURE:
//       return { ...state, loading: false, error: "error del servidor" }
//     case SET_POKEMONS_FULFILL:
//       return {...state, loading: false, }
