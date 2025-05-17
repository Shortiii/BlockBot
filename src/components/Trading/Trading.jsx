import "./Trading.css";
import illust from "../../assets/illustraion1.png";
import thunder from "../../assets/thunder1.png"
// import thunder from "../../assets/thunder.png";
import crown from "../../assets/crown.png";
import diamond from "../../assets/diamond.png";
import stroke from "../../assets/stroke.png";
import profile from "../../assets/profile.png";
import illust2 from "../../assets/illustraion2.png";
import question from "../../assets/question.png"

const Trading = () => {
  return (
    <div className="trading">
      <div className="trade-img">
        <img src={illust} alt="" />
      </div>
      <div className="trade-text">
        <h1>TRADE FIRST, TRADE FAST</h1>
        <p>
          With a focus on low latency, BlockBot delivers seamless trading UX to
          users, with access to user-specific trading data
        </p>
      </div>
      <div className="trade-group">
        <div className="group lightning">
          <img src={thunder} alt="" className="hover-image" />
          <h1>LIGHTNING FAST SWAPS</h1>
        </div>
        <div className="group group2 icon">
          <img src={stroke} alt="" />
          <h1>TRADING INSIGHTS</h1>
        </div>
        <div className="group group3 icon">
          <img src={crown} alt="" />
          <h1>THE SOCIAL LAYER</h1>
        </div>
        <div className="group icon">
          <img src={diamond} alt="" />
          <h1>USER-SPECIFIC TRADING DATA</h1>
        </div>
        <div className="group group5 icon">
          <img src={profile} alt="" />
          <h1>USER PROFILES</h1>
        </div>
        <div className="group icon click">
          <img src={question} alt="" />
          <h1>[REDACTED]</h1>
        </div>

      </div>
      <div className="trade-image">
        <img src={illust2} alt="" />
      </div>
    </div>
  );
};

export default Trading;
