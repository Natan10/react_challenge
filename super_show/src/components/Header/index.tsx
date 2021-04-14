import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container } from 'react-bootstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai'

import './index.scss'

const Header = () => {
  return (
    <Navbar className="justify-content-between" expand="lg">
      <Container fluid="md">
        <Link to="/" className="navbar_title">
          Supermercado Show
        </Link>
        <Link to="/cart" style={{ textDecoration: 'none' }}>
          <div className="navbar_cart">
            <div className="navbar_icon_cart">
              <AiOutlineShoppingCart className="icon_cart" size={30} />
              <span className="icon_qtd_cart">5</span>
            </div>
            <span>Meu carrinho</span>
          </div>
        </Link>
      </Container>
    </Navbar>
  )
}

export default Header
