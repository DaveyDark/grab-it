import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const page = () => {
  return (
    <section>

      <Navbar />

      <div className='flex items-center flex-col bg-gray-500 '>
        <p className='text-6xl my-5'><span className='text-8xl font-bold text-[#FFB700]'>Grab</span> before it's gone</p>
        <p>Unbeatable<span> Discounts</span> on exciting ranges of products</p>
      </div>

    </section>

  )
}

export default page
