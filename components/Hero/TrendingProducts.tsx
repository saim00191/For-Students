import Container from '@/shared/Container'
import { Josefin_Sans, Lato } from 'next/font/google';
import Image1 from '@/images/TrendingProducImg1.png'
import Image2 from '@/images/TrendingProductImg2.png'
import Image3 from '@/images/TrendingProductImg3.png'
import Image4 from '@/images/TrendingProductImg4.png'
import Image from 'next/image';
const josefinFont = Josefin_Sans({
    subsets: ["latin"],
    weight: ["400", "700"],
  });
  const lato = Lato({
    subsets: ["latin"],
    weight: ["400", "700"],
  });

  const Images = [Image1 , Image2 , Image3 , Image4 ]
const TrendingProducts = () => {
  return (
      <Container className='py-12 flex flex-col items-center justify-center'>
         <h2
          className={`${josefinFont.className} text-center pb-6 text-[#1A0B5B] text-[42px] font-bold leading-[49.22px] tracking-[1.5px]`}
        >
          Trending Products
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-6'>
              {Images.map((item, index) => (
                  <div key={index} className='h-[350px] w-[270px] shadow-xl  flex flex-col items-center '>
                  <div className='h-[244px] w-[247px] flex items-center justify-center'>
                      <Image src={item} alt='Product'/>
                  </div>
                  <div className='h-[115px] w-[247px] flex flex-col items-center justify-center '>
                        <h2 className={`${lato.className} font-bold text-[16px] leading-[25.6px] text-center text-[#151875]`}>Cantilever chair</h2>
                      <div className='flex items-center gap-3 mt-2'>
                      <p className={`${lato.className} font-normal text-[14px] leading-[14.6px] text-center text-[#151875]`}>$26.00 </p>
                      <p className={`${lato.className} font-normal text-[14px] leading-[14.6px] text-center line-through text-[#1518754D]`}>$42.00</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
    </Container>
  )
}

export default TrendingProducts