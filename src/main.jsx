import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles.jsx";
import { MyContextProvider } from "./context/stateProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MyContextProvider>
    <React.StrictMode>
      <App />
      <GlobalStyles />
    </React.StrictMode>
  </MyContextProvider>
);
