import React from 'react'
import Image from 'next/image'
import { productDetails } from '@/constants/category'

const ProductCard = () => {
  return (
    <div className='bg-gray-400 border-gray-400 h-10 w-10 flex flex-row m-2'>
      {/* LEFT SECTION: image */}
      <div >
        <Image src={productDetails[0].img} alt={productDetails[0].name} width={20} height={20} />

      </div>
      {/* RIGHT SECTION: details */}
      <div>

      </div>
    </div>
  )
}

export default ProductCard
