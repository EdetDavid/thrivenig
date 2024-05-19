import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./App.css";

import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./pages/home/Home";
import Group from "./pages/group/Group";
import BoardofDirectors from "./pages/BoardofDirectors";
import Team from "./pages/Team";
import Whatwedo from "./pages/Whatwedo";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const preloader = document.getElementById("preloader");

    setTimeout(() => {
      preloader.style.display = "none";
      setLoading(false);
    }, 2500);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div id="preloader" className="rotating-image"></div>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route index exact path="/" element={<Home />} />
            <Route path="/group" element={<Group />} />
            <Route path="/our_services" element={<Whatwedo />} />
            <Route path="/board_of_directors" element={<BoardofDirectors />} />
            <Route path="/management_team" element={<Team />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
