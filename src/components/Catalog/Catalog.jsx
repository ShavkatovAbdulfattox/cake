import React, { useContext } from "react";
import { Title } from "../Bonus";
import Category from "../Category/Category";
import PopularProducts from "../PopularProducts/PopularProducts";
import ProductCard from "../ProductCard/ProductCard";
import { MyContext } from "../../context/stateProvider";

function Catalog() {
  const { isLoading } = useContext(MyContext);
  console.log(isLoading);
  return (
    <section className="container -mt-12 ">
      <Title>Каталог</Title>
      <div className="flex gap-5">
        <Category />
       {isLoading ? <h1 className="text-5xl text-center">Loading....</h1>: <div className="flex flex-col">
          <PopularProducts />
          <PopularProducts title={"Новинки"} />
        </div>}
        {/* <ProductCard /> */}
      </div>
    </section>
  );
}

export default Catalog;
