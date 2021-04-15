import { action } from 'typesafe-actions'
import { ProductData, CartActions, CartActionsSaga } from './types'

export const addProducts = (data: ProductData[]) =>
  action(CartActions.ADD_PRODUCTS, data)

export const addProductToCard = (data: any) =>
  action(CartActions.ADD_CART_PRODUCT, data)

/** Sagas */
export const addProductsSaga = () => action(CartActionsSaga.ADD_PRODUCTS_SAGA)

export const addProductToCardSaga = (data: any) =>
  action(CartActionsSaga.ADD_CART_PRODUCT_SAGA, data)
