import './App.css';
import Home from "./Home"
import Header from "./Header"
import Login from "./Login"
import Checkout from './Checkout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import React, { useEffect } from "react";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("[USER] ", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div><Header/><Home/></div>} />
          <Route path="login" element={<Login/>} />
          <Route path="checkout" element={<div><Header/><Checkout/></div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
