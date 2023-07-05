import React from "react";
import { Title } from "../Bonus";
import Category from "../Category/Category";
import PopularProducts from "../PopularProducts/PopularProducts";

function Catalog() {
  return (
    <section className="container -mt-12 ">
      <Title>Каталог</Title>
      <div className="flex gap-5">
        <Category />
        <div className="flex flex-col">
          <PopularProducts />
          <PopularProducts title={"Новинки"} />
        </div>
      </div>
    </section>
  );
}

export default Catalog;
