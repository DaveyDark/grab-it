import Navbar from "@/components/navbar/Navbar";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Category from "../components/category/page";
import { category } from "@/constants/category";
import Image from "next/image";

const page = () => {
  return (
    <main>
      <Navbar />
      <section className="min-h-screen bg-navbarGreen flex flex-col justify-between lg:flex-row">
        <div>
          <h1 className="text-[6em] lg:text-[8em] font-bold text-white pt-40 pl-40">
            <span className="text-brandYellow">Grab</span>It
          </h1>
          <p className="text-[2em] lg:text-[3em] font-semibold text-white pl-40">
            Turning Expiry into Opportunity
          </p>
        </div>
        <div className="h-full lg:mt-auto mx-auto mr-auto lg:mb-32 lg:mr-24 aspect-square">
          <div className="bg-green-800 rounded-full p-12 grid place-items-center ml-2">
            <Image
              src="/assets/Landing Page pic1.png"
              width={600}
              height={600}
              alt="A shopping cart"
            />
          </div>
        </div>
      </section>
      <section className="">
        {/* // headline */}
        <div className="flex items-center flex-col">
          <p className="text-6xl mt-12 mb-3 font-bold">
            <span className="text-8xl font-bold text-[#FFB700]">Grab</span>{" "}
            before it&apos;s gone...
          </p>
          <p className="text-4xl font-semibold text-[#A6A6A6] mb-8">
            Unbeatable<span className="text-[#FFB700]"> Discounts</span> on
            exciting ranges of products
          </p>
        </div>

        {/* // section deals */}
        <div className="grid items-center px-32">
          <p className="text-[#FFB700] text-4xl font-semibold  pt-10 px-10 pb-5">
            Now or Never DEALS
          </p>
        </div>

        {/* // carousel */}
        <div className="px-40">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {Array.from({ length: 10 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5">
                  <div className="p-1 grid place-items-center">
                    <Card className="max-h-[200px] h-72 aspect-square bg-[#E0F4E5]">
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-[#00622A]" />
            <CarouselNext className="bg-[#00622A]" />
          </Carousel>
        </div>

        {/* // grocery and kitchen */}
        <div className="grid items-center px-32">
          <p className=" text-3xl font-semibold  pt-10 px-10 pb-5">
            Grocery and Kitchen
          </p>
        </div>

        <div className="flex flex-row gap-3 justify-between mx-36 flex-wrap mb-12">
          {category.map((item, index) => (
            <Category
              key={index}
              img={item.img}
              link={item.link}
              tag={item.tag}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default page;
