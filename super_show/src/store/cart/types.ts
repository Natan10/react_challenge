/* eslint-disable no-unused-vars */
interface ProductData {
  id: number
  price: number
  image: string
  description: string
  stock?: number
  offer?: number
  promotion?: {
    kind: string
    base: number
    value: number
  }
}

enum CartActions {
  ADD_PRODUCTS = '@cart/ADD_PRODUCTS'
  // ADD_CART_PRODUCT = '@cart/ADD_CART_PRODUCT',
  // UPDATE_CART_PRODUCT = '@cart/UPDATE_CART_PRODUCT',
  // REMOVE_CART_PRODUCT = '@cart/REMOVE_CART_PRODUCT'
}

enum CartActionsSaga {
  ADD_PRODUCTS_SAGA = '@cart_saga/ADD_CART_PRODUCT'
}

type CartReducer = {
  products: ProductData[]
  cart: ProductData[]
}

export { CartActions, CartActionsSaga }
export type { ProductData, CartReducer }
