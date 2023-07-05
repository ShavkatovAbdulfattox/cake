import React from "react";

import Child from "../components/Child/Child";
import CakeCompilation from "../components/CakeCompilation/CakeCompilation";
import Accordion from "../components/Accordion/Accordion";
import Bonus from "../components/Bonus";
import Header from "../components/Header/Header";
import Order from "../components/Order/Order";
import Contact from "../components/Contact/Contact";
import { styled } from "styled-components";
import Bantik from "../assets/img/bantik.png";
import Catalog from "../components/Catalog/Catalog";
function Home() {
  return (
    <div className="overflow-hidden ">
      <Header />
      <Banner className="text-2xl font-Montserrat700 text-pink my-20 py-7 text-center relative">
        В цену каждого торта включено: любая начинка, упаковка и поздравительная
        надпись
        <img src={Bantik} alt="bantik" className="absolute -top-20" />
      </Banner>
      <main>
        <Catalog />
        <Bonus />
        <Child />
        <CakeCompilation />
        <Accordion />
        <Order />
        <Contact />
      </main>
    </div>
  );
}

const Banner = styled.div`
  background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0));
`;

export default Home;
