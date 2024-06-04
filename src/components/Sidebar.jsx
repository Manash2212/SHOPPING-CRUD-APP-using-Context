import React, { useContext } from "react";

// import icons
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

import CartItem from "./CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  // import the cart from cartContext
  const { cart, clearAllCart, itemAmount, total } = useContext(CartContext);
  return (
    <div
      className={` ${
        isOpen ? "right-0" : "-right-full"
      }  w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[27vw] transition-all duration-300 z-20 px-4 lg:px-[30px] `}
    >
      <div className="flex items-center justify-between py-4 border-b  ">
        <div className="uppercase text-sm font-semibold">
          Shopping bag ({itemAmount})
        </div>
        {/* Icons */}
        <div
          className="cursor-pointer font-bold flex items-center justify-center w-12 h-12 "
          onClick={handleClose}
        >
          <IoMdArrowForward className="text-xl " />
        </div>
      </div>
      <div className=" flex flex-col gap-y-2 h-[400px] lg:h-[500px] overflow-y-auto overflow-x-hidden border-b ">
        {cart.map((item, i) => {
          return <CartItem item={item} key={i} />;
        })}
      </div>
      {/* total Price and Clear cart */}
      <div className="flex flex-col gap-y-2 py-4 my4'">
        <div className="flex justify-between items-center w-full  ">
          {/* total */}
          <div className="uppercase font-semibold text-primary">
            <span className="mr-2">Total:</span>₹{Math.round(total)}
          </div>
          {/* Clear Cart */}
          <div
            onClick={clearAllCart}
            className="w-10 h-10 py-2 bg-red-600 flex items-center justify-center text-xl text-white cursor-pointer"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to={`/`}
          className="w-full bg-gray-300 flex justify-center items-center py-2 font-medium"
        >
          View Cart
        </Link>
        <Link
          to={`/`}
          className="w-full bg-primary text-white flex justify-center items-center py-2 font-medium"
        >
          Chcekout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
