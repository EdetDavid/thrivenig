import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Group from "./pages/group/Group";
import Whatwedo from "./pages/whatwedo/Whatwedo";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./App.css";
import BoardOfDirectors from "./pages/team/BoardofDirectors";
import Team from "./pages/team/Team";
import Career from "./pages/career/Career";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./components/contact/Contact";
import BackgroundMusic from "./components/music/BackgroundMusic";
import musicFile from "./assets/music/wonderful-world.mp3";
import NotFound from "./pages/notfound/NotFound";
import OtherTeamMembers from "./pages/team/otherTeam";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1500,
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
    <div className="App bg-light">
      {loading ? (
        <div id="preloader" className="rotating-image"></div>
      ) : (
        <>
          <Navbar />
          <BackgroundMusic src={musicFile} />
          <div className="fade">
            <Routes>
              <Route index exact path="/" element={<Home />} />
              <Route exact path="/career" element={<Career />} />
              <Route exact path="/group" element={<Group />} />
              <Route exact path="/what-we-do" element={<Whatwedo />} />

              <Route
                exact
                path="/board-of-directors"
                element={<BoardOfDirectors />}
              />
              <Route exact path="/management-team" element={<Team />} />
              <Route
                exact
                path="/other-team-members"
                element={<OtherTeamMembers />}
              />

              <Route exact path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
              {/* Catch-all route for 404 */}
            </Routes>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
