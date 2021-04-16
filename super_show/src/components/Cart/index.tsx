import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { AiOutlineShoppingCart } from 'react-icons/ai'

import CardItem from '../CartItem'
import EmptyCart from '../EmptyCart'
import { sumValue, convertValue } from '../../util'
import { ProductProps } from '../Product'

import './index.scss'

interface CartProducts {
  products: ProductProps[]
}

const Cart = ({ products }: CartProducts) => {
  const [total, setTotal] = useState(0)

  const { cartState } = useSelector((state): any => state)

  const value = cartState.cart.reduce((count: number, product: any) => {
    const quantity = product.qtd
    return (count += sumValue(product, quantity))
  }, 0)

  return (
    <Container className="carditem_container">
      <Link to="/" className="cart_back">
        Voltar
      </Link>
      {products.length > 0 ? (
        <>
          <div className="cart_title">
            <span>Carrinho</span>
            <AiOutlineShoppingCart />
          </div>
          <Table borderless>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Descrição</th>
                <th>Quantidade</th>
                <th>Valor Unitário</th>
                <th>Valor Total</th>
                <th>Remover Do Carrinho</th>
              </tr>
            </thead>
            <tbody>
              {products.map((prod: any) => {
                return (
                  <CardItem
                    key={prod.id}
                    product={prod}
                    calcTotal={setTotal}
                    total={total}
                  />
                )
              })}
              <tr className="total_cart">
                <td>Total</td>
                <td colSpan={4}></td>
                <td>{convertValue(value)}</td>
              </tr>
            </tbody>
          </Table>
        </>
      ) : (
        <EmptyCart />
      )}
    </Container>
  )
}

export default Cart
