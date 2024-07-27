import React, { useState } from "react";
import logoImage from "../assets/Logo-image.png";
import leftArrowImage from "../assets/Left-Arrow.png";
import rightArrowImage from "../assets/Right-Arrow.png";

function ProjectM() {
    const handleLeftArrowClick = () => {
      setIsMovedToLeft(true);
      setIsMovedToRight(false); // Reset right arrow state
    };
  
    const handleRightArrowClick = () => {
      setIsMovedToRight(true);
      setIsMovedToLeft(false); // Reset left arrow state
    };
  return (
    <div>
    <div className="project-m-container">
      <img src={logoImage} className="proj-img-style" alt="img" />
      <h2 className="project-m">Project M.</h2>
      <img
        src={leftArrowImage}
        className="left-arrow"
        alt="left-Img"
        onClick={handleLeftArrowClick}
      />
      <img
          src={rightArrowImage}
          className="right-arrow"
          alt="right-Img"
          onClick={handleRightArrowClick}
        />
    </div>

     <div className="box-style">
     <div className="underline-full-width">
     </div>
     <div className="underline-full-height">
     </div>
    </div>

    </div>
  );
}

export default ProjectM;
