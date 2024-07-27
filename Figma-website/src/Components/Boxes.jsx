import React from 'react';
import FirstBoxImgs from "../assets/1BigBox-box.png";
import TogoText from "../assets/ToGo-icon.png";
import FourNum from "../assets/4-icon.png";
import plusIcon from "../assets/+2-icon.png";
import VectorLine from "../assets/Vector-line.png";
import WhiteBox from "../assets/WhiteBox-icon.png";
import LowText from "../assets/Low.png";
import ThreeDots from "../assets/_. ..png";
import Texting from "../assets/Brainstorming.png";
import PicIcons from "../assets/Pictures1st-icon.png";
import SecondBoxes from "../assets/2-Box-icon.png";
import HighImgs from "../assets/High-icon.png";
import SecondPic from "../assets/Pict 2nd-icon.png";
import ResearchImgs from "../assets/Research.png";
import Wireframes from "../assets/Wireframes-icon.png";
import Onprogress from "../assets/OnProgress-Text.png";
import ThreeRound from "../assets/ThreeRound-num.png";
import VectorSec from "../assets/Vector2-line.png";
import OnBoard from "../assets/Onborad-pics.png";
import FourthPic from "../assets/Fourth-Pic.png";
import DoneImgs from "../assets/Done-Text.png";
import SecPicImgs from "../assets/2picpic-num.png";
import Vectorthree from "../assets/Vector3-pic.png";
import SixImgs from "../assets/SixImgs.png";
import SevenImgs from "../assets/SevenImgs.png"

function Boxes() {
  return (
    <>
    {/* 1st Tables */}
    <div className="Boxes-Container">
        <img src={FirstBoxImgs} className="bbf-Css" alt="first-pic" />
        <img src={TogoText}  className="Togo-Css" alt="togo-pic" />
        <img src={FourNum} className="Four-Css"
        alt="4-pic" />
        <img src={plusIcon} className="Plus-Css" alt="plus-pic" />
        <img src={VectorLine} className="vectorline-Css" alt="vector-pic" />

        {/* Boxes Icons */}
        <img src={WhiteBox} className="White-Box-Sty" alt="white-pic" />
        <img src={LowText} className="Lowtext-Sty" alt="low-pic" />
        <img src={ThreeDots} className="Three-Dots-Sty" alt="threeDot-pic" />
        <img src={Texting} className="text-Sty" alt="text" />
        <p className="Text-Para">Brainstorming brings team members' diverse <br /> experience into play. </p>
        <img src={PicIcons} className="Pic-icons-sty" alt="Pic-pic" />

        {/* 2nd Box */}
        <img src={SecondBoxes} className="Sec-Sty" alt="Sec-pic" />
        <img src={HighImgs} className="High-sty" alt="High-pic" />
        <img src={ThreeDots} className="three-sty" alt="threeDot-pic" />
       <img src={ResearchImgs} className="research-sty" alt="research" />
       <p className="second-Para">Brainstorming brings team members' diverse <br /> experience into play. </p>
       <img src={SecondPic} className="Second-Pic-sty" alt="sec-pic" />

      {/* 3rd Boxes */}

      <img src={Wireframes} className="Wireframes" alt="wire-pic" />


      {/* 2nd Tables */}
      <img src={FirstBoxImgs} className="bbf-Style" alt="first-pic" />
      <img src={Onprogress} className="onProgress-sty" alt="onprog-pic" />
      <img src={ThreeRound} className="three-Round-sty" alt="3-pic" />
      <img src={VectorSec} className="vectorsec-sty" alt="vector-2-pic" />

      <img src={OnBoard} className="onBoard-pics" alt="onboard-pic" />
      <img src={FourthPic} className="Fourthpic-sty" alt="four-pic" />


      {/* 3rd Tables */}
      <img src={FirstBoxImgs} className="bbfthree-Style" alt="first-pic" />
      <img src={DoneImgs} className="done-text-style" alt="done-pic" />
      <img src={SecPicImgs} className="secimgs-style" alt="secondpictures" />
      <img src={Vectorthree} className="vector-three" alt="vect-3-pic" />
      <img src={SixImgs} className="six-pic-style" alt="six-pic" />
      <img src={SevenImgs} className="seven-pic-style" alt="sev-pic" />
    </div>
    </>
  )
}

export default Boxes;