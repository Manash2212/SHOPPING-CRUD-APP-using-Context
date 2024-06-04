import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { CartContext } from "../contexts/CartContext";

const Product = ({ products }) => {
  // console.log(products);
  // import addToCart from CartContext
  const { addToCart } = useContext(CartContext);
  // Destructure the product
  const { id, title, image, category, price } = products;
  const convertedPrice = Math.round(price * 80);
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-2 relative overflow-hidden group transition cursor-pointer my-10">
        <div className="w-full h-full flex justify-center items-center ">
          {/* image */}
          <div className="w-[200px] mx-auto flex justify-center items-center xl:p-8">
            <img
              className="max-h-[190px] group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />
          </div>
        </div>
        {/* buttons */}
        <div className="absolute top-2 -right-10 group-hover:right-2  p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button
            className="flex justify-center items-center text-white w-8 h-8 bg-red-500 drop-shadow-md "
            onClick={() => addToCart(products, id)}
          >
            <FaPlus className="text-2xl " />
          </button>
          <Link
            to={`/product/${id}`}
            className="w-8 h-8 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <FaEye className="text-xl" />
          </Link>
        </div>
      </div>
      {/* Category & title & Price */}
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div> ₹{convertedPrice}</div>
      </div>
    </div>
  );
};

export default Product;
