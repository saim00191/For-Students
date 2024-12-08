import Container from "@/shared/Container";
import React from "react";

const Cart = () => {
  return (
    <Container className="py-12">
      <div className="w-full h-[500px] bg-red-400 grid grid-cols-6 gap-5">
        <div className="col-span-4 gap-3 ">
          <div className="grid-cols-6 grid">
                      <div className="col-span-3 bg-slate-700 text-[#1D3178] text-[20px] flex flex-col items-center">
                          <h2 className="text-[#1D3178] text-[20px] "></h2>
            </div>
            <div className="bg-slate-200 h-[500px] text-[#1D3178] text-[20px] flex flex-col items-center">Price</div>
            <div className="bg-red-950 h-[500px] text-[#1D3178] text-[20px] flex flex-col items-center">Quantity</div>
            <div className="bg-slate-500 h-[500px] text-[#1D3178] text-[20px] flex flex-col items-center">Total</div>
          </div>
        </div>
        <div className="col-span-2 bg-green-200"> </div>
      </div>
    </Container>
  );
};

export default Cart;
