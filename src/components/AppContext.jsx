import React, { createContext, useContext, useReducer } from "react";

export const ContextSource = createContext();

const initial = {
  isAuthenticated: false,
  user: null,
  modalOpen: false,
  modalContent: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };

    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    case "closeModal":
      return {
        ...state,
        modalOpen: false,
      };

    case "openModal":
      return {
        ...state,
        modalOpen: true,
        modalContent: action.payload,
      };

    default:
      return state;
  }
};

function AppContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initial);
  const ContextState = { state, dispatch };
  return (
    <ContextSource.Provider value={ContextState}>
      {children}
    </ContextSource.Provider>
  );
}

export default AppContext;
