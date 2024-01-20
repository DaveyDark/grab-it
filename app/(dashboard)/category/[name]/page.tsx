import Navbar from "@/components/navbar/Navbar";
import SmallNavbar from "@/components/smallNavbar/page";
import ProductCard from "@/components/productCard/page"; // Corrected import path
import React from "react";
import { productDetails } from "@/constants/category"; // Assuming this is the correct import path
import { getProducts } from "@/lib/actions/product.action";

const Products = async ({ params }: any) => {
  const productDetails = await getProducts({ category: params.name });
  return (
    <div className="bg-[#F6FFF6] min-h-screen">
      <Navbar />
      <SmallNavbar />
      <div className="flex flex-row flex-wrap px-32 pt-20 justify-center">
        {productDetails.map((product, index) => (
          <ProductCard
            key={index}
            _id={product._id}
            img={product.image}
            name={product.name}
            weight={product.weight}
            expiring={product.expiry}
            originalPrice={product.mrp}
            discountedPrice={product.discountedPrice}
            link={product.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
