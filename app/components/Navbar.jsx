import Image from "next/image";
import React from "react";
import logo from "@/app/assets/logoSvg.svg";

const Navbar = () => {
  return (
    <div className="sticky top-0  bg-[#FDDCB6]  text-black  flex items-center justify-between w-full py-6 px-10 ">
      <div className="h-20 w-20 ">
        <Image src={logo} alt="" className="h-full w-full object-cover " />
      </div>
      <h5 className="font-apple text-black text-xl md:text-2xl font-bold">PAWS FOR ALL</h5>
    </div>
  );
};

export default Navbar;
