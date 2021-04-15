/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProductDetail from '../../components/ProductDetail'

const ShowProduct = () => {
  const [productData, setProductData] = useState<any>([])
  const params: any = useParams()
  const { cartReducer } = useSelector((state): any => state)

  useEffect(() => {
    const prod = cartReducer.products.filter(
      (product: any) => product.id === parseInt(params.id)
    )
    setProductData(prod[0])
  }, [params, cartReducer])
  console.log(productData)

  return <ProductDetail product={productData} />
}

export default ShowProduct
