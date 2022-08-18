import { call, put, takeEvery } from "redux-saga/effects";
import { getPokemon } from "../../../api";
import { getPokemons } from "./actions";

function* getPokemonsSaga() {
  try {
    yield put(getPokemons.request());
    const response = yield call(getPokemon());
    yield put(getPokemons.success(response));
  } catch (error) {
    yield put(getPokemons.failure());
  } finally {
    yield put(getPokemons.fulfill());
  }
}

export default function* pokemonsSaga() {
  yield takeEvery(getPokemons.TRIGGER, getPokemonsSaga);
}
