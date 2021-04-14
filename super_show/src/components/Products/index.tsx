import React from 'react'
import Product from '../Product'
import { Container } from 'react-bootstrap'
import './index.scss'
const Products = () => {
  const products: any = [
    <Product key={1} />,
    <Product key={2} />,
    <Product key={3} />,
    <Product key={4} />,
    <Product key={5} />,
    <Product key={6} />,
    <Product key={7} />
  ]
  return (
    <Container className="container_products">
      <div className="products_grid">
        {products.map((index: any, prod: any) => {
          return products[prod]
        })}
      </div>
    </Container>
  )
}

export default Products
