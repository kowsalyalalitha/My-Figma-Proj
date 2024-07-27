// import React, { useState } from 'react';
// import Modal from "./Modal";
// import MessImg from "../assets/message-img.jpg";

// function Messages() {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalContent, setModalContent] = useState(null);

//   const openModal = (content) => {
//     setModalContent(content);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setModalContent(null);
//   };

//   return (
//    <>
//    <div className="message-icon">
//    <img src={MessImg} alt="message-icon" />
//    <div className="Messages-style">
//     Messages
//    </div>
//    </div>
//    </>
//   );
// }

// export default Messages;

// Messages.js
import React, { useState } from 'react';
import Modal from './Modal'; // Import the Modal component
import MessImg from "../assets/message-img.jpg";
import MessageForm from './MessageForm';

function Messages() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div className="messages-container">
        <div className="mess-style" onClick={() => openModal(<MessageForm onClose={closeModal} />)}>
            Messages
        </div>
      <img src={MessImg} className="clickable-image" alt="Message Icon" onClick={() => openModal(<MessageForm onClose={closeModal} />)} />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {modalContent}
      </Modal>
    </div>
  );
}

export default Messages;
