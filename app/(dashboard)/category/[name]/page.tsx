import Navbar from '@/components/navbar/Navbar';
import SmallNavbar from '@/components/smallNavbar/page';
import ProductCard from '@/components/productCard/page'; // Corrected import path
import React from 'react';
import { productDetails } from '@/constants/category'; // Assuming this is the correct import path

const Products = () => {
  return (
    <div className='bg-[#F6FFF6] min-h-screen'>
      <Navbar />
      <SmallNavbar />
      <div className='flex flex-row flex-wrap px-32 pt-20 justify-center'>
        {productDetails.map((product, index) => (
          <ProductCard
            key={index} // Added key attribute for list rendering
            img={product.img}
            name={product.name}
            weight={product.weight}
            expiring={product.expiring}
            originalPrice={product.originalPrice}
            discountedPrice={product.discountedPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
