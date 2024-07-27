import React from 'react';
import LinksImgs from "../assets/Link-icon.png";
import PlusImg from "../assets/Plus-icon.png";
import BoyImgs from "../assets/Boy-icon.png";
import GirlImgs from "../assets/Girl-icon.png";
import Boys1Imgs from "../assets/Boys1-icon.png";
import Boys2Imgs from "../assets/Boys2-icon.png";
import RoundImgs from "../assets/Round-icon.png";
import plus2Imgs from "../assets/+2-icon.png";
import FilterImgs from "../assets/Filter-icon.png";
import TodayImgs from "../assets/Today-icon.png";
import ShareImgs from "../assets/Share-icon.png";
import rightImgs from "../assets/rightUnder-icon.png";
import DoubleIcon from "../assets/Double-icon.png";
import MenusImgs from "../assets/menu-icon.png";

function LinksImgsExtra() {
  return (
    <>
    <div className="Links-container">
     <img src={LinksImgs} className="links-img-style" alt="Links-pic" />
     <img src={PlusImg} className="plus-style" alt="plus-img" />
     <h6 className="invite-style">INVITE</h6>


     <img src={BoyImgs} className="Boy-img-style" alt="boy-pic" />
     <img src={GirlImgs} className="Girl-img-style" alt="girl-pic" />
     <img src={Boys1Imgs} className="Boys1-img-style" alt="boys1-pic" />
     <img src={Boys2Imgs} className="Boys2-img-style" alt="boys2-pic" />
     <img src={RoundImgs} className="Round-img-style" alt="Round-pic" />
     <img src={plus2Imgs} className="Plus2-img-style" alt="plus2-pic" />


     <img src={FilterImgs} className="Filter-Css" alt="filter-pic" />
     <img src={TodayImgs} className="Today-Css" alt="today-pic" />


     <img src={ShareImgs} className="share-sty" alt="share-pic" />
     <img src={rightImgs} className="Right-sty" alt="right-pic" />
     <img src={DoubleIcon} className="Double-sty" alt="double-pic" />
     <img src={MenusImgs} className="Menus-sty" alt="menu-pic" />
    </div>
    </>
  )
}

export default LinksImgsExtra;