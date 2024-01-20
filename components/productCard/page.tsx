import React from "react";
import Image from "next/image";
import { productDetails } from "@/constants/category";
import { Button } from "../ui/button";
import Link from "next/link";

interface ProductDetails {
  _id: string;
  img: string;
  name: string;
  weight: string;
  expiring: string;
  originalPrice: string;
  discountedPrice: string;
  link: string;
}

const ProductCard = ({
  _id,
  img,
  name,
  weight,
  expiring,
  originalPrice,
  discountedPrice,
}: ProductDetails) => {
  return (
    <div className=" border border-[#EBE8E4] min-h-44 min-w-80 flex flex-row m-2 border-solid bg-white rounded-xl">
      {/* LEFT SECTION: image */}
      <div className="grid place-items-center p-5">
        <Image src={img.toString()} alt={name} width={200} height={200} />
      </div>
      {/* RIGHT SECTION: details */}
      <div className="flex flex-col w-full pr-10 pt-10">
        <p className="text-3sm font-bold">{productDetails[0].name}</p>
        <Link className="text-3sm font-bold" href={`/product/{_id}`}>
          {productDetails[0].name}
        </Link>
        <p className="text-sm text-gray-500">{productDetails[0].weight}</p>
        <p className="text-sm text-red-600">{productDetails[0].expiring}</p>
        <div className="flex flex-row justify-between ">
          <div className="flex gap-3">
            <del className="text-sm text-gray-500">
              {productDetails[0].originalPrice}
            </del>
            <p className="text-sm">{productDetails[0].discountedPrice}</p>
          </div>
          <Button className="ml-auto border border-[#00622A] bg-transparent text-[#00622A] rounded-full px-5 py-1">
            ADD
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
