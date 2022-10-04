import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Users from "./pages/Users";
import OurServices from "./pages/OurServices";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import React from "react";
import Layout from "./layout";
import Courses from "./pages/Cources";
import Register from "./components/Register";
import LogIn from "./components/LogIn";
import Profile from "./pages/Profile";
import CreateCourse from "./pages/Cources/CreateCourse";

function App() {
  return (
    <>
      <BrowserRouter>
        <React.StrictMode>
          <Routes>
            <Route exact path="/" element={<Layout component={<Home />} />} />
            <Route path="/home" element={<Layout component={<Home />} />} />
            <Route path="/about" element={<Layout component={<About />} />} />

            <Route
              path="/courses"
              element={<Layout component={<Courses />} />}
            />
            <Route
              path="/create-course"
              element={<Layout component={<CreateCourse />} />}
            />

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LogIn />} />

            <Route path="/users" element={<Layout component={<Users />} />} />
            <Route
              path="/profile"
              element={<Layout component={<Profile />} />}
            />
            <Route
              path="/portfolio"
              element={<Layout component={<Portfolio />} />}
            />

            <Route
              path="/ourservices"
              element={<Layout component={<OurServices />} />}
            />
          </Routes>
        </React.StrictMode>
      </BrowserRouter>
    </>
  );
}

export default App;
