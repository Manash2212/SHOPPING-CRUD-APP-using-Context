import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();
const CartProvider = ({ children }) => {
  // Cart State
  const [cart, setCart] = useState([]);
  // item amount State
  const [itemAmount, setItemAmount] = useState(0);

  // Update the ItemAmount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  // total price State
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const totalPrice = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * 80 * currentItem.amount;
    }, 0);
    setTotal(totalPrice);
  }, [cart]);

  // add to Cart
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
  // remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };
  // clear all cart
  const clearAllCart = () => {
    setCart([]);
  };
  // amount increased
  const increasedAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };
  // amount decreased
  const decreasedAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };
  console.log(cart);
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearAllCart,
        increasedAmount,
        decreasedAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
