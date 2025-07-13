import "./Nads.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import meeting from "../../assets/meeting.png"

const Nads = () => {
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
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
   <div className="container">
           <motion.div
        className="nads"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
      <motion.div className="nads-text" variants={dropIn} >
        <h1>BUILT FOR NADS, BY NADS</h1>
        <p>
          Building alongside our community helps shape our product in ways that
          ensure we deliver the best trading experience to our users.
        </p>
        <p className="text-break">
          If you have a suggestion for a new feature on the bot, please fill the
          form <a href="#">below.</a>
        </p>
      </motion.div>
      <motion.div className="nads-img" variants={dropIn} >
        <img src={meeting} alt="" />
      </motion.div>
    </motion.div>
   </div>
  );
};

export default Nads;
