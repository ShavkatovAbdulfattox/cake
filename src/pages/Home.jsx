import React from "react";

import Child from "../components/Child/Child";
import CakeCompilation from "../components/CakeCompilation/CakeCompilation";
import Accordion from "../components/Accordion/Accordion";

function Home() {
  return (
    <div>
      <Child />
      <CakeCompilation />
      <Accordion />
    </div>
  );
}

export default Home;
