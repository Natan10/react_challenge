import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Cart from '../../components/Cart'

const ShowCart = () => {
  const [cart, setCart] = useState([])
  const { cartReducer } = useSelector((state): any => state)

  useEffect(() => {
    setCart(cartReducer.cart)
  }, [cartReducer.cart])

  return <Cart products={cart} />
}
export default ShowCart
