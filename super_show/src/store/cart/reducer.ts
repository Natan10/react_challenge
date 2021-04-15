/* eslint-disable no-fallthrough */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
/* eslint-disable no-case-declarations */
import { AnyAction } from 'redux'
import { CartReducer, CartActions } from './types'

const InitialState: CartReducer = {
  products: [],
  cart: []
}

export const cartReducer = (state = InitialState, action: AnyAction) => {
  switch (action.type) {
    case CartActions.ADD_PRODUCTS:
      return {
        ...state,
        products: [...action.payload]
      }
    case CartActions.ADD_CART_PRODUCT:
      const products = state.products
      const cart = state.cart

      const indexProd = state.products.findIndex(
        prod => prod.id === action.payload.id
      )
      const indexCart = state.cart.findIndex(
        prod => prod.id === action.payload.id
      )
      if (indexCart >= 0) {
        if (products[indexProd].stock > 0) {
          products[indexProd].stock -= 1
          cart[indexCart].qtd += 1

          return {
            products: [...products],
            cart: [...cart]
          }
        }
        return state
      } else {
        if (products[indexProd].stock > 0) {
          products[indexProd].stock -= 1
          const cartProduct = { ...products[indexProd], qtd: 1 }

          return {
            products: [...products],
            cart: [...cart, cartProduct]
          }
        }
        return state
      }
    default:
      return state
  }
}
