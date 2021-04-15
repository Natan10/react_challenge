/* eslint-disable multiline-ternary */
/* eslint-disable prettier/prettier */
/* eslint-disable space-infix-ops */
import React, { useState } from 'react'
import { Container, Row, Col, Image, Button, ButtonGroup } from 'react-bootstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { GoPlus } from 'react-icons/go'
import { FiMinus } from 'react-icons/fi'

import { ProductProps } from '../Product'
import { convertValue, convertPromo, convertTextPromo } from '../../util/index'

import './index.scss'

const ProductDetail = ({ product }:ProductProps) => {
  const [addItem, setAddItem] = useState(true)

  return (
    <Container className="product_detail_container">
      <Row>
        <Col className="product_detail_image">
          <Image
            src={product.image}
            rounded
          />
        </Col>
        <Col>
          <div className="product_detail_info">
            <span className="product_detail_description">{product.description}</span>
            {product.promotion && (
              <div className="product_detail_promo">
                <label>{convertPromo(product.promotion)}</label>
                <p>
                 {convertTextPromo(product.promotion)}
                </p>
              </div>
            )}
            {product.offer ? (
              <div className="product_detail_offer">
                <span className="product_detail_oldprice">
                  <s>
                    {convertValue(product.price)}
                  </s>
                </span>
                <span className="product_detail_newprice">{convertValue(product.offer)}</span>
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
