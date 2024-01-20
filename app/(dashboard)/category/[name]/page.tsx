import Navbar from '@/components/navbar/Navbar'
import SmallNavbar from '@/components/navbar/smallNavbar/page'
import ProductCard from '@/components/productCard/page'
import React from 'react'

const Products = ({ params }: any) => {
  return (
    <div className='bg-[#F6FFF6] min-h-screen'>
      <Navbar />
      <SmallNavbar />
      <div className='flex flex-row flex-wrap px-32 pt-20 justify-center'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default Products
