import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./App.css";

import Home from "./home/Home";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const preloader = document.getElementById("preloader");

    setTimeout(() => {
      preloader.style.display = "none";
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div id="preloader" className="rotating-image"></div>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
