import React from "react";
import HeaderTop from "./HeaderTop";
import Container from "@/shared/Container";
import { CiSearch } from "react-icons/ci";
import { Josefin_Sans, Lato } from "next/font/google";

const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const HeaderNavItems = ["Pages", "Products", "Blogs", "Shop", "Contact"];

const Header = () => {
  return (
    <>
      <HeaderTop />
      <div className="bg-white w-full h-[60px] lg:flex items-center">
        <Container className="lg:flex-1">
          <div className="h-[40px]  flex lg:items-center justify-start md:justify-between">
            <div className="lg:flex lg:items-center  lg:gap-20">
              <h2
                className={`${josefinFont.className} mt-2 lg:mt-0 font-bold text-[34px] leading-[34px] text-[#0D0E43]`}
              >
                Hekto
              </h2>
              <div className="lg:flex gap-10 hidden">
                <div className="flex items-center gap-0.5 hover:text-[#FB2E86] cursor-pointer">
                  <p
                    className={`${lato.className} font-normal text-[16px] leading-[20px] hover:text-[#FB2E86] cursor-pointer`}
                  >
                    Home
                  </p>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 4.5L6 8.5L10 4.5"
                      stroke="#0D0E43"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                {HeaderNavItems.map((item, index) => (
                  <p
                    key={index}
                    className={`${lato.className} font-normal text-[16px] leading-[20px] hover:text-[#FB2E86] cursor-pointer`}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="w-[317px] h-[40px] hidden md:flex items-center   border border-[#E7E6EF]">
              <input
                type="text"
                className="w-[266px] h-full outline-none bg-transparent px-2"
              />
              <button className="w-[51px] flex items-center justify-center h-full border-l hover:text-white border-[#E7E6EF] hover:bg-[#Fb2E86]">
                <CiSearch size={24} />
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
