import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about/About";
import Whatwedo from "./pages/Whatwedo";
import Team from "./pages/Team";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import "./App.css";

import "./assets/js/vanilla-tilt";
import color from "./config/colors";
import AOS from "aos";
//import "aos/dist/aos.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in",
      once: false,
    });
  }, []);

  useEffect(() => {
    const preloader = document.getElementById("preloader");

    setTimeout(() => {
      preloader.style.display = "none";
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <div style={{ backgroundColor: color.blue }} className="App">
      {loading ? (
        <div id="preloader" className="rotating-image"></div>
      ) : (
        <>
          <Navbar />
          <div className="fade">
            <Routes>
              <Route index exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/what_we_do" element={<Whatwedo />} />
              <Route exact path="/management_team" element={<Team />} />
            </Routes>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
