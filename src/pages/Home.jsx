import React from "react";

import Child from "../components/Child/Child";
import CakeCompilation from "../components/CakeCompilation/CakeCompilation";

function Home() {
  return (
    <div>
      <header></header>
      <main>
        <Child />
        <CakeCompilation />
      </main>
    </div>
  );
}

export default Home;
