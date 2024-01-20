import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  img: string,
  link: string,
  tag: string
}

const Category = ({ img, link, tag }: Props) => {
  return (
    <div className='flex flex-col items-center'>
      <Button className='bg-[#00622A] h-[150px] aspect-square hover:bg-[#19723F] rounded-[40%]' >
        <Image src={img} alt={tag} width={100} height={100} />
        <Link href={link} />
      </Button>
      <p className='font-sans mt-2 font-semibold text-2sm'>{tag}</p>
    </div>
  )
}

export default Category
