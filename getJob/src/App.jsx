import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Home, Register, Error } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <ToastContainer position="top-center" autoClose={2000}/>
      </BrowserRouter>
    </>
  );
}

export default App;
