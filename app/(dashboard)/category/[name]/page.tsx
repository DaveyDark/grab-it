import Navbar from '@/components/navbar/Navbar'
import SmallNavbar from '@/components/navbar/smallNavbar/page'
import ProductCard from '@/components/productCard/page'
import React from 'react'

const Products = ({ params }: any) => {
  return (
    <div>
      <Navbar />
      <SmallNavbar />
      <div className='flex flex-row flex-wrap px-36 pt-36'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default Products
