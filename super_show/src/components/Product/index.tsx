/* eslint-disable indent */
/* eslint-disable prettier/prettier */
/* eslint-disable multiline-ternary */
import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import promo from '../../assets/promo.png'

import './index.scss'

const Product = () => {
  const offer = true

  return (
    <Card style={{ width: '18rem' }}>
      <div className="product_promo">
        <img src={promo} alt="promo" />
      </div>
      <Link to="/" style={{ textAlign: 'center' }}>
        <Card.Img
          className="product_image"
          variant="top"
          src="https://merconnect.s3.amazonaws.com/uploads/products/7501006705591-min.png"
        />
      </Link>
      <Card.Body>
        <Card.Text className="product_description">
          ACAI AMAZON 200G COM BANANA
        </Card.Text>
        <Card.Text className="product_info">
          {offer ? (
            <div className="product_price">
              <span className="product_offer">
                <s>R$ 11.999,00</s>
              </span>
              <span className="product_new_price">R$ 9.499,00</span>
            </div>
              ) : (
            <div className="product_price">
              <span className="product_new_price">R$ 9.499,00</span>
            </div>
              )}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
