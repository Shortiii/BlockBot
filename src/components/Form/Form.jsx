import "./Form.css";
import { useState } from "react";
import Pen from "../../assets/Pen.png";
import Pen1 from '../../assets/pen2.png'
import Blackbot from "../../assets/BlockBot Icon.png";

const Form = () => {
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
    <div className="form">
      <div className="form-text">
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
      </div>
      <div className="form-img">
        <img src={Blackbot} alt="" />
      </div>
    </div>
  );
};

export default Form;
