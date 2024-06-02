import React, { useContext } from "react";
// import components
import Product from "../components/Product";

// imoprt the Productcontext
import { ProductContext } from "../contexts/ProductContext";
const Home = () => {
  // get the Data from the Productcontext
  const { products } = useContext(ProductContext);
  // console.log(products);

  // get only men's and women's categories
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  // console.log(filteredProducts);
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((item) => (
              <Product key={item.id} products={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
