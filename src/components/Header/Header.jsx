import "./Header.css";
import { useState } from "react";
import Logo1 from "../../assets/BLOCKBOT.png";
import Logo2 from "../../assets/BLOCKBOT 1.png";
import Avatar from "../../assets/Group 10405.png";
import TelegramIcon from "../../assets/Telegram.png";
import TwitterIcon from "../../assets/Twitter.png";
// import Vector from "../../assets/Vector.png";
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
        <img src={Logo1} alt="" className="logo1" />
        <img src={Logo2} alt="" className="logo2" />
      </div>
      <div className="main">
        <div className="first-main">
        <div className="vector">
        <img src={Avatar} alt="" className="logo-img img" />
        <div className="main-info ">
            <h4>Join us</h4>
            <a href="#" target="blank">
              <img src={TelegramIcon} alt="Telegram Icon" />
            </a>
            <a href="https://x.com/The_BlockBot" target="blank">
              <img src={TwitterIcon} alt="Twitter Icon" />
            </a>
          </div>
          <img src={Image6} alt="" className=" images image6" />
          <img src={Image7} alt="" className=" images image7" />
          <img src={Star1} alt="" className="stars star1" />
          <img src={Star2} alt="" className="stars star2" />
          <img src={Image5} alt="" className="images image5" />
          <img src={Image4} alt="" className=" images image4" />
          <img src={Image3} alt="" className=" images image3" />
          <img src={Image2} alt="" className=" images image2" />
          <img src={Image1} alt="" className=" images image1" />
        </div>
        </div>
        <div className="next-main">
        <div className="second-main">
          <h1>
            Your Trusted Trading <br/> Buddy <span>on Monad</span>
          </h1>
          <p>Don't have Telegram yet?</p>
          <a href="https://telegram.org/" target="blank">
            Install Here <img src={TelegramArr} alt="" />
          </a>
          <button className="button" 
          onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <h1 className="but">START TRADING</h1>
            <img src={imageSrc} alt="" className="arrow" />
          </button>
        </div>
        <div className="third-main main-img">
          <img src={Popup} alt="" />
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default Header;
