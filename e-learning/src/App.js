import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/ContactUs";
import OurServices from "./pages/OurServices";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import React from "react";
import Layout from "./layout";
import Courses from "./pages/Cources";

function App() {
  return (
    <>
      <BrowserRouter>
        <React.StrictMode>
          <Routes>
            <Route exact path="/" element={<Layout component={<Home />} />} />
            <Route path="/home" element={<Layout component={<Home />} />} />
            <Route path="/about" element={<Layout component={<About />} />} />
            <Route path="/courses" element={<Layout component={<Courses />} />} />

            <Route
              path="/contact"
              element={<Layout component={<Contact />} />}
            />
            <Route
              path="/portfolio"
              element={<Layout component={<Portfolio />} />}
            />

            <Route
              path="/ourservices"
              element={<Layout component={<OurServices />} />}
            />
             <Route
              path="/courses"
              element={<Layout component={<Courses/>} />}
            />
          </Routes>
        </React.StrictMode>
      </BrowserRouter>
      
    </>
  );
}

export default App;
