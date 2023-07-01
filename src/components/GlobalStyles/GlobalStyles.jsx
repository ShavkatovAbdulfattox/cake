import React from "react";
import { createGlobalStyle } from "styled-components";

import raleway700 from "../../assets/fonts/Raleway700.ttf";
import raleway300 from "../../assets/fonts/Raleway300.ttf";
import montserrat700 from "../../assets/fonts/MontserratAlternates700.ttf";
import montserrat500 from "../../assets/fonts/MontserratAlternates500.ttf";
import montserrat400 from "../../assets/fonts/MontserratAlternates400.ttf";
import junegull from "../../assets/fonts/junegull.otf";
import boorsok from "../../assets/fonts/boorsok.otf";

function GlobalStyles() {
  return <GlobalStyle />;
}

const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
  font-size: 100%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a{
  display: block;
  text-decoration: none;
}
img{
  display: block;
}
ul > li {
  list-style: none;
}

/* GLOBAL STYLES */
*,
*:before,
*:after {
  box-sizing: border-box;
  line-height: 1.45;
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: auto;
}

#root {
  /*
    Create a stacking context, without a z-index.
    This ensures that all portal content (modals and tooltips) will
    float above the app.
  */
  isolation: isolate;
}

html, body, #root {
  height: 100%;  
scroll-behavior: smooth;
background-color: rgb(229, 231, 235);
}

@font-face {
  font-family: 'Raleway700';
  src: url(${raleway700});
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
}@font-face {
  font-family: 'Boorsok';
  src: url(${boorsok});
}
`;

export default GlobalStyles;
