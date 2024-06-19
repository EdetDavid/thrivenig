import React from "react";

import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Subsidiaries from "../../components/subsidiaries/Subsidiaries";
import Newsletter from "../../components/Newsletter";
import Services from "../../components/services/Services";

import Contact from "../../components/contact/Contact";

const Home = () => {
  return (
    <div className="d-flex flex-column  overflow-hidden fade ">
      <Header />
      <Hero />
      <Newsletter />
      <Subsidiaries />
      <Services />

      <Contact />
    </div>
  );
};

export default Home;
