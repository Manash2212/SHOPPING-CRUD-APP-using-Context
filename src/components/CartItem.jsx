import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import icons
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
// import CartContext
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increasedAmount, decreasedAmount } =
    useContext(CartContext);
  // Destructure the item
  const { id, title, image, price, amount } = item;
  const convertedPrice = Math.round(price * 80);

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[120px] flex items-center gap-x-3 ">
        {/* For image */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[60px]" src={image} alt="productimage" />
        </Link>
        <div className="flex flex-col w-full">
          {/* title and Remove icon */}
          <div className="flex flex-row justify-between mb-2">
            {/* title */}
            <Link
              to={`/product/${id}`}
              className="text-xs uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            {/* remove icon */}
            <div
              onClick={() => removeFromCart(id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition " />
            </div>
          </div>
          {/* qty, price, increse decrese  */}
          <div className=" flex gap-x-2 h-[30px] text-sm">
            {/* qty */}
            <div className="flex flex-1 max-w-[100px] items-center h-full  border text-primary font-medium">
              {/* minus Icon */}
              <div
                onClick={() => decreasedAmount(id)}
                className="h-full flex flex-1 justify-center items-center cursor-pointer "
              >
                <IoMdRemove />
              </div>
              {/* amount */}
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>
              {/* add Icon */}
              <div
                onClick={() => increasedAmount(id)}
                className="h-full flex flex-1 justify-center items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
            {/* item Price */}
            <div className="flex flex-1 items-center justify-around">
              ₹{convertedPrice}
            </div>
            {/* Final Price */}
            <div className="flex flex-1 items-center justify-center text-primary font-medium ">
              ₹{convertedPrice * amount}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
