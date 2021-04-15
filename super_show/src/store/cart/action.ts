import { action } from 'typesafe-actions'
import { ProductData, CartActions, CartActionsSaga } from './types'

/** Actions */
export const addProducts = (data: ProductData[]) =>
  action(CartActions.ADD_PRODUCTS, data)

export const addProductToCart = (data: any) =>
  action(CartActions.ADD_CART_PRODUCT, data)

export const updateProductInCart = (data: any) =>
  action(CartActions.UPDATE_CART_PRODUCT, data)

/** Sagas */
export const addProductsSaga = () => action(CartActionsSaga.ADD_PRODUCTS_SAGA)

export const addProductToCartSaga = (data: any) =>
  action(CartActionsSaga.ADD_CART_PRODUCT_SAGA, data)

export const updateProductInCartSaga = (data: any) =>
  action(CartActionsSaga.UPDATE_CART_PRODUCT_SAGA, data)
