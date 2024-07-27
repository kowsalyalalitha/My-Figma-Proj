import React, { useState } from 'react';
import calendarIcon from "../assets/Calendar-icon.jpg";
import quesIcon from "../assets/Question-icon.jpg";
import notifiIcon from "../assets/Notifi-icon.jpg";
import MyPic from "../assets/myPic-icon.jpg";
import arrowDown from "../assets/arrow-down.png";
import ArrowUp from "../assets/arrow-square-up-icon.png";
import CloseImg from "../assets/Close-icon.png";

const SearchComponent = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [editingHeader, setEditingHeader] = useState(false);
  const [headerText, setHeaderText] = useState('Mobile App'); // Initial header text
  const [editableFormVisible, setEditableFormVisible] = useState(false);
  const [newHeaderText, setNewHeaderText] = useState(headerText); // State to hold edited header text

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filter data based on search term
    const filteredResults = data.filter(item =>
      item.toLowerCase().includes(value.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  const toggleEditHeader = () => {
    setEditingHeader(!editingHeader); // Toggle editing mode
    setNewHeaderText(headerText); // Reset edited text to current headerText initially
  };

  const handleHeaderTextChange = (event) => {
    setNewHeaderText(event.target.value); // Update edited header text
  };

  const handleHeaderFormSubmit = (event) => {
    event.preventDefault();
    setHeaderText(newHeaderText); // Update headerText with new edited text
    setEditingHeader(false); // Exit editing mode
    setEditableFormVisible(false); // Close the editable form after saving
  };

  const toggleEditableForm = () => {
    setEditableFormVisible(!editableFormVisible);
  };

  const cancelEditHeader = () => {
    setEditingHeader(false); // Cancel editing mode
    setNewHeaderText(headerText); // Reset edited text to current headerText
    setEditableFormVisible(false); // Close the editable form
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for anything....."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul className="search-results">
        {searchResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
      
      <div className="calendar-styling">
        <img src={calendarIcon} className="cal-icon" alt="cal-imgs" />
        <img src={quesIcon} className="ques-icon" alt="Ques-imgs" />
        <img src={notifiIcon} className="notifi-icon" alt="Noti-imgs" />
        <h6 className="right-head">KowsalyaArun</h6>
        <p className="right-para">TamilNadu, India</p>
        <img src={MyPic} className="Mypic-style" alt="My-pic" />
        <img src={arrowDown} className="Aw-Down-style" alt="arrow-down-pic" />
      </div>   
      
      <div className="Header-Section">
         {editingHeader ? (
           <form onSubmit={handleHeaderFormSubmit}>
             <input
               type="text"
               value={newHeaderText}
               onChange={handleHeaderTextChange}
             />
             <button type="submit">Change</button>
             <button type="button" onClick={cancelEditHeader}>Cancel</button>
           </form>
         ) : (
           <>
             <h1 className="Header-Name" onClick={toggleEditHeader}>{headerText}</h1>
             <img
               src={ArrowUp}
               className="Arrow-up-style"
               alt="uparrow"
               onClick={toggleEditableForm} // Open editable form
             />
           </>
         )}
      </div>
      
      {editableFormVisible && (
        <div className="overlay">
          <div className="editable-form-popup">
            {/* Editable form content here */}
            <form id="editableForm" onSubmit={handleHeaderFormSubmit}>
              <h3 className="Box-open-Head">Edit Project Name</h3>
              <img src={CloseImg} className="close-style" alt="close-pic" onClick={toggleEditableForm} />
              <div className="underline-style"></div>
              <label htmlFor="name" className="name-style">Name</label><br />
              <input
                className="text-padding"
                type="text"
                id="name"
                name="name"
                placeholder="Mobile App"
                value={newHeaderText}
                onChange={handleHeaderTextChange}
              /><br />
              <div className="line-sty"></div>
              <button type="submit" className="save-style">Save</button>
              <button type="button" className="close-sty" onClick={toggleEditableForm}>Close</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
