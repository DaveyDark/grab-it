import { category } from '@/constants/category';
import Link from 'next/link'

const SmallNavbar = () => {
  return (
    <div className='bg-[#ddf2e3] min-h-12 flex flex-row   justify-around'>
      {category.map((item, index) => (
        <div key={index} className='flex flex-row items-center justify-center px-4'>
          <Link href={`/category/${item.tag}`} className='text-sm font-bold text-[#00622A]'> {item.tag}</Link>
        </div>
      ))
      }
    </div >
  );
};

export default SmallNavbar;
