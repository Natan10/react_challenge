import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import {
  addProductToCartSaga,
  updateProductInCartSaga,
  removeProductToCartSaga
} from '../../store/cart/action'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { totalValue, convertValue } from '../../util'
import './index.scss'
import Buttons from '../Buttons'

const CartItem = ({ product }: any) => {
  const dispatch = useDispatch()
  const { cartReducer } = useSelector((state): any => state)
  const [quantity, setQuantity] = useState(product?.qtd)

  const index = cartReducer.products.findIndex(
    (prod: any) => prod.id === product.id
  )

  const handleAddItem = () => {
    if (cartReducer.products[index].stock !== 0) {
      dispatch(addProductToCartSaga(product))
      setQuantity(quantity + 1)
    } else {
      toast.info('Infelizmente não temos mais desse produto no estoque!')
    }
  }

  const handleRemoveItem = () => {
    if (quantity > 0) {
      dispatch(updateProductInCartSaga(product))
      setQuantity(quantity - 1)
    } else {
      handleRemoveProductToCart()
    }
  }

  const handleRemoveProductToCart = () => {
    dispatch(removeProductToCartSaga(product.id))
  }

  return (
    <tr className="tr_product">
      <td>
        <img className="carditem_image" src={product.image} alt="img" />
      </td>
      <td style={{ width: '350px' }}>
        <p className="carditem_description">{product.description}</p>
      </td>
      <td>
        <Buttons
          add={handleAddItem}
          remove={handleRemoveItem}
          quantity={quantity}
        />
      </td>
      <td>
        <span className="cartitem_value_unit">
          {product.offer
            ? convertValue(product.offer)
            : convertValue(product.price)}
        </span>
      </td>
      <td>
        <span className="cartitem_value_total">
          {totalValue(product, quantity)}
        </span>
      </td>
      <td>
        <div
          className="cart_remove_product"
          onClick={handleRemoveProductToCart}
        >
          <AiOutlineCloseCircle size={25} />
        </div>
      </td>
    </tr>
  )
}

export default CartItem
