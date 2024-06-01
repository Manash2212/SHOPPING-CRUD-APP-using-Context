import React, { createContext, useEffect, useState } from "react";

// Create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // Product State
  const [products, setProducts] = useState([]);

  // fetch Product from API
  useEffect(() => {
    const fetchProduct = async () => {
      const data = await fetch("https://fakestoreapi.com/products");
      const json = await data.json();
      console.log(json);
      setProducts(json);
    };
    fetchProduct();
  }, []);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
