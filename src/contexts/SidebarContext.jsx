import React, { createContext, useState } from "react";

// Create Sidebar Context
export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  // Create Sidebar State
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
