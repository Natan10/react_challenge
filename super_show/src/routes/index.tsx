import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Cart from '../components/Cart'
import Header from '../components/Header'
// import ProductDetail from '../components/ProductDetail'
// import Products from '../components/Products'
import api from '../services/api'

const Routes = () => {
  useEffect(() => {
    const getItems = async () => {
      try {
        console.log(process.env.REACT_APP_API_URL)
        const { data } = await api.get('')
        console.log(data)
      } catch (e) {
        console.log(e)
      }
    }
    getItems()
  }, [])

  return (
    <Router>
      <Header />
      <Switch>
        {/* <Route exact path="/" component={Products} /> */}
        <Route exact path="/" component={Cart} />
      </Switch>
    </Router>
  )
}
export default Routes
