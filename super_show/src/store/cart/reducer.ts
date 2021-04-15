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
  }
}
