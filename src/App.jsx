import React from "react";
import { styled, createGlobalStyle } from "styled-components";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";

import raleway300 from "./assets/fonts/Raleway300.ttf";
import raleway700 from "./assets/fonts/Raleway700.ttf";
import montserrat400 from "./assets/fonts/MontserratAlternates400.ttf";
import montserrat500 from "./assets/fonts/MontserratAlternates500.ttf";
import montserrat700 from "./assets/fonts/MontserratAlternates700.ttf";
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

const Wrapper = styled.div`
  background: linear-gradient(89deg, #ee9ca7 0%, rgba(255, 221, 225, 0) 100%);
`;

export const Container = styled.div`
  max-width: 1210px;
  padding: 0 15px;
  margin: 0 auto;
  width: 100%;
`;

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
  font-family: 'Montserrat500';
  src: url(${montserrat500});
}

@font-face {
  font-family: 'Montserrat400';
  src: url(${montserrat400});
}

@font-face {
  font-family: 'Junegull';
  src: url(${junegull});
}

@font-face {
  font-family: 'Raleway700';
  src: url(${raleway700});
}
`;

export default App;
