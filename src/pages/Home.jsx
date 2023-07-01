import React from "react";

import Child from "../components/Child/Child";
import CakeCompilation from "../components/CakeCompilation/CakeCompilation";
import Accordion from "../components/Accordion/Accordion";
import Bonus from "../components/Bonus";
import Header from "../components/Header/Header";
import Order from "../components/Order/Order";
import Contact from "../components/Contact/Contact";

function Home() {
  return (
    <div className="overflow-hidden ">
      <Header />
      <main>
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

export default Home;
