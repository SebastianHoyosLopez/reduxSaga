import { combineReducers } from "redux";
import { pokemonsReducer } from "./modules/pokemons/reducer";

const rootReducer = combineReducers({
    pokemonsReducer: pokemonsReducer,
})

export default rootReducer;