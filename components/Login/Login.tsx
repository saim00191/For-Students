import Container from "@/shared/Container";
import React from "react";
import Image1 from "@/images/Partners.png";
import { Josefin_Sans, Lato } from "next/font/google";
import Image from "next/image";
import Hero from '@/shared/HeroShared'
const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Login = () => {
  return (
    <>
    <Hero heading="My Account" tittle="Home . Page" text="My Account"/>
    <Container className="py-12">
      <div className="flex items-center justify-center">
        <div className="w-full max-w-[544px] h-[474px] mt-16 px-4 shadow-xl flex items-center justify-center">
          <div className="w-full max-w-[433px] h-[374px] flex flex-col justify-between items-center">
            <h2
              className={`${josefinFont.className} text-[32px] leading-[37.5px] text-black text-center`}
            >
              Login
            </h2>
            <p
              className={`${lato.className} font-normal text-[17px] leading-[20.4px] text-[#9096B2] text-center`}
            >
              Please login using account detail below.
            </p>
            <input
              type="text"
              className={`${lato.className} w-full h-[52px] border border-[#C2C5E1] rounded-[2px] text-[16px] outline-none bg-transparent px-3 leading-[19.2px] text-[#9096B2] mt-4`}
              placeholder="Email Address"
            />
            <input
              type="text"
              className={`${lato.className} w-full h-[52px] border border-[#C2C5E1] rounded-[2px] text-[16px] outline-none bg-transparent px-3 leading-[19.2px] text-[#9096B2] mt-4`}
              placeholder="Password"
            />
            <div className="w-full flex justify-start">
              <p
                className={`${lato.className} text-[#9096B2] text-[17px] font-normal leading-[20.4px] cursor-pointer mt-2`}
              >
                Forgot your password?
              </p>
            </div>
            <button
              className={`${lato.className} w-full h-[47px] font-bold text-[17px] leading-[20.4px] bg-accent text-white mt-4`}
            >
              Sign In
            </button>
            <p
              className={`${lato.className} text-[#9096B2] text-[17px] font-normal leading-[20.4px] cursor-pointer mt-4`}
            >
              Dont have an Account? Create account
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pt-40">
        <Image src={Image1} alt="Image1" className="w-[904px]" />
      </div>
    </Container>
    </>
  );
};

export default Login;
