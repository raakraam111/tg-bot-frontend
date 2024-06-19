import React from "react";
import "../css/Card.css";
import images from "../constants/images";

const Card = ({ icon, title, description, progress }) => {
  return (
    // <div className="card">
    //   <img src={icon} alt="Icon" />
    //   <div className="card-title">{title}</div>
    //   {description && <div className="card-description">{description}</div>}
    //   {progress !== undefined && (
    //     <div className="card-progress">
    //       <div className="card-progress-bar" style={{ width: `${progress}%` }}></div>
    //     </div>
    //   )}
    // </div>

    <div className="card">
      <div className="container-card ">
        {/* <div className="cloud front">
      <span className="left-front"></span>
      <span className="right-front"></span>
    </div> */}
        {/* <span className="sun sunshine"></span> */}
        {/* <span className="sun"></span> */}
        {/* <div className="cloud back">
      <span className="left-back"></span>
      <span className="right-back"></span>
    </div> */}
        {/* <img src={images.firebow} width="100" height="100" /> */}
      </div>

      <div className="card-header">
        <span>
          Fire Wapos
          <br />
        </span>
        {/* <span>March 13</span> */}
      </div>

      <span className="temp">1</span>

      <div className="temp-scale">
        <span>Celcius</span>
      </div>
    </div>
  );
};

export default Card;
