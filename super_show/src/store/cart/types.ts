/* eslint-disable no-unused-vars */
interface ProductData {
  id: number
  price: number
  image: string
  description: string
  stock: number
  offer?: number
  promotion?: {
    kind: string
    base: number
    value: number
  }
}

interface CartData {
  id: number
  price: number
  image: string
  description: string
  stock: number
  offer?: number
  promotion?: {
    kind: string
    base: number
    value: number
  }
  qtd: number
}

enum CartActions {
  ADD_PRODUCTS = '@cart/ADD_PRODUCTS',
  ADD_CART_PRODUCT = '@cart/ADD_CART_PRODUCT',
  UPDATE_CART_PRODUCT = '@cart/UPDATE_CART_PRODUCT'
  // REMOVE_CART_PRODUCT = '@cart/REMOVE_CART_PRODUCT'
}

enum CartActionsSaga {
  ADD_PRODUCTS_SAGA = '@cart_saga/ADD_CART_PRODUCT',
  ADD_CART_PRODUCT_SAGA = '@cart_saga/ADD_CART_PRODUCT_SAGA',
  UPDATE_CART_PRODUCT_SAGA = '@cart_saga/UPDATE_CART_PRODUCT_SAGA'
}

type CartReducer = {
  products: Array<ProductData>
  cart: Array<CartData>
}

export { CartActions, CartActionsSaga }
export type { ProductData, CartReducer }
