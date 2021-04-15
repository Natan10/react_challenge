/* eslint-disable no-unused-vars */
/* eslint-disable generator-star-spacing */
import { put, call, takeLatest } from 'redux-saga/effects'
import { addProducts, addProductToCart, updateProductInCart } from './action'
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
  try {
    yield put(addProductToCart(data.payload))
  } catch (e) {
    console.log('Saga error', e)
  }
}

function* DecreaseProductInCart(data: any) {
  try {
    yield put(updateProductInCart(data.payload))
  } catch (e) {
    console.log('Saga error', e)
  }
}

const CartSagas = [
  takeLatest(CartActionsSaga.ADD_PRODUCTS_SAGA, getDataItem),
  takeLatest(CartActionsSaga.ADD_CART_PRODUCT_SAGA, IncreaseProductToCart),
  takeLatest(CartActionsSaga.UPDATE_CART_PRODUCT_SAGA, DecreaseProductInCart)
]

export default CartSagas
