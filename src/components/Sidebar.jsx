import React, { useContext } from "react";

// import icons
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

import CartItem from "./CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  // import the cart from cartContext
  const { cart } = useContext(CartContext);
  return (
    <div
      className={` ${
        isOpen ? "right-0" : "-right-full"
      }  w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[27vw] transition-all duration-300 z-20 px-4 lg:px-[30px] `}
    >
      <div className="flex items-center justify-between py-4 border-b  ">
        <div className="uppercase text-sm font-semibold">Shopping bag (0)</div>
        {/* Icons */}
        <div
          className="cursor-pointer font-bold flex items-center justify-center w-12 h-12 "
          onClick={handleClose}
        >
          <IoMdArrowForward className="text-xl " />
        </div>
      </div>
      <div className="">
        {cart.map((item, i) => {
          return <CartItem item={item} key={i} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
