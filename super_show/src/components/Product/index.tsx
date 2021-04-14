/* eslint-disable indent */
/* eslint-disable prettier/prettier */
/* eslint-disable multiline-ternary */
import React from 'react'
import { Card } from 'react-bootstrap'

import './index.scss'

const Product = () => {
  const offer = true

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Header>
        <span className="product_header">Leve 3 pague 4</span>
      </Card.Header>
      <Card.Img
        className="product_image"
        variant="top"
        src="https://merconnect.s3.amazonaws.com/uploads/products/7501006705591-min.png"
      />
      <Card.Body>
        <Card.Text className="product_description">
          ACAI AMAZON 200G COM BANANA
        </Card.Text>
        <Card.Text className="product_info">
          {!offer ? (
            <div className="product_price">
              <span className="product_offer">
                De: <s>R$ 11.999,00</s> por:
              </span>
              <span className="product_new_price">R$ 9.499,00</span>
            </div>
              ) : (
            <div className="product_price">
              Por: <span className="product_new_price">R$ 9.499,00</span>
            </div>
              )}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
