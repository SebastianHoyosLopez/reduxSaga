import { call, put, takeEvery } from "redux-saga/effects"
import { getPokemon } from "../../../api"
import { setPokemonsRequest, setPokemonsSuccess } from "./actions"
import { SET_POKEMONS, SET_POKEMONS_REQUEST, SET_POKEMONS_SUCCESS } from "./types"

function* getPokemonsSaga() {
    try {
        const response = yield call(getPokemon())
        yield put({type: SET_POKEMONS_SUCCESS, payload: response})

    } catch (error) {
        console.log(error.message)
    }
}

export default function* pokemonsSaga() {
    yield takeEvery(SET_POKEMONS_REQUEST, getPokemonsSaga)
}