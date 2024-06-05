import React, { useContext } from "react";
import { useParams } from "react-router-dom";
// import Product Context
import { ProductContext } from "../contexts/ProductContext";
import { CartContext } from "../contexts/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const { products } = useContext(ProductContext);

  const { addToCart } = useContext(CartContext);
  // get the single psoduct based on their id.
  const product = products.find((item) => item.id === parseInt(id));
  console.log(product);

  // if Product not found
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading....
      </section>
    );
  }

  // Destructuring the product
  const { description, title, image, price } = product;

  return (
    <section className="pt-24 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto  border-black  ">
        {/* image and text wrapper */}
        <div className="flex flex-col lg:flex-row">
          {/* image */}
          <div className="flex flex-1 justify-center p-8 items-center mb-8 lg:mb-0 shadow-lg lg:mr-8">
            <img className="max-w-[200px] lg:max-w-xs" src={image} alt="img" />
          </div>
          {/* text */}
          <div className=" flex-1 text-center lg:text-left mb-8">
            <h1 className="text-[24px] font-medium mb-2 max-w-[450px]">
              {title}
            </h1>
            <div className="text-xl mb-6 font-medium text-red-500">
              ₹{price * 80}
            </div>
            <p className="mb-8">{description}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              className="uppercase bg-primary py-4 px-8 text-white rounded-lg mb-6 "
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
