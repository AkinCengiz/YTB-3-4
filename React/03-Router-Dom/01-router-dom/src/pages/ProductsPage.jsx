import React from 'react'
import ProductTitle from '../components/product/ProductTitle'
import ProductDetails from '../components/product/ProductDetails'

function ProductsPage({fullname,setFullName}) {
  return (
    <>
        <ProductTitle fullname={fullname} />
        <ProductDetails setFullName={setFullName} />
    </>
  )
}

export default ProductsPage