import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ProductData } from '../../store/cart/types'
import { convertValue } from '../../util'

import promo from '../../assets/promo.png'

import './index.scss'

export interface ProductProps {
  product: ProductData
}

const Product = ({ product }: ProductProps) => {
  return (
    <Card style={{ width: '18rem' }}>
      {product.promotion && (
        <div className="product_promo">
          <img src={promo} alt="promo" />
        </div>
      )}
      <Link to={`/product/${product.id}`} style={{ textAlign: 'center' }}>
        <Card.Img className="product_image" variant="top" src={product.image} />
      </Link>
      <Card.Body>
        <Card.Text className="product_description">
          {product.description}
        </Card.Text>
        <Card.Text className="product_info">
          {product.offer ? (
            <div className="product_price">
              <span className="product_offer">
                <s>{convertValue(product.price)}</s>
              </span>
              <span className="product_new_price">
                {convertValue(product.offer)}
              </span>
            </div>
          ) : (
            <div className="product_price">
              <span className="product_new_price">
                {convertValue(product.price)}
              </span>
            </div>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
