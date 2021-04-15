import React from 'react'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { ProductData } from '../../store/cart/types'

import Product from '../Product'
import './index.scss'

const Products = () => {
  const { cartReducer } = useSelector((state): any => state)

  return (
    <Container className="container_products">
      <div className="products_grid">
        {cartReducer.products.map((product: ProductData) => {
          return <Product key={product.id} product={product} />
        })}
      </div>
    </Container>
  )
}

export default Products
