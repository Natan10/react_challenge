import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container } from 'react-bootstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai'

import logo from '../../assets/LOGO-white.png'
import './index.scss'
import { useSelector } from 'react-redux'

const Header = () => {
  const { cartReducer } = useSelector((state): any => state)
  return (
    <Navbar className="justify-content-between" expand="lg">
      <Container fluid="md">
        <Link to="/" className="navbar_title">
          <img src={logo} alt="" />
        </Link>
        <Link to="/cart" style={{ textDecoration: 'none' }}>
          <div className="navbar_cart">
            <div className="navbar_icon_cart">
              <AiOutlineShoppingCart className="icon_cart" size={30} />
              {cartReducer.cart.length > 0 && (
                <span className="icon_qtd_cart">{cartReducer.cart.length}</span>
              )}
            </div>
            <span>Meu carrinho</span>
          </div>
        </Link>
      </Container>
    </Navbar>
  )
}

export default Header
