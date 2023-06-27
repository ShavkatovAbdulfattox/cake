import React from "react";
import { styled, createGlobalStyle } from "styled-components";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";

import raleway300 from "./assets/fonts/Raleway-Light.ttf";
import montserrat700 from "./assets/fonts/MontserratAlternates-Bold.ttf";
import junegull from "./assets/fonts/junegull.otf";

function App() {
  return (
    <Wrapper>
      <Navbar />
      <Home />
      <GlobalStyle />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: 'Raleway300';
  src: url(${raleway300});
}

@font-face {
  font-family: 'Montserrat700';
  src: url(${montserrat700});
}

@font-face {
  font-family: 'Junegull';
  src: url(${junegull});
}
`;

export default App;
