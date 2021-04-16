import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addProductsSaga } from '../store/cart/action'
import { toast } from 'react-toastify'

import Header from '../components/Header'
import ShowCart from '../pages/ShowCart'
import ShowProduct from '../pages/ShowProduct'
import ShowProducts from '../pages/ShowProducts'

const Routes = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const loadItems = async () => {
      try {
        await dispatch(addProductsSaga())
      } catch (e) {
        toast.error('Erro ao carregar produtos!')
      }
    }
    loadItems()
  }, [dispatch])

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
