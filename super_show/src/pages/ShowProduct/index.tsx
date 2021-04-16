import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProductDetail from '../../components/ProductDetail'
import Header from '../../components/Header'

const ShowProduct = () => {
  const [productData, setProductData] = useState<any>([])
  const params: any = useParams()
  const { cartState } = useSelector((state): any => state)

  useEffect(() => {
    const prod = cartState.products.filter(
      (product: any) => product.id === parseInt(params.id)
    )
    setProductData(prod[0])
  }, [params, cartState])

  return (
    <>
      <Header />
      <ProductDetail product={productData} />
    </>
  )
}

export default ShowProduct
