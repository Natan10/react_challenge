/* eslint-disable generator-star-spacing */
import { SagaIterator } from 'redux-saga'
import { all } from 'redux-saga/effects'
import CartSagas from './cart/sagas'

export default function* rootSaga(): SagaIterator {
  yield all([...CartSagas])
}
