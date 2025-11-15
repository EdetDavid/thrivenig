import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Team.css";
import useInView from "../../hooks/useInView";
import { staggerContainer, fadeInUp } from "../../utils/animation";
import AKINWALE from "../../assets/images/directors/AKINWALE.png";
import TAYO from "../../assets/images/directors/TAYO.png";
import Tokunbo from "../../assets/images/directors/Tokunbo.png";

const directors = [
  {
    id: 1,
    name: " Omotayo Gabriel Moronkeji Ajani",
    title: "Chairman",
    image: TAYO,
    bio: "Omotayo holds a B.Sc. in Accounting from the University of Ilorin and an Executive MBA from Lagos Business School, Pan Atlantic University, and Bangor University, UK.",
    fullBio:
      "Omotayo holds a B.Sc. in Accounting from the University of Ilorin and an Executive MBA from Lagos Business School, Pan Atlantic University, and Bangor University, UK. He is a full member of the Nigerian Institute of Management and other professional bodies. With over 23 years of banking experience, he transitioned into insurance as a Director on the board of KBL Healthcare Limited. He currently serves as the Chairman of Thrive Insurance Brokers Limited.",
    expertise: [
      "Corporate Governance",
      "Strategic Planning",
      "Risk Management",
      "Business Development",
    ],
    order: 1,
  },
  {
    id: 2,
    name: "Akinwale Adegboyega Adedoyin",
    title: "MD/CEO",
    image: AKINWALE,
    bio: "Akinwale is the CEO of Thrive Insurance Brokers Limited. He holds a B.Sc. in Accounting and an MBA in Finance & Accounting.",
    fullBio:
      "Akinwale is the CEO of Thrive Insurance Brokers Limited. He holds a B.Sc. in Accounting and an MBA in Finance & Accounting. He is a Fellow of several professional institutes including ICAN, ICSA, and CIBN. With over 25 years of experience spanning insurance, consulting, and banking, he has worked with organizations such as Gateway Radio, Guinea Insurance Plc, Excel Insurance Brokers, Coral International Insurance Company Limited, among others.",
    expertise: [
      "Financial Strategy",
      "Risk Management",
      "Investment Banking",
      "Institutional Finance",
    ],
    order: 2,
  },
  {
    id: 3,
    name: "Tokunbo Abiola Adeleke",
    title: "Executive Director",
    image: Tokunbo,
    bio: "Tokunbo earned her B.Sc. in Geology from the Federal University of Technology Minna. She has over 8 years of experience in insurance and financial institutions.",
    fullBio:
      "Tokunbo earned her B.Sc. in Geology from the Federal University of Technology Minna. She has over 8 years of experience in insurance and financial institutions. Her career began at Mutual Benefits Insurance Plc, where she worked in business development roles. She is currently an Executive Director at Thrive Insurance Brokers Limited and also serves as a Director on the board of Paradise Forex BDC Limited. She is concluding her studies to become a chartered insurer (CII UK).",
    expertise: [
      "Entrepreneurship",
      "Innovation",
      "Growth Strategy",
      "Sustainable Business",
    ],
    order: 3,
  },
];

const DirectorModal = ({ director, isOpen, onClose }) => {
  const [expandedBio, setExpandedBio] = useState(false);

  if (!director) return null;

  return (
    <motion.div
      className={`director-modal-overlay ${isOpen ? "active" : ""}`}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      style={{ pointerEvents: isOpen ? "auto" : "none" }}
    >
      <motion.div
        className="director-modal-content"
        animate={{ scale: isOpen ? 1 : 0.95, y: isOpen ? 0 : 20 }}
        transition={{
          duration: 0.3,
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <motion.button
          className="modal-close-btn"
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ✕
        </motion.button>

        <div className="modal-grid">
          {/* Left: Image */}
          <div className="modal-image-section">
            <motion.img
              src={director.image}
              alt={director.name}
              className="modal-image"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            />
            <div className="modal-badge">{director.order}</div>
          </div>

          {/* Right: Content */}
          <div className="modal-content-section">
            <motion.h2
              className="modal-name"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
            >
              {director.name}
            </motion.h2>

            <motion.p
              className="modal-title"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              {director.title}
            </motion.p>

            {/* Bio Section */}
            <motion.div
              className="modal-bio-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.4 }}
            >
              <p className="modal-bio-label">About</p>
              <p className="modal-bio">
                {expandedBio ? director.fullBio : director.bio}
              </p>
              <motion.button
                className="view-more-btn"
                onClick={() => setExpandedBio(!expandedBio)}
                whileHover={{ x: 4 }}
              >
                {expandedBio ? "View Less" : "View More"} →
              </motion.button>
            </motion.div>

            {/* Expertise Section */}
            <motion.div
              className="modal-expertise-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <p className="modal-expertise-label">Areas of Expertise</p>
              <div className="expertise-tags">
                {director.expertise.map((item, idx) => (
                  <motion.span
                    key={idx}
                    className="expertise-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.35 + idx * 0.05, duration: 0.3 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const DirectorProfileCard = ({ director, index, onCardClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="director-profile-card"
      variants={fadeInUp}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      onClick={() => onCardClick(director)}
    >
      {/* Hexagon Background Accent */}
      <motion.div
        className="hexagon-accent"
        animate={{ rotate: isHovered ? 360 : 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      {/* Main Image Container with gradient overlay */}
      <div className="profile-image-container">
        <motion.img
          src={director.image}
          alt={director.name}
          className="profile-image"
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 0.4 }}
        />
        <motion.div
          className="profile-gradient-overlay"
          animate={{ opacity: isHovered ? 1 : 0.3 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Order Number Badge */}
      <div className="profile-order-badge">{director.order}</div>

      {/* Content Section */}
      <motion.div
        className="profile-content"
        animate={{ y: isHovered ? 0 : 8 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="profile-name">{director.name}</h3>
        <p className="profile-title">{director.title}</p>

        {/* Expand to show bio on hover */}
        <motion.p
          className="profile-bio"
          animate={{
            opacity: isHovered ? 1 : 0,
            height: isHovered ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {director.bio}
        </motion.p>
      </motion.div>

      {/* Floating accent dots */}
      <motion.div
        className="accent-dot accent-dot-1"
        animate={{ y: isHovered ? -8 : 0 }}
        transition={{ duration: 0.4 }}
      />
      <motion.div
        className="accent-dot accent-dot-2"
        animate={{ y: isHovered ? 8 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Click to view more indicator */}
      <motion.div
        className="click-indicator"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        Click to view more
      </motion.div>
    </motion.div>
  );
};

const BoardOfDirectors = () => {
  const [ref, inView] = useInView({ threshold: 0.12 });
  const [selectedDirector, setSelectedDirector] = useState(null);

  return (
    <>
      {/* Modal */}
      <DirectorModal
        director={selectedDirector}
        isOpen={!!selectedDirector}
        onClose={() => setSelectedDirector(null)}
      />

      {/* Hero Section */}
      <div className="board board-fresh d-flex flex-column justify-content-center align-items-center p-5 position-relative">
        <motion.div
          className="board-content-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h1 className="fw-bold display-1 red-text">Board Of Directors</h1>
          <p className="board-subtitle">
            Leading Excellence Through Vision & Integrity
          </p>
        </motion.div>

        {/* Animated Background Elements */}
        <motion.div
          className="bg-decoration bg-decoration-1"
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="bg-decoration bg-decoration-2"
          animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Directors Showcase Section */}
      <section className="board-directors-showcase py-5">
        <div className="container">
          <motion.div
            ref={ref}
            className="directors-showcase-grid"
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {directors.map((director, idx) => (
              <DirectorProfileCard
                key={director.id}
                director={director}
                index={idx}
                onCardClick={setSelectedDirector}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <motion.section
        className="cta-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container text-center">
          <h2 className="cta-title">Our Leadership Excellence</h2>
          <p className="cta-subtitle">
            Driven by expertise, innovation, and a commitment to transforming
            industries
          </p>
        </div>
      </motion.section>
    </>
  );
};

export default BoardOfDirectors;
