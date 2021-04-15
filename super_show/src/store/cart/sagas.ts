/* eslint-disable no-unused-vars */
/* eslint-disable generator-star-spacing */
import { put, call, takeLatest } from 'redux-saga/effects'
import { addProducts } from './action'
import { CartActionsSaga } from './types'
import { getItems } from '../../services/api'

function* getDataItem() {
  try {
    const { data } = yield call(getItems)
    yield put(addProducts(data.items))
  } catch (e) {
    console.log('Saga error', e)
  }
}
const CartSagas = [takeLatest(CartActionsSaga.ADD_PRODUCTS_SAGA, getDataItem)]

export default CartSagas
