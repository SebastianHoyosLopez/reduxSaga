import {all} from 'redux-saga/effects'
import pokemonsSaga from './modules/pokemons/saga'

export default function* rootSaga() {
 yield all([pokemonsSaga()])
}