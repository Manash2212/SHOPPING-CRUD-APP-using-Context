import React, { useContext } from "react";
// import SidebarContext
import { SidebarContext } from "../contexts/SidebarContext";
// import icons
import { BsBag } from "react-icons/bs";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <header className="bg-pink-200">
      <div>Header</div>
      <div
        className="cursor-pointer flex relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <BsBag className="text-2xl" />
      </div>
    </header>
  );
};

export default Header;
