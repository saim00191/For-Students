import Container from '@/shared/Container'
import React from 'react'
import { Josefin_Sans } from "next/font/google";
import Image from 'next/image';
import Image1 from '@/images/TopCategoryImg1.png'
import Image2 from '@/images/TopCategoryImg2.png'
import Image3 from '@/images/TopCategoryImg3.png'

const josefinFont = Josefin_Sans({
    subsets: ["latin"],
    weight: ["400", "700"],
  });

const TopCategories = () => {
  return (
      <Container className='py-12 flex justify-center flex-col w-full item-center'>
          <h2
        className={`${josefinFont.className} text-center text-[42px] leading-[49px] text-[#151875]`}
      >
        Top Categories
          </h2>
      <div className='flex items-center justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-[25px] mt-8'>
        <div className='w-[269px] h-[345px] '>
            <div className='relative'>
            <div className='flex items-center justify-center h-[269px] w-[269px] bg-[#F6F7FB] rounded-full group'>
                <Image src={Image1} alt='Image1' />
                <div className='h-[269px] w-[269px] bg-[#9877E7] hidden group-hover:block absolute right-2 top-2 -z-10 rounded-full'/>
          </div>
         </div>
          <div className='h-[50px] w-full flex flex-col items-center gap-1 mt-5'>
              <p className={`${josefinFont.className} text-[#151875] font-normal text-[20px] leading-[20px]`}>Mini LCW Chair</p>
              <p className={`${josefinFont.className} text-[#151875] font-normal text-[16px] leading-[16px]`}>$56.00</p>
                  </div>
                </div>
        <div className='w-[269px] h-[345px] '>
            <div className='relative'>
            <div className='flex items-center justify-center h-[269px] w-[269px] bg-[#F6F7FB] rounded-full group'>
                <Image src={Image2} alt='Image1' />
                <div className='h-[269px] w-[269px] bg-[#9877E7] hidden group-hover:block absolute right-2 top-2 -z-10 rounded-full'/>
          </div>
         </div>
          <div className='h-[50px] w-full flex flex-col items-center gap-1 mt-5'>
              <p className={`${josefinFont.className} text-[#151875] font-normal text-[20px] leading-[20px]`}>Mini LCW Chair</p>
              <p className={`${josefinFont.className} text-[#151875] font-normal text-[16px] leading-[16px]`}>$56.00</p>
                  </div>
                </div>
        <div className='w-[269px] h-[345px] '>
            <div className='relative'>
            <div className='flex items-center justify-center h-[269px] w-[269px] bg-[#F6F7FB] rounded-full group'>
                <Image src={Image3} alt='Image1' />
                <div className='h-[269px] w-[269px] bg-[#9877E7] hidden group-hover:block absolute right-2 top-2 -z-10 rounded-full'/>
          </div>
         </div>
          <div className='h-[50px] w-full flex flex-col items-center gap-1 mt-5'>
              <p className={`${josefinFont.className} text-[#151875] font-normal text-[20px] leading-[20px]`}>Mini LCW Chair</p>
              <p className={`${josefinFont.className} text-[#151875] font-normal text-[16px] leading-[16px]`}>$56.00</p>
                  </div>
                </div>
        <div className='w-[269px] h-[345px] '>
            <div className='relative'>
            <div className='flex items-center justify-center h-[269px] w-[269px] bg-[#F6F7FB] rounded-full group'>
                <Image src={Image1} alt='Image1' />
                <div className='h-[269px] w-[269px] bg-[#9877E7] hidden group-hover:block absolute right-2 top-2 -z-10 rounded-full'/>
          </div>
         </div>
          <div className='h-[50px] w-full flex flex-col items-center gap-1 mt-5'>
              <p className={`${josefinFont.className} text-[#151875] font-normal text-[20px] leading-[20px]`}>Mini LCW Chair</p>
              <p className={`${josefinFont.className} text-[#151875] font-normal text-[16px] leading-[16px]`}>$56.00</p>
                  </div>
                </div>

          </div>
         </div>
    </Container>
  )
}

export default TopCategories