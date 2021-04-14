import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from '../components/Header'
import ProductDetail from '../components/ProductDetail'
// import Products from '../components/Products'

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        {/* <Route exact path="/" component={Products} /> */}
        <Route exact path="/" component={ProductDetail} />
      </Switch>
    </Router>
  )
}
export default Routes
