import { signOut } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { BsPower } from "react-icons/bs";
import { Route, Routes, useNavigate } from "react-router-dom";
import hero from "../assets/images/theface.jpg";
import { ContextSource } from "../components/AppContext";
import Explainer from "../components/Explainer";
import { auth } from "../firebase";

function Dashboard() {
  const { state, dispatch } = useContext(ContextSource);

  const navigate = useNavigate();

  const logOut = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOGOUT" });
        dispatch({ type: "openModal", payload: "Logged out" });
      })
      .catch((error) => {
        dispatch({ type: "openModal", payload: error.message });
      });
  };
  if (state.isAuthenticated) {
    return (
      <div className="dashboard pad">
        <aside>
          <div className="flex flex-col gap-4 items-center">
            <img
              src={
                state.user?.photoURL
                  ? state.user.photoURL
                  : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              }
              alt=""
              className="h-[100px] w-[100px] rounded-full border-2 border-white"
            />
            <h2 className="text-[24px]">
              {state.user.displayName
                ? state.user.displayName
                : state.user.email}
            </h2>
          </div>

          <ul className="w-full">
            <li className="bg-white w-full text-center text-black py-4">
              DevsPal Live
            </li>
          </ul>

          <button
            onClick={logOut}
            className="bg-[#5DCB89] text-black py-2 w-full flex gap-2 items-center justify-center rounded"
          >
            <BsPower className="text-[22px]" /> Log out
          </button>
        </aside>
        <Explainer />
      </div>
    );
  } else {
    navigate("/login");
  }
}

export default Dashboard;
