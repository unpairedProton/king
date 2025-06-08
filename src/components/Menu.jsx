import React from "react";
import MenuImg from "./MenuImg";
import MenuText from "./MenuText";

const Menu = () => {
  return (
    <div className="w-full h-full flex justify-start flex-col md:flex-row items-center bg-zinc-900 p-4 md:px-4 gap-4 ">
      <div className=" h-[50%] w-full  md:h-[80%] md:flex-1 flex justify-center items-center shrink-0">
        <MenuImg />
      </div>
      <div className="  w-full h-[40%] md:w-1/3 md:h-full flex flex-col p-6 px-10 gap-8 lg:gap-20 bg-zinc-900">
      <MenuText />
      </div>
    </div>
  );
};

export default Menu;