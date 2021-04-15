import React, { useState } from 'react'
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  ButtonGroup
} from 'react-bootstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { GoPlus } from 'react-icons/go'
import { FiMinus } from 'react-icons/fi'

import { useDispatch } from 'react-redux'
import {
  addProductToCartSaga,
  updateProductInCartSaga
} from '../../store/cart/action'
import { ProductProps } from '../Product'
import { convertValue, convertPromo, convertTextPromo } from '../../util/index'

import './index.scss'

const ProductDetail = ({ product }: ProductProps) => {
  const [addItem, setAddItem] = useState(false)
  const [total, setTotal] = useState(0)

  const dispatch = useDispatch()

  const handleAddItem = () => {
    if (product.stock > 0) {
      dispatch(addProductToCartSaga(product))
      setTotal(total + 1)
    } else {
      new Notification('Olá', {
        body: 'Infelizmente não há produto no stock!!!'
      })
    }
  }

  const handleRemoveItem = () => {
    if (total !== 0) {
      dispatch(updateProductInCartSaga(product))
      setTotal(state => state - 1)
    } else {
      new Notification('Olá', {
        body: 'Não pode mais tirar!!!'
      })
    }
  }

  return (
    <Container className="product_detail_container">
      <Row>
        <Col className="product_detail_image">
          <Image src={product.image} rounded />
        </Col>
        <Col>
          <div className="product_detail_info">
            <span className="product_detail_description">
              {product.description}
            </span>
            {product.promotion && (
              <div className="product_detail_promo">
                <label>{convertPromo(product.promotion)}</label>
                <p>{convertTextPromo(product.promotion)}</p>
              </div>
            )}
            {product.offer !== undefined ? (
              <div className="product_detail_offer">
                <span className="product_detail_oldprice">
                  <s>{convertValue(product.price)}</s>
                </span>
                <span className="product_detail_newprice">
                  {convertValue(product.offer)}
                </span>
              </div>
            ) : (
              <span className="product_detail_price">R$ {product.price}</span>
            )}
          </div>
          <div className="product_detail_cart">
            {!addItem ? (
              <Button variant="success" onClick={() => setAddItem(!addItem)}>
                Adicionar
                <AiOutlineShoppingCart size={20} />
              </Button>
            ) : (
              <div className="product_cart_quantity">
                <ButtonGroup size="sm">
                  <Button
                    className="cart_increase"
                    variant="outline-primary"
                    onClick={handleAddItem}
                  >
                    <GoPlus />
                  </Button>
                  <Button className="cart_quantity" disabled>
                    {total}
                  </Button>
                  <Button
                    className="cart_decrease"
                    variant="outline-primary"
                    onClick={handleRemoveItem}
                  >
                    <FiMinus />
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
