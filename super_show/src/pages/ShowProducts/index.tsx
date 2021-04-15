import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Products from '../../components/Products'
import { addProductsSaga } from '../../store/cart/action'

const ShowProducts = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const loadItems = async () => {
      try {
        await dispatch(addProductsSaga())
      } catch (e) {
        console.log('full errooo', e)
      }
    }
    loadItems()
  }, [dispatch])

  return <Products />
}

export default ShowProducts
