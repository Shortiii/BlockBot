import "./Form.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import Pen from "../../assets/Pen.png";
import Pen1 from '../../assets/pen2.png'
import Blackbot from "../../assets/BlockBot Icon.png";

const Form = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.25, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 2.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const dropIn = {
    hidden: { opacity: 0, y: -25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2.5,
        ease: "easeOut",
      },
    },
  };

     // State to manage the current image source
     const [imgSrc, setImgSrc] = useState(Pen); // Default image
  
     // Function to change image when hovering
     const hdleMouseEnter = () => {
       setImgSrc(Pen1); // Change to the second image
     };
   
     // Function to reset image when mouse leaves
     const hdleMouseLeave = () => {
       setImgSrc(Pen); // Change back to the first image
     };
  return (
      <div className="form-container">
        <motion.div
        className="form"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}>
          <motion.div className="form-text" variants={dropIn} >
        <h1>WE LISTEN TO YOUR IDEAS</h1>
        <p className="ideas">
          Building alongside our community helps shape our product in ways that
          ensure we deliver the best trading experience to our users.
        </p>
        <p className="text-break ideas">
          If you have a suggestion for a new feature on the bot, please fill the
          form <a href="#">below.</a>
        </p>
        <button
                  onMouseEnter={hdleMouseEnter}
                  onMouseLeave={hdleMouseLeave}
        >
          <p className="ptag">FILL FORM</p>
          <img src={imgSrc} alt="" />
        </button>
      </motion.div>
      <motion.div className="form-img" variants={dropIn}>
        <img src={Blackbot} alt="" />
      </motion.div>
    </motion.div>
      </div>
  );
};

export default Form;
