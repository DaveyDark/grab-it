import React from 'react'
import Product from '@/components/Product/page'
import Navbar from '@/components/navbar/Navbar'
import SmallNavbar from '@/components/smallNavbar/page'

const ProductDescription = ({ params }: any) => {
  return (
    <div>
      <Navbar />
      <SmallNavbar />
      <Product id={params.id} />
    </div>
  )
}

export default ProductDescription
