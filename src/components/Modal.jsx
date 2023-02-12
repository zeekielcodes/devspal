import React, { useContext, useEffect } from "react";
import { ContextSource } from "./AppContext";

function Modal() {
  const { state, dispatch } = useContext(ContextSource);
  useEffect(() => {
    setTimeout(() => dispatch({ type: "closeModal" }), 3000);
  }, []);

  return <div className="modal">{state.modalContent}</div>;
}

export default Modal;
