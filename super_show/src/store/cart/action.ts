import { action } from 'typesafe-actions'
import { ProductData, CartActions, CartActionsSaga } from './types'

export const addProducts = (data: ProductData[]) =>
  action(CartActions.ADD_PRODUCTS, data)

export const addProductsSaga = () => action(CartActionsSaga.ADD_PRODUCTS_SAGA)
