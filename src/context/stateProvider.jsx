// context.js
import React, {
  createContext,
  useReducer,
  useEffect,
  useState,
  useContext,
} from "react";
import reducer from "./reducer";
import { addData } from "./actions";
import { addCategory } from "./actions";
import { supabase } from "../config/supabase.config";

const initialState = {
  data: [],
  category: [],
};

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      let { data: cakeData, error } = await supabase
        .from("cakeData")
        .select("*");
      dispatch(addData(cakeData));
      dispatch(
        addCategory([...new Set(cakeData.map((item) => item.category))])
      );

      if (cakeData) {
        setIsLoading(false);
      }

      if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error("Error fetching cake data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const contextValue = {
    state,
    dispatch,
    isLoading,
    // other action creators
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

