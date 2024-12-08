
import React from 'react'
import ProductsDetails from './ProductDetails'
import ProductsDetailsP2 from './ProductsDetailsP2'
import ProductsDetailsP3 from './ProductsDetailsP3'
import Partners from './Partners'

const Home = () => {
  return (
      <div>
          <ProductsDetails/>
      <ProductsDetailsP2 />
      <ProductsDetailsP3 />
      <Partners/>
    </div>
  )
}

export default Home