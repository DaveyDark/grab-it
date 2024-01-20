import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Logo from "@/public/assets/logo.png";
import Cart from "@/public/assets/cart.png";
import Search from "@/public/assets/search.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-20 bg-navbarGreen p-4 sticky top-0">
      <div className="flex items-center">
        <Image src={Logo} height={50} width={50} className="mr-4" alt="Logo" />
        <p className="text-white text-2xl font-semibold font-sans">
          <span className="text-brandYellow">Grab</span>It
        </p>
      </div>
      <div className="flex flex-row bg-[#1C7341] rounded-full w-[30%]">
        <Image
          src={Search}
          height={20}
          width={20}
          className="object-contain ml-3"
          alt="Search"
        />
        <Input
          placeholder="Search the product"
          className="bg-transparent border-none placeholder:text-light-400 no-focus text-white"
        />
      </div>

      <div className="flex items-center space-x-4">
        <SignedIn>
          <Button
            variant="outline"
            className="ml-4 rounded-full bg-[#19723F] border-none group"
          >
            <Image
              src={Cart}
              height={20}
              width={20}
              className="m-2 group-hover:invert"
              alt="Cart"
            />
            <Link
              href="/cart"
              className="text-white text-[12px] m-2 group-hover:text-[#19723F]"
            >
              My Cart
            </Link>
          </Button>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <Button
            variant="outline"
            className="ml-4 bg-[#FFB700] border-none rounded-full"
          >
            <Link href="/sign-up" className="text-[#00622A] font-bold">
              Sign Up
            </Link>
          </Button>
          <Button
            /* variant="outline" */ className="ml-4 bg-navbarButton text-white rounded-full"
          >
            <Link href="/sign-in" className="font-bold">
              Become a Seller
            </Link>
          </Button>
        </SignedOut>
      </div>
    </div>
  );
};

export default Navbar;
