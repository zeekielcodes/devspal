import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AppContext, { ContextSource } from "./components/AppContext";
import { useContext, useEffect } from "react";
import { auth } from "./firebase";
import Modal from "./components/Modal";
import Error from "./pages/Error";
import Privacy from "./pages/Privacy";

function App() {
  const { state, dispatch } = useContext(ContextSource);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({ type: "LOGIN", payload: user });
      } else {
        dispatch({ type: "LOGOUT" });
      }
    });
  }, []);

  return (
    <main>
      <Router>
        <Nav />
        {state.modalOpen && <Modal />}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
