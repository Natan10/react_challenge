import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai'

import './index.scss'

const Header = () => {
  return (
    <Navbar className="justify-content-between" expand="lg">
      <Container fluid="md">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Brand href="#home">
          <div className="navbar_cart">
            <div className="navbar_icon_cart">
              <AiOutlineShoppingCart className="icon_cart" size={30} />
              <span className="icon_qtd_cart">5</span>
            </div>
            <span>Meu carrinho</span>
          </div>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}
// #C23728
export default Header
