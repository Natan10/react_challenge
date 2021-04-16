import React from 'react'
import { ImCart } from 'react-icons/im'

import './index.scss'

const EmptyCart = () => {
  return (
    <div className="empty_cart_container">
      <ImCart size={80} />
      <span>Carrinho Vazio!!!</span>
    </div>
  )
}

export default EmptyCart
