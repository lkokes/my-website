import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about_me" element={<AboutMe />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
