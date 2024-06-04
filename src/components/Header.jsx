import React, { useContext, useEffect, useState } from "react";
// import SidebarContext
import { SidebarContext } from "../contexts/SidebarContext";
// import icons
import { BsBag } from "react-icons/bs";
// import Context
import { CartContext } from "../contexts/CartContext";
// import Link
import { Link } from "react-router-dom";
// import Logo
import Logo from "../img/logo.svg";

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  // Sidebar or  open/close
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  // amoun state
  const { itemAmount } = useContext(CartContext);

  // evnet listner for header state
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? " backdrop-blur-lg  py-4 shadow-md" : " bg-gray-100 py-4 "
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        {/* logo */}
        <Link to={"/"}>
          <div>
            <img className="w-[40px]" src={Logo} alt="logo" />
          </div>
        </Link>
        {/* cart */}
        <div
          className="cursor-pointer flex relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-1 text-[12px] w-[18px] h-[18px] rounded-full text-white flex items-center justify-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
