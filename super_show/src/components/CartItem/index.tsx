/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { GoPlus } from 'react-icons/go'
import { FiMinus } from 'react-icons/fi'
import { AiOutlineCloseCircle } from 'react-icons/ai'

import {
  addProductToCartSaga,
  updateProductInCartSaga
} from '../../store/cart/action'
import './index.scss'

const CartItem = ({ product }: any) => {
  const [quantity, setQuantity] = useState(product?.qtd)
  const dispatch = useDispatch()
  const { cartReducer } = useSelector((state): any => state)

  const index = cartReducer.products.findIndex(
    (prod: any) => prod.id === product.id
  )

  const handleAddItem = () => {
    if (cartReducer.products[index].stock !== 0) {
      dispatch(addProductToCartSaga(product))
      setQuantity(quantity + 1)
    } else {
      new Notification('Olá', {
        body: 'Infelizmente não há produto no stock!!!'
      })
    }
  }

  const handleRemoveItem = () => {
    if (quantity !== 0) {
      dispatch(updateProductInCartSaga(product))
      setQuantity(quantity - 1)
    } else {
      new Notification('Olá', {
        body: 'Não pode mais tirar!!!'
      })
    }
  }

  const handleRemoveProductToCart = () => {
    console.log('kapapakp')
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
        <ButtonGroup size="sm" className="cartitem_buttons">
          <Button
            className="cartitem_increase"
            variant="outline-primary"
            onClick={handleAddItem}
          >
            <GoPlus />
          </Button>
          <Button className="cartitem_quantity" disabled>
            {quantity}
          </Button>
          <Button
            className="cartitem_decrease"
            variant="outline-primary"
            onClick={handleRemoveItem}
          >
            <FiMinus />
          </Button>
        </ButtonGroup>
      </td>
      <td>
        <span className="cartitem_value_unit">R$ 100,00</span>
      </td>
      <td>
        <span className="cartitem_value_total">R$ 250,00</span>
      </td>
      <td>
        <AiOutlineCloseCircle size={25} onClick={handleRemoveProductToCart} />
      </td>
    </tr>
  )
}

export default CartItem
