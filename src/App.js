import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./App.css";

import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./pages/home/Home";
import Group from "./pages/group/Group";
import BoardofDirectors from "./pages/team/BoardofDirectors";
import Team from "./pages/team/Team";
import Whatwedo from "./pages/whatwedo/Whatwedo";
import OtherTeamMembers from "./pages/team/otherTeam";
import BackgroundMusic from "./components/music/BackgroundMusic";
import musicFile from "./assets/music/wonderful-world.mp3";
import NotFound from "./pages/notfound/NotFound";
import Career from "./pages/career/Career";

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
          <BackgroundMusic src={musicFile} />
          <Routes>
            <Route index exact path="/" element={<Home />} />
            <Route path="/group" element={<Group />} />
            <Route path="/our-services" element={<Whatwedo />} />
            <Route path="/board-of-directors" element={<BoardofDirectors />} />
            <Route path="/management-team" element={<Team />} />
            <Route path="/other-team-members" element={<OtherTeamMembers />} />
            <Route path="/career" element={<Career />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
