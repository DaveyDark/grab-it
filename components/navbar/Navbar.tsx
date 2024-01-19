import React from 'react'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Logo from '@/public/assets/Logo.png'
import Link from 'next/link'


const Navbar = () => {
  return (
    < div className='flex items-center justify-between h-20 bg-navbarGreen p-4' >
      <div className='flex items-center'>
        <Image src={Logo} height={50} width={50} className='mr-4' />
        <p className='text-white text-2xl font-semibold'>Grab It</p>
      </div>

      <div className='flex items-center space-x-4'>

        <SignedIn>
          <Button variant="outline" className='ml-4'>My Cart</Button>
          <Input placeholder='Search the product' />
          <UserButton className='ml-4' />
        </SignedIn>

        <SignedOut>
          <Input placeholder='Search the product' />
          <Button variant="outline" className='ml-4 bg-[#FFB700] border-none rounded-full'>
            <Link href="/sign-up" className='text-[#00622A] font-bold'>Sign Up</Link>
          </Button>
          <Button /* variant="outline" */ className='ml-4 bg-navbarButton text-white rounded-full'>
            <Link href="/sign-in" className='font-bold'>Become a Seller</Link>
          </Button>
        </SignedOut>

      </div>
    </div >
  )
}

export default Navbar
