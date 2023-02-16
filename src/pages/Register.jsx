import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextSource } from "../components/AppContext";
import AuthSignin from "../components/AuthSignin";
import { auth } from "../firebase";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, dispatch } = useContext(ContextSource);

  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        dispatch({
          type: "openModal",
          payload: "Account created successfully",
        });
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        dispatch({ type: "openModal", payload: errorMessage });
        console.log(error.message);
        // ..
      });
  };

  if (!state.isAuthenticated) {
    return (
      <div className="login pad">
        <form onSubmit={signUp}>
          <h1 className="text-[32px]">Register</h1>
          <label htmlFor="email">Email</label>
          <input
            className="px-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            id="email"
          />
          <label htmlFor="password">Password</label>
          <input
            className="px-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            id="password"
          />
          <button type="submit" className="mt-4">
            Register
          </button>
          <AuthSignin />
          <p className="text-center">
            Already have an account?{" "}
            <Link className="text-[#5DCB89]" to="/login">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    );
  } else {
    return navigate("/dashboard");
  }
}

export default Register;
