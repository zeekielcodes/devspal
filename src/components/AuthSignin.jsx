import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { ContextSource } from "./AppContext";

function AuthSignin() {
  const { state, dispatch } = useContext(ContextSource);

  const googleSignin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        dispatch({ type: "LOGIN", payload: user });
        dispatch({
          type: "openModal",
          payload: `Authenticated as ${user.email}`,
        });
        console.log(user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;

        const errorMessage = error.message;
        dispatch({ type: "openModal", payload: errorMessage });
        console.log(errorMessage);
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const gitSignin = () => {};

  return (
    <div className="w-full">
      <div className="flex mt-4 w-full items-center">
        <hr className="w-full border" />
        <h3 className="p-2 border">OR</h3>
        <hr className="w-full border" />
      </div>
      <div
        onClick={googleSignin}
        className="w-full bg-[#5DCB89] px-2 h-[40px] border-2 my-4 flex items-center rounded"
      >
        <FcGoogle className="text-[24px]" />{" "}
        <button type="button" onClick={googleSignin} className="w-full h-full">
          Sign in with Google
        </button>
      </div>
      {/* <div
        onClick={gitSignin}
        className="w-full bg-[#5DCB89] px-2 h-[40px] border-2  flex items-center rounded"
      >
        <BsGithub className="text-[24px]" />
        <button type="button" onClick={gitSignin} className="w-full h-full">
          Sign in with GitHub
        </button>
      </div> */}
    </div>
  );
}

export default AuthSignin;
