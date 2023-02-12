import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ContextSource } from "../components/AppContext";
import AuthSignin from "../components/AuthSignin";
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, dispatch } = useContext(ContextSource);

  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        dispatch({ type: "openModal", payload: "Logged in" });
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        dispatch({ type: "openModal", payload: errorMessage });
        console.log(errorMessage);
      });
  };
  if (!state.isAuthenticated) {
    return (
      <div className="login pad">
        <form onSubmit={signIn}>
          <h1 className="text-[32px]">Log in</h1>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-2"
            type="email"
            name="email"
            id="email"
          />
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-2"
            type="password"
            name="password"
            id="password"
          />
          <button type="submit" className="mt-4">
            Log in
          </button>
          <AuthSignin />
          <p className="text-center">
            Don't have an account?{" "}
            <Link className="text-[#5DCB89]" to="/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    );
  } else {
    navigate("/dashboard");
  }
}

export default Login;
