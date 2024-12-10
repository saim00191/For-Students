import Container from "@/shared/Container";
import Image1 from "@/images/CartImg1.png";
import Image2 from "@/images/CartImg2.png";
import Image3 from "@/images/CartImg3.png";
import Image4 from "@/images/CartImg4.png";
import { FaPlus, FaMinus } from "react-icons/fa6";
import Image from "next/image";
import { Josefin_Sans, Lato } from "next/font/google";
import HeroShared from "@/shared/HeroShared";
const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Cart = () => {
  return (
    <>
    <HeroShared heading="Shopping Curt" tittle="Home . Page" text="shopping curt"/>
    <Container className="py-12">
      <div className="w-full h-auto  grid grid-cols-1 lg:grid-cols-6 gap-4">
        <div className="col-span-4 gap-3 ">
          <div className="grid-cols-4 sm:grid-cols-6 grid  overflow-y-scroll">
            <div className="col-span-3  text-[#1D3178] text-[20px] flex flex-col px-2">
              <h2 className={`${josefinFont.className}  px-2`}>Products</h2>
              <div className="mt-8 h-[87px] w-full  flex gap-4">
                <Image src={Image1} alt="Image1" className="w-[83px] h-full " />
                <div className="flex flex-col justify-between h-[87px]">
                  <h4
                    className={`${josefinFont.className} text-[14px] text-black leading-[16.41px]`}
                  >
                    Ut diam consequat
                  </h4>
                  <p
                    className={`${josefinFont.className} text-[14px] text-[#A1A8C1] leading-[16.41px]`}
                  >
                    Color: Brown
                  </p>
                  <p
                    className={`${josefinFont.className} text-[14px] text-[#A1A8C1] leading-[16.41px]`}
                  >
                    Size: XL
                  </p>
                </div>
              </div>
              <div className="mt-8 h-[87px] w-full  flex gap-4">
                <Image src={Image2} alt="Image2" className="w-[83px] h-full " />
                <div className="flex flex-col justify-between h-[87px]">
                  <h4
                    className={`${josefinFont.className} text-[14px] text-black leading-[16.41px]`}
                  >
                    Ut diam consequat
                  </h4>
                  <p
                    className={`${josefinFont.className} text-[14px] text-[#A1A8C1] leading-[16.41px]`}
                  >
                    Color: Brown
                  </p>
                  <p
                    className={`${josefinFont.className} text-[14px] text-[#A1A8C1] leading-[16.41px]`}
                  >
                    Size: XL
                  </p>
                </div>
              </div>
              <div className="mt-8 h-[87px] w-full  gap-4 flex">
                <Image src={Image3} alt="Image3" className="w-[83px] h-full " />
                <div className="flex flex-col justify-between h-[87px]">
                  <h4
                    className={`${josefinFont.className} text-[14px] text-black leading-[16.41px]`}
                  >
                    Ut diam consequat
                  </h4>
                  <p
                    className={`${josefinFont.className} text-[14px] text-[#A1A8C1] leading-[16.41px]`}
                  >
                    Color: Brown
                  </p>
                  <p
                    className={`${josefinFont.className} text-[14px] text-[#A1A8C1] leading-[16.41px]`}
                  >
                    Size: XL
                  </p>
                </div>
              </div>
              <div className="mt-8 h-[87px] w-full gap-4 flex">
                <Image src={Image4} alt="Image4" className="w-[83px] h-full " />
                <div className="flex flex-col justify-between h-[87px]">
                  <h4
                    className={`${josefinFont.className} text-[14px] text-black leading-[16.41px]`}
                  >
                    Ut diam consequat
                  </h4>
                  <p
                    className={`${josefinFont.className} text-[14px] text-[#A1A8C1] leading-[16.41px]`}
                  >
                    Color: Brown
                  </p>
                  <p
                    className={`${josefinFont.className} text-[14px] text-[#A1A8C1] leading-[16.41px]`}
                  >
                    Size: XL
                  </p>
                </div>
              </div>
            </div>
            <div className="h-[500px] hidden   text-[#1D3178] text-[20px] sm:flex flex-col ">
              <h2 className={`${josefinFont.className}`}>Price</h2>
              <div className="flex-col flex gap-[106px] mt-16">
                <p
                  className={`${josefinFont.className} text-[14px] text-[#A1A8C1] leading-[16.41px]`}
                >
                  $300
                </p>
                <p
                  className={`${josefinFont.className} text-[14px] text-[#A1A8C1] leading-[16.41px]`}
                >
                  $300
                </p>
                <p
                  className={`${josefinFont.className} text-[14px] text-[#A1A8C1] leading-[16.41px]`}
                >
                  $300
                </p>
                <p
                  className={`${josefinFont.className} text-[14px] text-[#A1A8C1] leading-[16.41px]`}
                >
                  $300
                </p>
              </div>
            </div>
            <div className="h-[500px]  text-[#1D3178] text-[20px] flex flex-col ">
              <h2 className={`${josefinFont.className}`}>Quality</h2>
              <div className="flex mt-16 flex-col gap-[106px]">
                <div className="w-[51px] h-[15px] flex justify-between items-center bg-[#BEBFC2] rounded-sm">
                  <FaMinus
                    size={12}
                    className="hover:bg-white h-full rounded-sm cursor-pointer"
                  />
                  <p
                    className={`${josefinFont.className} text-[18px] mt-0.5 text-white leading-[16.41px]`}
                  >
                    1
                  </p>
                  <FaPlus
                    size={12}
                    className="hover:bg-white h-full rounded-sm cursor-pointer"
                  />
                </div>
                <div className="w-[51px] h-[15px] flex justify-between items-center bg-[#BEBFC2] rounded-sm">
                  <FaMinus
                    size={12}
                    className="hover:bg-white h-full rounded-sm cursor-pointer"
                  />
                  <p
                    className={`${josefinFont.className} text-[18px] mt-0.5 text-white leading-[16.41px]`}
                  >
                    1
                  </p>
                  <FaPlus
                    size={12}
                    className="hover:bg-white h-full rounded-sm cursor-pointer"
                  />
                </div>
                <div className="w-[51px] h-[15px] flex justify-between items-center bg-[#BEBFC2] rounded-sm">
                  <FaMinus
                    size={12}
                    className="hover:bg-white h-full rounded-sm cursor-pointer"
                  />
                  <p
                    className={`${josefinFont.className} text-[18px] mt-0.5 text-white leading-[16.41px]`}
                  >
                    1
                  </p>
                  <FaPlus
                    size={12}
                    className="hover:bg-white h-full rounded-sm cursor-pointer"
                  />
                </div>
                <div className="w-[51px] h-[15px] flex justify-between items-center bg-[#BEBFC2] rounded-sm">
                  <FaMinus
                    size={12}
                    className="hover:bg-white h-full rounded-sm cursor-pointer"
                  />
                  <p
                    className={`${josefinFont.className} text-[18px] mt-0.5 text-white leading-[16.41px]`}
                  >
                    1
                  </p>
                  <FaPlus
                    size={12}
                    className="hover:bg-white h-full rounded-sm cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div className=" h-[500px] text-[#1D3178] hidden text-[20px] sm:flex flex-col ">
              <h2 className={`${josefinFont.className}`}>Total</h2>
              <div className="flex mt-16 flex-col gap-[100px]">
                <p
                  className={`${josefinFont.className} text-[14px] text-[#15245E]`}
                >
                  £219.00
                </p>
                <p
                  className={`${josefinFont.className} text-[14px] text-[#15245E]`}
                >
                  £219.00
                </p>
                <p
                  className={`${josefinFont.className} text-[14px] text-[#15245E]`}
                >
                  £219.00
                </p>
                <p
                  className={`${josefinFont.className} text-[14px] text-[#15245E]`}
                >
                  £219.00
                </p>
                <p
                  className={`${josefinFont.className} text-[14px] text-[#15245E]`}
                >
                  £219.00
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center w-full mt-8 px-2 sm:px-0">
            <button
              className={`${josefinFont.className} bg-[#FB2E86] w-[134px] h-[39px] rounded-[2px] text-[16px] text-white`}
            >
              Update Curt
            </button>
            <button
              className={`${josefinFont.className} bg-[#FB2E86] w-[134px] h-[39px] rounded-[2px] text-[16px] text-white`}
            >
              Clear Curt
            </button>
          </div>
        </div>
        <div className="  col-span-2  items-center justify-center gap-8 flex flex-col">
          <div className="flex flex-col items-center justify-center">

          <h2
            className={`${josefinFont.className} text-[20px] leading-[23.44px] text-center`}
          >
            Cart Totals
          </h2>
          <div className="sm:w-[371px] h-[284px]  bg-[#F4F4FC] py-12">
            <div className="justify-between flex  px-4 border-b-2 py-3">
              <p
                className={`${lato.className} font-semibold text-[18px] text-[#1D3178]`}
              >
                Subtotals:
              </p>
              <p
                className={`${lato.className} font-normal text-[16px] text-[#15245E]`}
              >
                £219.00
              </p>
            </div>
            <div className="justify-between flex  px-4 border-b-2 py-5">
              <p
                className={`${lato.className} font-semibold text-[18px] text-[#1D3178]`}
              >
                Total:
              </p>
              <p
                className={`${lato.className} font-normal text-[16px] text-[#15245E]`}
              >
                £219.00
              </p>
            </div>
            <div className="flex gap-1 items-center px-4  py-5">
              <span className="h-2 w-2 bg-[#19D16F] rounded-full" />
              <p
                className={`${lato.className} font-normal text-[12px] text-[#8A91AB]`}
              >
                Shipping & taxes calculated at checkout
              </p>
            </div>
            <div className="flex items-center justify-center">
              <button
                className={`${lato.className} font-bold text-white text-[14px] bg-[#19D16F] w-[312px] h-[40px]`}
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
          </div>
          <div className="flex flex-col items-center justify-center">

          <h2
            className={`${josefinFont.className} text-[20px] leading-[23.44px] text-center`}
          >
            Calculate Shopping
          </h2>
          <div className="w-[312px]  sm:w-[371px] px-4  ">
            <div className="flex flex-col items-center justify-center px-4 py-6">
              <input
                type="text"
                className={`${josefinFont.className} outline-none bg-transparent border-b w-full py-3 placeholder:text-[#C5CBE3]`}
                placeholder="Bangladesh"
              />
              <input
                type="text"
                className={`${josefinFont.className} outline-none mt-6 bg-transparent border-b w-full py-3 placeholder:text-[#C5CBE3]`}
                placeholder="Mirpur Dhaka - 1200"
              />
              <input
                type="text"
                className={`${josefinFont.className} outline-none mt-6 bg-transparent border-b w-full py-3 placeholder:text-[#C5CBE3]`}
                placeholder="Postal Code"
              />
            </div>
            <button
              className={`${josefinFont.className} ml-4 w-[179px] h-[41px] bg-accent text-white text-[16px] `}
            >
              Calculate Shiping
            </button>
          </div>
          </div>
        </div>
      </div>
    </Container>
    </>
  );
};

export default Cart;
