import { call, put, takeEvery } from "redux-saga/effects";
import { getPokemon,getPokemonDetails } from "../../../api";
import { getPokemonDetail, getPokemons } from "./actions";

function* getPokemonsSaga() {
  try {
    yield put(getPokemons.request());
    const response = yield call(getPokemon);
    yield put(getPokemons.success(response));
  } catch (error) {
    yield put(getPokemons.failure());
  } finally {
    yield put(getPokemons.fulfill());
  }
}

function* getPokemonSaga({payload}) {
  try {
    yield put(getPokemonDetail.request());
    const response = yield call(getPokemonDetails,payload);
    yield put(getPokemonDetail.success(response));
  } catch (error) {
    yield put(getPokemonDetail.failure());
  } finally {
    yield put(getPokemonDetail.fulfill());
  }
}

export default function* pokemonsSaga() {
  yield takeEvery(getPokemons.TRIGGER, getPokemonsSaga);
  yield takeEvery(getPokemonDetail.TRIGGER, getPokemonSaga);
}
