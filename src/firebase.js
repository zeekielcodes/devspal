// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGTvU807U1KSCpT1sX0pi65xxK4KdCgkY",
  authDomain: "devspal.firebaseapp.com",
  projectId: "devspal",
  storageBucket: "devspal.appspot.com",
  messagingSenderId: "65544515067",
  appId: "1:65544515067:web:52427533c89005e80a2f5e",
  measurementId: "G-02FZP4PE7W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
// const analytics = getAnalytics(app);