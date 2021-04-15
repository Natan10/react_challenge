import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import ShowCart from '../pages/ShowCart'
import ShowProduct from '../pages/ShowProduct'
import ShowProducts from '../pages/ShowProducts'

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={ShowProducts} />
        <Route exact path="/product/:id" component={ShowProduct} />
        <Route exact path="/cart" component={ShowCart} />
      </Switch>
    </Router>
  )
}
export default Routes
