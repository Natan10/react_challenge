import React, { useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { sumValue, convertValue } from '../../util'
import CardItem from '../CartItem'
import EmptyCart from '../EmptyCart'
import { ProductProps } from '../Product'
import './index.scss'

interface CartProducts {
  products: ProductProps[]
}

const Cart = ({ products }: CartProducts) => {
  const [total, setTotal] = useState(0)

  const { cartReducer } = useSelector((state): any => state)
  const cart = useSelector((state): any => state)

  const value = cartReducer.cart.reduce((count: number, product: any) => {
    const quantity = product.qtd
    return (count += sumValue(product, quantity))
  }, 0)

  console.log(cart)
  return (
    <Container className="carditem_container">
      {products.length > 0 ? (
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
      ) : (
        <EmptyCart />
      )}
    </Container>
  )
}

export default Cart
