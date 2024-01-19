import React from 'react'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <div className='flex flex-row items-center h-36 bg-green-600'>
      {/* <Image /> */}

      <Input />

      <Button variant="outline">My Cart</Button>
      <UserButton />
    </div>
  )
}

export default Navbar
