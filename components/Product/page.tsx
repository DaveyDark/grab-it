import React from "react";
import { productDetails } from "@/constants/category";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Product = ({ id }: { id: string }) => {
  return (
    <div className="flex max-w-full p-20 border min-h-screen mx-20 my-20 flex-row">
      <div className="mr-48">
        <Image
          src={productDetails[0].img}
          alt="product"
          width={800}
          height={800}
        />
      </div>
      <div className="flex flex-col w-full pr-10 ">
        <p className="text-xl text-[#60454E]">
          Home/Chips/
          <span className="text-[#7F7A7A]">{productDetails[0].name}</span>
        </p>
        <p className="text-5xl font-bold">{productDetails[0].name}</p>
        <p className="text-2xl my-3">Shell Life left</p>
        <p className="text-2xl my-3 text-[#10622A]">View All by Haldirams</p>
        <p className="text-sm text-gray-500">{productDetails[0].weight}</p>
        <p className="text-sm text-red-600">{productDetails[0].expiring}</p>
        <div className="flex flex-row justify-between ">
          <div className="flex gap-3">
            <del className="text-sm text-gray-500">
              {productDetails[0].originalPrice}
            </del>
            <p className="text-sm text-[#10622A]">
              {productDetails[0].discountedPrice}
            </p>
          </div>
          <Button className="ml-auto border border-[#00622A] bg-transparent text-[#00622A] rounded-full px-5 py-1">
            ADD
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
