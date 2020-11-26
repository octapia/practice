import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();
const Stateprovider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export default Stateprovider;

export const useStateValue = () => useContext(StateContext);
