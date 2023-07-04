import React, { useEffect } from "react";
import { styled } from "styled-components";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";


function App() {

  return (
    <Wrapper className="lg:px-0 px-4">
      <Navbar />
      <Home />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: linear-gradient(89deg, #ee9ca7 0%, rgba(255, 221, 225, 0) 100%);
`;

export default App;
