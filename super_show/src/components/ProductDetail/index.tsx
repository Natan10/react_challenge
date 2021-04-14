/* eslint-disable multiline-ternary */
/* eslint-disable prettier/prettier */
/* eslint-disable space-infix-ops */
import React, { useState } from 'react'
import { Container, Row, Col, Image, Button, ButtonGroup } from 'react-bootstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { GoPlus } from 'react-icons/go'
import { FiMinus } from 'react-icons/fi'

import './index.scss'

const ProductDetail = () => {
  const [addItem, setAddItem] = useState(false)

  const offer = true
  const promo = true
  return (
    <Container className="product_detail_container">
      <Row>
        <Col className="product_detail_image">
          <Image
            src="https://merconnect.s3.amazonaws.com/uploads/products/0762cc690ada9c4f79fde676eaa4c3ade9210d74.png"
            rounded
          />
        </Col>
        <Col>
          <div className="product_detail_info">
            <span className="product_detail_description">ABACAXI UNIDADE</span>
            {promo && (
              <div className="product_detail_promo">
                <label>Compre 3 leve 4</label>
                <p>
                  Ao comprar 4 unidades do produto o preço sai pelo valor de 3!!!
                </p>
              </div>
            )}
            {offer ? (
              <div className="product_detail_offer">
                <span className="product_detail_oldprice">
                  <s>
                    R$ 45.00
                  </s>
                </span>
                <span className="product_detail_newprice">R$ 20.00</span>
              </div>
            ):(
              <span className="product_detail_price">R$ 20.00</span>
            )}
          </div>
          <div className="product_detail_cart">
            {!addItem ? (
              <Button variant="success" onClick={() => setAddItem(!addItem)}>
                Adicionar
                <AiOutlineShoppingCart size={20} />
              </Button>
            ):(
              <div className="product_cart_quantity">
                <ButtonGroup size="sm">
                  <Button className="cart_increase" variant="outline-primary">
                    <GoPlus/>
                  </Button>
                  <Button className="cart_quantity" disabled>5</Button>
                  <Button className="cart_decrease" variant="outline-primary">
                    <FiMinus/>
                  </Button>
                </ButtonGroup>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
