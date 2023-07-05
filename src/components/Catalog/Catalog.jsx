import React, { useContext } from "react";
import { Title } from "../Bonus";
import Category from "../Category/Category";
import PopularProducts from "../PopularProducts/PopularProducts";
import ProductCard from "../ProductCard/ProductCard";
import { MyContext } from "../../context/stateProvider";
import MyLoader from "../ProductCard/Loader";
import CategoryLoader from "../Category/CategorySkeleton";

function Catalog() {
  const { isLoading } = useContext(MyContext);
  console.log(isLoading);
  return (
    <section className="container -mt-12 ">
      <Title>Каталог</Title>
      <div className="flex gap-5">
        {isLoading ? (
          <div className="bg-white rounded-2xl flex flex-col py-5 ">
            {new Array(6).fill(0).map((item, i) => {
              return (
                <div key={i}>
                  <CategoryLoader />
                </div>
              );
            })}
          </div>
        ) : (
          <Category />
        )}
        {isLoading ? (
          <div className="bg-white flex-grow rounded-2xl grid grid-cols-3 gap-3 py-3 px-5">
            {new Array(6).fill(0).map((_, i) => {
              return (
                <div key={i}>
                  <MyLoader />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col">
            <PopularProducts />
            <PopularProducts title={"Новинки"} />
          </div>
        )}
        {/* <ProductCard /> */}
      </div>
    </section>
  );
}

export default Catalog;
