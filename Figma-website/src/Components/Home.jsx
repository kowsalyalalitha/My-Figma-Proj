import React from 'react';
import HomeImg from "../assets/Home-img.png";

function Home() {

  const handleImageClick = () => {
    window.open('https://greensock.com/', '_blank'); 
  };

  return (
    <>
     <a href="https://greensock.com/" target="_blank" rel="noopener noreferrer" onClick={handleImageClick}>
    <img src={HomeImg} className="Home-Imgsty" alt="Home" />
    </a>
    
    <a href="https://greensock.com/" target="_blank" rel="noopener noreferrer" onClick={handleImageClick}>
    <div className="Home-style">
     Home
    </div>
    </a>
    </>
  );
}

export default Home;