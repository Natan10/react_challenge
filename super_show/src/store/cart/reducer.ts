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
    case CartActions.UPDATE_CART_PRODUCT:
      const updatedCart = state.cart
      const updatedProducts = state.products

      const indexUpdateCart = state.cart.findIndex(
        prod => prod.id === action.payload.id
      )

      if (updatedCart[indexUpdateCart].qtd > 0) {
        updatedCart[indexUpdateCart].qtd -= 1
        updatedProducts[indexUpdateCart].stock += 1

        if (updatedCart[indexUpdateCart].qtd === 0) {
          const newCart = updatedCart.filter(
            item => item.id !== indexUpdateCart
          )

          return {
            products: [...updatedProducts],
            cart: [...newCart]
          }
        }
        return {
          products: [...updatedProducts],
          cart: [...updatedCart]
        }
      }
      return state
    case CartActions.REMOVE_CART_PRODUCT:
      const productsRemove = state.products
      const indexProduct = productsRemove.findIndex(
        item => item.id === action.payload
      )
      const indexCartRemove = state.cart.findIndex(
        item => item.id === action.payload
      )

      productsRemove[indexProduct].stock += state.cart[indexCartRemove].qtd

      const removeCartProd = state.cart.filter(
        prod => prod.id !== action.payload
      )
      return {
        products: [...productsRemove],
        cart: [...removeCartProd]
      }
    default:
      return state
  }
}
