import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./MyComponents/About";
import Contact from "./MyComponents/Contact";
import OurServices from "./MyComponents/OurServices";
import LogIn from "./MyComponents/LogIn";
import SignUp from "./MyComponents/SignUp";
import Portfolio from "./MyComponents/Portfolio";
import Home from "./MyComponents/Home";
import React from "react";
import NavBar from "./MyComponents/NavBar";
import { HomePage } from "./pages/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <NavBar />
        <React.StrictMode>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/ourservices" element={<OurServices />} />
          </Routes>
        </React.StrictMode> */}
        <HomePage />
      </BrowserRouter>
    </>
  );
}

export default App;
