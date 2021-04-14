import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import { GoPlus } from 'react-icons/go'
import { FiMinus } from 'react-icons/fi'
import { AiOutlineCloseCircle } from 'react-icons/ai'

import './index.scss'

const CartItem = () => {
  return (
    <tr>
      <td>
        <img
          className="carditem_image"
          src="https://merconnect.s3.amazonaws.com/uploads/products/7896196061825-min.png"
          alt="img"
        />
      </td>
      <td style={{ width: '350px' }}>
        <p className="carditem_description">
          Abacaxi descascado madurozzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
        </p>
      </td>
      <td>
        <ButtonGroup size="sm" className="cartitem_buttons">
          <Button className="cartitem_increase" variant="outline-primary">
            <GoPlus />
          </Button>
          <Button className="cartitem_quantity" disabled>
            5
          </Button>
          <Button className="cartitem_decrease" variant="outline-primary">
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
        <AiOutlineCloseCircle size={25} />
      </td>
    </tr>
  )
}

export default CartItem
