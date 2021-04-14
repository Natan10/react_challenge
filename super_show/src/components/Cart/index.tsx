import React from 'react'
import { Container, Table } from 'react-bootstrap'
import CardItem from '../CartItem'

import './index.scss'

const Cart = () => {
  const cardItem = [
    <CardItem key={1} />,
    <CardItem key={2} />,
    <CardItem key={3} />,
    <CardItem key={4} />,
    <CardItem key={5} />
  ]

  return (
    <Container className="carditem_container">
      <Table>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Valor Total</th>
          </tr>
        </thead>
        <tbody>
          {cardItem.map((index: any, prod: any) => {
            return cardItem[prod]
          })}
        </tbody>
      </Table>
    </Container>
  )
}

export default Cart
