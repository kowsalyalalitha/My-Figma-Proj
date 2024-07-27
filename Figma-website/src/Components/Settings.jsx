// Settings.js
import React from 'react';
import SettImg from "../assets/setting-img.png";

function Settings() {
  const handleSettingsClick = () => {

    window.open("https://www.google.com/preferences?lang=1&prev=https://www.google.com/search%3Fq%3Dsetttings%26oq%3Dsetttings%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOTILCAEQABgNGBMYgAQyBggCEEUYQDILCAMQABgNGBMYgAQyCwgEEAAYDRgTGIAEMgsIBRAAGA0YExiABDILCAYQABgNGBMYgAQyCwgHEAAYDRgTGIAEMgsICBAAGA0YExiABDILCAkQABgNGBMYgATSAQgzNDUwajBqN6gCCLACAQ%26sourceid%3Dchrome%26ie%3DUTF-8#languages=", "_blank");
  };

  return (
    <>    
    <div className="Settings-Container">
      <a href="" target="_blank" rel="noopener noreferrer" className="settings-link">
        <img src={SettImg} className="sett-Img-style" alt="Setting Icon" onClick={handleSettingsClick} />
        <div className="setting-style" onClick={handleSettingsClick}>Settings</div>
      </a>

     <div className="Settings-Down-Box"></div>

    </div>
    </>
 );
}

export default Settings;
