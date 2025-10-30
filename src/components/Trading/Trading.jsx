import "./Trading.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import illust from "../../assets/illustraion1.png";
import thunder from "../../assets/thunder1.png"
import Crown from "../../assets/crown.png";
import grayCrown from "../../assets/grayCrown.png";
import Diamond from "../../assets/diamond.png";
import grayDiamond from "../../assets/grayDiamond.png";
import Stroke from "../../assets/stroke.png";
import grayStroke from "../../assets/grayStroke.png";
import Profile from "../../assets/profile.png";
import grayProfile from "../../assets/grayProfile.png";
import illust2 from "../../assets/illustraion2.png";
import question from "../../assets/question.png"

const Trading = () => {
  const controls = useAnimation();
const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

useEffect(() => {
  if (inView) {
    controls.start("visible");
  }
}, [inView, controls]);

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 2, ease: "easeOut" },
  },
};

  // Store original and gray images in an object
     const icons = {
    crown: { default: Crown, gray: grayCrown },
    diamond: { default: Diamond, gray: grayDiamond },
    profile: { default: Profile, gray: grayProfile },
    stroke: { default: Stroke, gray: grayStroke},
  };
   // State to hold each image source
  const [imageSources, setImageSources] = useState({
    stroke: icons.stroke.default,
    crown: icons.crown.default,
    diamond: icons.diamond.default,
    profile: icons.profile.default,
  });
    // Reusable enter/leave handlers
  const handleMouseEnter = (key) => {
    setImageSources((prev) => ({
      ...prev,
      [key]: icons[key].gray,
    }));
  };

  const handleMouseLeave = (key) => {
    setImageSources((prev) => ({
      ...prev,
      [key]: icons[key].default,
    }));
  };

  return (
    <div className="trading"
    >
      <div className="trade-img">
        <motion.img
          src={illust}
          alt="Rotating"
          animate={{ x: [0, -25, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      <motion.div
      className="trade-content"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
        opacity: 1,
        y: 0,
  transition: {
    duration: 1.5,
    ease: "easeOut",
    staggerChildren: 0.2,  // 👈 Add this to stagger
  },
}
      }}
      >
        <div className="trade-text">
        <h1>TRADE FIRST, TRADE FAST</h1>
        <p>
          With a focus on low latency, BlockBot delivers seamless trading UX to
          users, with access to user-specific trading data
        </p>
      </div>
      <div className="trade-group">
        <motion.div className="group lightning" variants={itemVariants}>
          <img src={thunder} alt="" className="hover-image" />
          <h1>LIGHTNING FAST SWAPS</h1>
        </motion.div>
        <motion.div 
        variants={itemVariants}
          onMouseEnter={() => handleMouseEnter("stroke")}
          onMouseLeave={() => handleMouseLeave("stroke")}
        className="group group2 icon">
          <img src={imageSources.stroke} alt="Crown Icon" />
          <h1>TRADING INSIGHTS</h1>
        </motion.div>
        {/* <motion.div 
         variants={itemVariants}
          onMouseEnter={() => handleMouseEnter("crown")}
          onMouseLeave={() => handleMouseLeave("crown")}
        className="group group3 icon">
          <img src={imageSources.crown} alt="Crown Icon" />
          <h1>THE SOCIAL LAYER</h1>
        </motion.div> */}
        {/* <motion.div 
         variants={itemVariants}
          onMouseEnter={() => handleMouseEnter("diamond")}
          onMouseLeave={() => handleMouseLeave("diamond")}
        className="group icon">
           <img src={imageSources.diamond} alt="Diamond Icon" />
          <h1>USER-SPECIFIC TRADING DATA</h1>
        </motion.div> */}
        {/* <motion.div
         variants={itemVariants} 
          onMouseEnter={() => handleMouseEnter("profile")}
          onMouseLeave={() => handleMouseLeave("profile")}
        className="group group5 icon">
          <img src={imageSources.profile} alt="Profile Icon" />
          <h1>USER PROFILES</h1>
        </motion.div> */}
        <motion.div
         variants={itemVariants} 
        className="group icon click">
          <img src={question} alt="" />
          <h1>[REDACTED]</h1>
        </motion.div>

      </div>
      </motion.div>
      <div className="trade-image">
        <motion.img
          src={illust2}
          alt=""
          animate={{ x: [0, -25, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
};

export default Trading;
