import Container from "@/shared/Container";
import React from "react";
import Image1 from "@/images/UniqueFeatureImg.png";
import Image from "next/image";
import { Josefin_Sans, Lato } from "next/font/google";

const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const UniqueFeatures = () => {
  return (
    <div className="bg-[#F1F0FF] w-full  h-full lgl:h-[579px] flex items-center justify-center">
      <Container className="lgl:h-[550px] py-5 h-full w-full flex flex-col lgl:flex-row items-center justify-around">
        <div className="relative flex items-center justify-center">
          <div className="max-w-full h-auto lgl:hidden">
            <svg
              viewBox="0 0 481 450"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
            >
              <path
                d="M481 232C481 362.339 412.339 450 282 450C151.661 450 0 376.339 0 246C0 115.661 142 -23.9999 251.5 4.00004C361 32 481 101.661 481 232Z"
                fill="#F5E1FC"
              />
            </svg>
          </div>

          <div className="max-w-full h-auto hidden lgl:block">
            <svg
              width="481"
              height="450"
              viewBox="0 0 481 450"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M481 232C481 362.339 412.339 450 282 450C151.661 450 0 376.339 0 246C0 115.661 142 -23.9999 251.5 4.00004C361 32 481 101.661 481 232Z"
                fill="#F5E1FC"
              />
            </svg>
          </div>

          <Image
            src={Image1}
            alt="Image1"
            className="absolute lgl:h-[550px] w-full h-full lgl:w-[509px] left-[40px]"
          />
        </div>
        <div className="lgl:w-[507px] w-full  h-full flex flex-col justify-center px-4 lgl:px-0 mt-6 lgl:mt-0 ">
          <h2
            className={`${josefinFont.className} text-[32px] xsm:text-[35px] leading-[46.2px] tracking-[1.5px]`}
          >
            Unique Features Of leatest & Trending Poducts
          </h2>
          <div className="flex gap-3 items-center py-2 mt-3">
            <span className="w-[11px] h-[11px] rounded-full bg-[#F52B70]" />
            <p
              className={`${lato.className} font-medium text-[14px] leading-[21.2px] tracking-[1.5px] text-[#ACABC3]`}
            >
              All frames constructed with hardwood solids and laminates
            </p>
          </div>
          <div className="flex gap-3 items-center py-2">
            <span className="w-[11px] h-[11px] rounded-full bg-[#2B2BF5]" />
            <p
              className={`${lato.className} font-medium text-[14px] leading-[21.2px] tracking-[1.5px] text-[#ACABC3]`}
            >
              Reinforced with double wood dowels, glue, screw - nails corner
              blocks and machine nails
            </p>
          </div>
          <div className="flex gap-3 items-center py-2">
            <span className="w-[11px] h-[11px] rounded-full bg-[#2BF5CC]" />
            <p
              className={`${lato.className} font-medium text-[14px] leading-[21.2px] tracking-[1.5px] text-[#ACABC3]`}
            >
              Arms, backs and seats are structurally reinforced
            </p>
          </div>
          <div className="flex w-[340px] justify-between mt-6">
            <button
              className={`${josefinFont.className} w-[157px] h-[45px] tracking-[2px]  leading-[19.92px] text-[15px] rounded-[2px] bg-accent text-white`}
            >
              Add To Cart
            </button>
            <div className="hidden xs:flex flex-col justify-center">
              <p
                className={`${josefinFont.className} text-[14px] leading-[16.41px] tracking-[2px] text-[#000000]`}
              >
                B&B Italian Sofa{" "}
              </p>
              <span
                className={`${lato.className}  font-normal text-[14px] leading-[16.8px] text-[#151875] cursor-pointer`}
              >
                $32.00
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UniqueFeatures;
