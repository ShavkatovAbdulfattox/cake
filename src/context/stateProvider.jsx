// context.js
import React, { createContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import { addData } from "./actions";

const initialState = {
  cakeData: [],
};

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("API_ENDPOINT");
  //     const data = await response.json();
  //     dispatch(addData(data));
  //   } catch (error) {
  //     alert({ error });
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const contextValue = {
    state,
    dispatch,
    // other action creators
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
