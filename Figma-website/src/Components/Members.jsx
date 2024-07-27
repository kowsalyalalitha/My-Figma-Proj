// Groups.js
import React from 'react';
import GroupImg from "../assets/Group-img.png";

function Members() {
  const whatsappGroupLink = "https://chat.whatsapp.com/IYBVAxjBO9wIW2SU6RdMRj"; 

  const handleClick = () => {
    window.open(whatsappGroupLink, "_blank");
  };

  return (
    <div>
    <a href={whatsappGroupLink} target="_blank" rel="noopener noreferrer" className="group-link">
      <div onClick={handleClick}>
        <img src={GroupImg} className="GroImg-style" alt="group-imgs" />
        <div className="Group-style">Groups</div>
      </div>
    </a>
    </div>
  );
}

export default Members;
