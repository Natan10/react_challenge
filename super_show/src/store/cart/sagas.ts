/* eslint-disable no-unused-vars */
/* eslint-disable generator-star-spacing */
import { put, call, takeLatest } from 'redux-saga/effects'
import { addProducts, addProductToCard } from './action'
import { CartActionsSaga, ProductData } from './types'
import { getItems } from '../../services/api'

function* getDataItem() {
  try {
    const { data } = yield call(getItems)
    yield put(addProducts(data.items))
  } catch (e) {
    console.log('Saga error', e)
  }
}

function* IncreaseProductToCart(data: any) {
  console.log('aqui')
  try {
    yield put(addProductToCard(data.payload))
  } catch (e) {
    console.log('Saga error', e)
  }
}

const CartSagas = [
  takeLatest(CartActionsSaga.ADD_PRODUCTS_SAGA, getDataItem),
  takeLatest(CartActionsSaga.ADD_CART_PRODUCT_SAGA, IncreaseProductToCart)
]

export default CartSagas
