import "./Nads.css";
import meeting from "../../assets/meeting.png"

const Nads = () => {
  return (
    <div className="nads">
      <div className="nads-text">
        <h1>BUILT FOR NADS, BY NADS</h1>
        <p>
          Building alongside our community helps shape our product in ways that
          ensure we deliver the best trading experience to our users.
        </p>
        <p className="text-break">
          If you have a suggestion for a new feature on the bot, please fill the
          form <a href="#">below.</a>
        </p>
      </div>
      <div className="nads-img">
        <img src={meeting} alt="" />
      </div>
    </div>
  );
};

export default Nads;
