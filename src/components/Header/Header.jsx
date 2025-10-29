import "./Header.css";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Logo1 from "../../assets/BLOCKBOT.png";
import Logo2 from "../../assets/BLOCKBOT 1.png";
import Avatar from "../../assets/Group 10405.png";
import TelegramIcon from "../../assets/Telegram.png";
import TwitterIcon from "../../assets/Twitter.png";
import Image6 from "../../assets/Captions 6.png";
import Image7 from "../../assets/Captions 7.png";
import Image2 from "../../assets/Captions 2.png";
import Image1 from "../../assets/Captions 1.png";
import Image3 from "../../assets/Captions 3.png";
import Image4 from "../../assets/Captions 4.png";
import Image5 from "../../assets/Captions 5.png";
import TelegramArr from "../../assets/telegram arrow.png";
import Arrow from "../../assets/trading.png";
import Arrow2 from "../../assets/trader.png"
import Popup from "../../assets/Popup.png";
import Star1 from "../../assets/Star1.png";
import Star2 from "../../assets/Star2.png";

const Header = () => {
    const [logo1Loaded, setLogo1Loaded] = useState(false);
    const [logo2Loaded, setLogo2Loaded] = useState(false);

    const controlsMain = useAnimation();
    const controlsVector = useAnimation();
    const controlsImages = useAnimation();

    const [refMain, inViewMain] = useInView({ threshold: 0.45, // Trigger when 45% of it is in view
      triggerOnce: true });
    const [refImages, inViewImages] = useInView({ threshold: 0.55, // Trigger when 50% of it is in view
      triggerOnce: true });
    const [refVector, inViewVector] = useInView({ threshold: 0.75, // Trigger when 75% of it is in view
      triggerOnce: true });

    useEffect(() => {
  if (inViewMain) {
    controlsMain.start("visible");
  }
    }, [inViewMain, controlsMain]);

  useEffect(() => {
  if (inViewImages) {
    controlsImages.start("visible");
  }
    }, [inViewImages, controlsImages]);

  useEffect(() => {
  if (inViewVector) {
    controlsVector.start("visible");
  }
    }, [inViewVector, controlsVector]);



    const fadeSlide = (direction = 'left') => {
    const axis = direction === 'left' || direction === 'right' ? 'x' : 'y';
    const distance = direction === 'left' || direction === 'top' ? -100 : 100;
    return {
    hidden: { [axis]: distance, opacity: 0 },
    visible: { [axis]: 0, opacity: 1, transition: { duration: 1.9, ease: 'easeOut', } },
  };
};

    const [startFloating, setStartFloating] = useState(false);
    const handleFinalFallComplete = () => {
  if (!startFloating) {
    setStartFloating(true);
  }
};

    const fallDown = {
  hidden: { y: -100, opacity: 0 },
  visible: (customDelay) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      delay: customDelay,
    },
  }),
};

  const floatLoop = {
  y: [0, -10, 0],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

   // State to manage the current image source
   const [imageSrc, setImageSrc] = useState(Arrow); // Default image

   // Function to change image when hovering
   const handleMouseEnter = () => {
     setImageSrc(Arrow2); // Change to the second image
   };
 
   // Function to reset image when mouse leaves
   const handleMouseLeave = () => {
     setImageSrc(Arrow); // Change back to the first image
   };
 
  return (
    <div className="header">
      <div className="logo">
        <div className="logo-wrapper">
          {!logo1Loaded && <div className="logo-skeleton" />}
          <motion.img
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            src={Logo1}
            alt="Logo 1"
            className={`logo1 ${logo1Loaded ? 'visible' : 'hidden'}`}
            onLoad={() => setLogo1Loaded(true)}
          />
        </div>

        <div className="logo-wrapper">
          {!logo2Loaded && <div className="logo-skeleton" />}
          <motion.img
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            src={Logo2}
            alt="Logo 2"
            className={`logo2 ${logo2Loaded ? 'visible' : 'hidden'}`}
            onLoad={() => setLogo2Loaded(true)}
          />
        </div>
      </div>
      <motion.div  
      ref={refMain}
      className="main"
      variants={{
      hidden: { opacity: 0, y: 100 },
      visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut', staggerChildren: 0.5 },
    },
  }}
      initial="hidden"
      animate={controlsMain}>
         {/* Slide in from LEFT */}
      <motion.div
        className="first-main"
        variants={fadeSlide('left')}
      >
        <div className="vector" ref={refVector}>
           <motion.img
            src={Avatar}
            alt=""
            className="logo-img img"
            variants={fadeSlide('left')}
            initial="hidden"
            animate={controlsVector}
            transition={{ duration: 1, delay: 3.25, ease: 'easeOut' }}
  />
          <motion.div
              className="main-info"
              variants={fadeSlide('right')}
              initial="hidden"
              animate={controlsVector}
              transition={{ duration: 1, delay: 3.45, ease: 'easeOut' }} 

          >
            <h4>Join us</h4>
            <a href="https://t.me/Monad_BlockBot" target="blank">
              <img src={TelegramIcon} alt="Telegram Icon" />
            </a>
            <a href="https://x.com/The_BlockBot" target="blank">
              <img src={TwitterIcon} alt="Twitter Icon" />
            </a>
          </motion.div>

          {/* Your floating images */}
{startFloating ? (
  <motion.img
    src={Image6}
    alt=""
    className="images image6"
    animate={floatLoop}
  />
) : (
  <motion.img
    src={Image6}
    alt=""
    className="images image6"
    custom={0.65}
    variants={fallDown}
    initial="hidden"
    animate={controlsImages}
  />
)}


{startFloating ? (
  <motion.img
    src={Image7}
    alt=""
    className="images image7"
    animate={floatLoop}
  />
) : (
  <motion.img
    src={Image7}
    alt=""
    className="images image7"
    custom={0.55}
    variants={fallDown}
    initial="hidden"
    animate={controlsImages}
  />
)}


{startFloating ? (
  <motion.img
    src={Star1}
    alt=""
    className="stars star1"
    animate={floatLoop}
  />
) : (
  <motion.img
    src={Star1}
    alt=""
    className="stars star1"
    custom={0.9}
    variants={fallDown}
    initial="hidden"
    animate={controlsImages}
  />
)}


{startFloating ? (
  <motion.img
    src={Star2}
    alt=""
    className="stars star2"
    animate={floatLoop}
  />
) : (
  <motion.img
    src={Star2}
    alt=""
    className="stars star2"
    custom={0.85}
    variants={fallDown}
    initial="hidden"
    animate={controlsImages}
  />
)}


{startFloating ? (
  <motion.img
    src={Image5}
    alt=""
    className="images image5"
    animate={floatLoop}
  />
) : (
  <motion.img
    src={Image5}
    alt=""
    className="images image5"
    custom={1.05}
    variants={fallDown}
    initial="hidden"
    animate={controlsImages}
  />
)}


{startFloating ? (
  <motion.img
    src={Image4}
    alt=""
    className="images image4"
    animate={floatLoop}
  />
) : (
  <motion.img
    src={Image4}
    alt=""
    className="images image4"
    custom={1.85}
    variants={fallDown}
    initial="hidden"
    animate={controlsImages}
  />
)}


{startFloating ? (
  <motion.img
    src={Image3}
    alt=""
    className="images image3"
    animate={floatLoop}
  />
) : (
  <motion.img
    src={Image3}
    alt=""
    className="images image3"
    custom={2.05}
    variants={fallDown}
    initial="hidden"
    animate={controlsImages}
  />
)}


{startFloating ? (
  <motion.img
    src={Image2}
    alt=""
    className="images image2"
    animate={floatLoop}
  />
) : (
  <motion.img
    src={Image2}
    alt=""
    className="images image2"
    custom={1.65}
    variants={fallDown}
    initial="hidden"
    animate={controlsImages}
  />
)}


{startFloating ? (
  <motion.img
    src={Image1}
    alt=""
    className="images image1"
    animate={floatLoop}
  />
) : (
  <motion.img
    ref={refImages}
    src={Image1}
    alt=""
    className="images image1"
    custom={2.45}
    variants={fallDown}
    initial="hidden"
    animate={controlsImages}
     onAnimationComplete={handleFinalFallComplete}
  />
)}
        </div>
      </motion.div>

        <div className="next-main">
           {/* Slide in from TOP */}
        <motion.div
          className="second-main"
          variants={fadeSlide('top')}
        >
          <h1>
            Your Trusted Trading <br /> Buddy <span>on Monad</span>
          </h1>
          <p>Don't have Telegram yet?</p>
          <a href="https://telegram.org/" target="blank">
            Install Here <img src={TelegramArr} alt="" />
          </a>
          <a href="https://forms.gle/xdvKPsdMLPTAfu2B7" target="blank" className="trade-link">
          <button
            className="button"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <h1 className="but">START TRADING</h1>
            <img src={imageSrc} alt="" className="arrow" />
          </button>
          </a>
        </motion.div>
        {/* Slide in from RIGHT */}
        <motion.div
          className="third-main main-img"
          variants={fadeSlide('right')}
        >
          <motion.img
           src={Popup}
           alt=""
          initial={{ opacity: 1, scale: 1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          }}
            />

        </motion.div>
        </div>
       
      </motion.div>
    </div>
  );
};

export default Header;
