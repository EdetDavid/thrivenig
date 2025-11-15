import React from "react";
import { motion } from "framer-motion";

import BDC from "../../assets/logos/BDC.png";
import TTT from "../../assets/logos/TTT.png";
import TIB from "../../assets/logos/TIB.png";

import "./Hero.css";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion";
import { staggerContainer, fadeInUp, hoverLift } from "../../utils/animation";

const LogoItem = ({ href, src, alt }) => (
  <motion.div
    className="d-flex"
    variants={fadeInUp}
    initial="hidden"
    animate="visible"
  >
    <a href={href}>
      <motion.img
        className="box-img"
        src={src}
        alt={alt}
        variants={hoverLift}
        initial="rest"
        whileHover="hover"
        whileTap="hover"
        role="img"
      />
    </a>
  </motion.div>
);

const Hero = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  // If user prefers reduced motion, skip motion props so layout remains static
  if (prefersReducedMotion) {
    return (
      <div className="d-flex mx-auto marquee-container">
        <div className="d-flex">
          <a href="https://insurance.thrivenig.com">
            <img className="box-img" src={TIB} alt="insurance-logo" />
          </a>
        </div>
        <div className="d-flex">
          <a href="https://travels.thrivenig.com">
            <img className="box-img" src={TTT} alt="travels-logo" />
          </a>
        </div>
        <div className="d-flex">
          <a href="/">
            <img className="box-img" src={BDC} alt="BDC" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="d-flex mx-auto marquee-container"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <LogoItem
        href="https://insurance.thrivenig.com"
        src={TIB}
        alt="insurance-logo"
      />
      <LogoItem
        href="https://travels.thrivenig.com"
        src={TTT}
        alt="travels-logo"
      />
      <LogoItem href="/" src={BDC} alt="BDC" />
    </motion.div>
  );
};

export default Hero;
