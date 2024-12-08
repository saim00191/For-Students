import Container from "@/shared/Container";
import React from "react";
import { EmailAndPhone, HeaderTopItems } from "./HeaderTopItems";
import { Josefin_Sans } from "next/font/google";
const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const HeaderTop = () => {
  return (
    <div className="bg-violet h-auto md:h-[44px] flex items-center">
      <Container className="w-full h-full py-4 md:py-0 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col xs:flex-row gap-2 xs:gap-8 items-center">
          {EmailAndPhone.map((item, index) => (
            <div key={index} className="flex gap-1.5 items-center">
              {item.icon}
              <p
                className={`${josefinFont.className} font-semibold text-[16px] leading-[16px] text-[#f1f1f1]`}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
        <div className="hidden xs:flex w-full md:w-[380px] mt-4 md:mt-0 items-center justify-between ">
          {HeaderTopItems.map((item, index) => (
            <div
              key={index}
              className="flex gap-1 items-center cursor-pointer px-1"
            >
              <p
                className={`${josefinFont.className} flex gap-1 items-center font-semibold text-[16px] leading-[16px] text-[#f1f1f1]`}
              >
                {item.title}
              </p>
              <span className="-mt-1"> {item.icon}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default HeaderTop;
