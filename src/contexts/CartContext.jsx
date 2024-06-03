import React, { createContext, useState } from "react";

export const CartContext = createContext();
const CartProvider = ({ children }) => {
  // Cart State
  const [cart, setCart] = useState([]);
  const addToCart = (product, id) => {
    // created a new variable, in this spread the Product object and instert the new amount Property
    const newItem = { ...product, amount: 1 };
    // console.log(newItem);

    // Check the item is already in the cart
    const cartItem = cart.find((item) => item.id === id);
    // console.log(cartItem);

    // if cartItem is already in the cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
  console.log(cart);
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
