import React from 'react'
import { Container, Table } from 'react-bootstrap'
import CardItem from '../CartItem'
import { ProductProps } from '../Product'
import './index.scss'

interface CartProducts {
  products: ProductProps[]
}

const Cart = ({ products }: CartProducts) => {
  return (
    <Container className="carditem_container">
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
            return <CardItem key={prod.id} product={prod} />
          })}
        </tbody>
      </Table>
    </Container>
  )
}

export default Cart
