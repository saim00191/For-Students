import React from "react";
import Hero from "@/shared/HeroShared";
import Sort from "@/shared/Sort";
import { IoGrid } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import Partner from "@/shared/Partners";
import Contant from "./Constant";
import image1 from "../../images/contant1.png";
import image2 from "../../images/contant2.png";
import image3 from "../../images/contant3.png";
import image4 from "../../images/contant4.png";
import image5 from "../../images/contant5.png";
import image6 from "../../images/contant6.png";
import image7 from "../../images/contant7.png";

const ShopList = () => {
  return (
    <div>
      <Hero heading="Shop List" tittle="Home . Pages ." text="Shop List" />
      <Sort
        heading="Ecommerce Acceories & Fashion item "
        about="About 9,620 results (0.62 seconds)"
        tittle="Per Page:"
        tittle1="Sort By:"
        tittle2="View:"
        icons={[<IoGrid />, <FaList />]}
      />
      <div className="flex flex-col gap-8">
        <Contant
          tittle="Accumsan tincidunt"
          price="$26.00"
          price1="$52.00"
          image={image1}
        />
        <Contant
          tittle="In nulla"
          price="$26.00"
          price1="$52.00"
          image={image2}
        />
        <Contant
          tittle="Vel sem"
          price="$26.00"
          price1="$52.00"
          image={image3}
        />
        <Contant
          tittle="Porttitor cum"
          price="$26.00"
          price1="$52.00"
          image={image4}
        />
        <Contant
          tittle="Nunc in"
          price="$26.00"
          price1="$52.00"
          image={image5}
        />
        <Contant
          tittle="Vitae facilisis"
          price="$26.00"
          price1="$52.00"
          image={image6}
        />
        <Contant
          tittle="Curabitur lectus"
          price="$26.00"
          price1="$52.00"
          image={image7}
        />
      </div>
      <Partner />
    </div>
  );
};

export default ShopList;
