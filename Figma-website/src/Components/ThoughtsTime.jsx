// import React from 'react';
// import ThougTime from "../assets/lamp-on.png";
// import UnionImg from "../assets/Union.png";

// function ThoughtsTime() {
//   return (
//     <>
//     <div className="Thought-Container">
//         <img src={UnionImg} className="Union-Css" alt="union-pic" />
//         <img src={ThougTime} className="Thoug-Css" alt="lamp-pic" />
//     <div className="Thought-style">Thoughts Time</div>
//     <p className="thought-para-style">
//     We don’t have any notice for <br /> you, till then you can share <br /> your thoughts with your <br /> peers.
//     </p>
//     <button className="mess-Thoug-style">Write a message</button>
//     </div>
//     </>
//  )
// }

// export default ThoughtsTime;


import React, { useState } from 'react';
import ThougTime from "../assets/lamp-on.png";
import UnionImg from "../assets/Union.png";

function ThoughtsTime() {
  const [messageOpen, setMessageOpen] = useState(false);
  const [messageText, setMessageText] = useState('');

  const toggleMessageInput = () => {
    setMessageOpen(!messageOpen);
    if (!messageOpen) {
      // Reset message text when opening the input
      setMessageText('');
    }
  };

  const handleMessageChange = (event) => {
    setMessageText(event.target.value);
  };

  const handleMessageSubmit = (event) => {
    event.preventDefault();
    // Handle message submission logic here (e.g., send message to backend)
    console.log('Message submitted:', messageText);
    // Close message input after submission
    setMessageOpen(false);
    // Optionally, clear message text
    setMessageText('');
  };

  return (
    <>
      <div className="Thought-Container">
        <img src={UnionImg} className="Union-Css" alt="union-pic" />
        <img src={ThougTime} className="Thoug-Css" alt="lamp-pic" />
        <div className="Thought-style">Thoughts Time</div>
        <p className="thought-para-style">
          We don’t have any notice for <br /> you, till then you can share <br /> your thoughts with your <br /> peers.
        </p>
        <button className="mess-Thoug-style" onClick={toggleMessageInput}>
          Write a message
        </button>
      </div>

      {/* Conditionally render message input based on messageOpen state */}
      {messageOpen && (
        <div className="message-input-container">
          <form onSubmit={handleMessageSubmit}>
            <textarea
              value={messageText}
              onChange={handleMessageChange}
              placeholder="Write your message..."
              className="message-input"
              autoFocus
              required
            />
            <button type="submit" className="send-button">Send</button>
            <button type="button" className="cancel-button" onClick={toggleMessageInput}>Cancel</button>
          </form>
        </div>
      )}
    </>
  );
}

export default ThoughtsTime;
