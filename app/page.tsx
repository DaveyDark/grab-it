import Navbar from "@/components/navbar/Navbar";
import React from "react";

const page = () => {
  return (
    <section>
      <Navbar />

      <div className="flex items-center flex-col bg-gray-100 ">
        <p className="text-6xl mt-16 mb-5 font-bold">
          <span className="text-8xl font-bold text-[#FFB700]">Grab</span> before
          it&apos;s gone...
        </p>
        <p className="text-4xl font-semibold text-[#A6A6A6] mb-5">
          Unbeatable<span className="text-[#FFB700]"> Discounts</span> on
          exciting ranges of products
        </p>
      </div>
    </section>
  );
};

export default page;
