import iconError from "../imgs/close.png";
import iconSuccess from '../imgs/check.png'
import "./Banner.css";

export const Banner = ({ text, type }) => {
  return (
    <>
      {type === "error" ? (
        <div className="banner--wrapper">
          <img src={iconError} alt="error icon" className="banner--icon" />
          <span className="banner--text">{text}</span>
        </div>
      ) : (
        <div className="banner--wrapper success">
          <img src={iconSuccess} alt="error icon" className="banner--icon" />
          <span className="banner--text">{text}</span>
        </div>
      )}
    </>
  );
};
