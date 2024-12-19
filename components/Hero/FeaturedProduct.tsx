'use client'
import Container from "@/shared/Container";
import React from "react";
import { Josefin_Sans, Lato } from "next/font/google";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { addToCart } from "@/redux/productSlice";
import { addToWishlist } from "@/redux/wishlistSlice";
import { addToSingleProduct } from "@/redux/singleProduct";
import { BsCart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import Image1 from "@/images/Featured1.png";
import Image2 from "@/images/Featured2.png";
import Image3 from "@/images/Featured3.png";
import Image4 from "@/images/Featured4.png";
import { useDispatch } from "react-redux";
import Link from "next/link";

const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const ProductsItem = [
  {title : 'Royal Throne' , image : Image1 , price : 110 , code : 'Y523201', id:101},
  {title : 'Eclipse Swivel' , image : Image2 , price : 140 , code : 'Y523202', id:102},
  {title : 'Odyssey Accent' , image : Image3 , price : 160  , code : 'Y523203', id:103},
  {title : 'Luxe Recliner' , image : Image4 , price : 400 , code : 'Y523204', id:104},
];

const FeaturedProduct = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Container className="py-24 w-full flex flex-col items-center">
        <h2
          className={`${josefinFont.className} text-center pb-6 text-[#1A0B5B] text-[36px] xsm:text-[42px] font-bold leading-[49.22px] tracking-[1.5px]`}
        >
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lgl:grid-cols-4 gap-4">
          {ProductsItem.map((item, index) => (
            <div
              key={index}
              className="w-[270px] h-[370px] flex flex-col  shadow-xl group relative"
            >
              <div className="h-[245px] bg-[#f6f7fb] w-full flex items-center justify-center ">
                <Image
                  src={item.image}
                  alt="Image1"
                  className="w-[178px] h-[178px]"
                />
              </div>
              <button
                className={`${josefinFont.className} rounded-[2px] bg-[#08D15F] hidden group-hover:block absolute top-[212px] left-[95px] w-[94px] h-[29px] text-white text-[12px] font-medium`}
              >
                View Details
              </button>
              <div className="w-[100px] z-50 h-[30px] absolute top-[9px]  left-2 hidden group-hover:flex justify-between items-center">
                <span onClick={() => dispatch(
                  addToCart({
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    image: item.image,
                    quantity: 1,
                  })
                )} className="hover:bg-white rounded-full w-full h-full flex items-center justify-center cursor-pointer">
                  <BsCart size={19} />
                </span>
                <span onClick={() => dispatch(
                  addToWishlist({
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    img: item.image,
                    quantity: 1,
                  })
                )} className="hover:bg-white rounded-full w-full h-full flex items-center justify-center cursor-pointer">
                  <CiHeart size={20} />
                </span>
                <Link href='/productsDetails'  onClick={() => dispatch(
                  addToSingleProduct({
                    id: item.id,
                    title: item.title,
                    newPrice: item.price,
                    image: item.image,
                    quantity: 1,
                  })
                )} className="hover:bg-white rounded-full w-full h-full flex items-center justify-center cursor-pointer">
                  <IoSearch size={19} />
                </Link >
              </div>
              <div className="flex flex-col items-center justify-between h-[125px] py-2 group-hover:bg-[#2F1AC4]">
                <h3
                  className={`${lato.className} font-bold text-[18px] leading-[21.6px] text-accent`}
                >
                 {item.title}
                </h3>
                <div className="w-[52px] h-[4px]  flex items-center justify-between">
                  <span className="w-[14px] h-[4px] rounded-[4px] bg-[#05E6B7]" />
                  <span className="w-[14px] h-[4px] rounded-[4px] bg-[#F701A8]" />
                  <span className="w-[14px] h-[4px] rounded-[4px] bg-[#00009D]" />
                </div>
                <p
                  className={`${josefinFont.className} text-[14px] leading-[16.4px] group-hover:text-white text-[#151875]`}
                >
                  Code - {item.code}
                </p>
                <p
                  className={`${josefinFont.className} text-[14px] leading-[16.4px] group-hover:text-white text-[#151875] font-normal`}
                >
                  ${item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex  my-4 items-center justify-between w-[110px] h-[4px] ">
          <div className="h-[4px] w-[24px] bg-[#Fb2e86] rounded-[4px] cursor-pointer" />
          <div className="h-[4px] w-[24px] bg-[#FEBAd7] rounded-[4px] cursor-pointer" />
          <div className="h-[4px] w-[24px] bg-[#FEBAd7] rounded-[4px] cursor-pointer" />
          <div className="h-[4px] w-[24px] bg-[#FEBAd7] rounded-[4px] cursor-pointer" />
        </div>
      </Container>
    </>
  );
};

export default FeaturedProduct;
