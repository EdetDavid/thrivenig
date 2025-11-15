export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const hoverLift = {
  rest: { scale: 1 },
  hover: { scale: 1.03, transition: { duration: 0.18 } },
};

export const navVariants = {
  top: { backgroundColor: "rgba(255,255,255,0)", y: 0, boxShadow: "0 0 0 rgba(0,0,0,0)" },
  scrolled: {
    backgroundColor: "rgba(255,255,255,0.98)",
    y: -2,
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    transition: { type: "spring", stiffness: 200, damping: 25 }
  }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -18 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};
