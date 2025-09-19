import "./News.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
// import Img from "../../assets/news.png";
import faq from "../../assets/FAQ.png"
// import arrow from '../../assets/more.png'

const News = () => {
    const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.35, triggerOnce: true });

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
//   const slideInLeft = {
//   hidden: { opacity: 0, x: -50 }, // Start 50px to the left
//   visible: {
//     opacity: 1,
//     x: 0,                         // Slide to normal position
//     transition: {
//       duration: 1.5,
//       ease: "easeOut",
//     },
//   },
// };

  return (
    <div className="news">
      {/* <motion.div
        className="new-center"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        >
        <h1>Latest From The Block</h1>
        <motion.div className="new-blog" variants={slideInLeft}>
          <div className="blog">
            <h2>Block Trading</h2>
            <p>Building alongside our community helps shape our product in ways that ensure.</p>
            <div className="blog-img">
              <img src={Img} alt="" />
                </div>
                <div className="more">
                <h3>READ NOW. READ NOW</h3>
                </div>
            </div>
            <div className="blog blog-more">
                <h2>Social Layers</h2>
                <p>Building alongside our community helps shape our product in ways that ensure.</p>
                <div className="blog-img">
                    <img src={Img} alt="" />
                </div>
                <div className="more">
                <h3>READ NOW. READ NOW</h3>
                </div>
                <div className="move">
              <img src={arrow}alt="" />
            </div>
            </div>
        </motion.div>
      </motion.div> */}
      <motion.div
        className="new-center"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        >
           <div className="faq-icon">
        <img src={faq} alt="" />
      </div>
        </motion.div>
    </div>
  )
}

export default News
