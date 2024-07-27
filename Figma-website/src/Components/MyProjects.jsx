// import React, { useState } from 'react';
// import ProjectImg from "../assets/Add-icon.png";

// function MyProjects() {
//   const [showNavOptions, setShowNavOptions] = useState(false);

//   const toggleNavOptions = () => {
//     setShowNavOptions(!showNavOptions);
//   };

//   return (
//     <div className="myProj-container">
//       <div className="myProj-header" onClick={toggleNavOptions}>
//         <img src={ProjectImg} className="M-P-Icon" alt="Img-icon" />
//         <div className="myProjct-style">MY PROJECTS</div>
//       </div>

//       {/* Conditionally render nav options based on showNavOptions state */}
//       {showNavOptions && (
//         <div className="nav-options-container">
//           <ul className="nav-options">
//             <li><span style={{ float: 'left' }}>Mobile App</span>
//             <span style={{ float: 'right',marginRight: '-10px'}}>&bull; &bull; &bull;</span></li>
//             <li>Website Redesign</li>
//             <li>Design System</li>
//             <li>Wireframes</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default MyProjects;

import React, { useState } from 'react';
import ProjectImg from "../assets/Add-icon.png";
import CloseImg from "../assets/Close-icon.png";

function MyProjects() {
  const [showNavOptions, setShowNavOptions] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');

  const toggleNavOptions = () => {
    setShowNavOptions(!showNavOptions);
  };

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  const handleProjectNameChange = (event) => {
    setProjectName(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Here you can handle form submission, e.g., save project details
    console.log('Project Name:', projectName);
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
    console.log('Description:', description);

    // Reset form fields and close form
    setProjectName('');
    setStartDate('');
    setEndDate('');
    setDescription('');
    setShowAddForm(false);
  };

  return (
    <div className="myProj-container">
      <div className="myProj-header" onClick={toggleNavOptions}>
        <img src={ProjectImg} className="M-P-Icon" alt="Img-icon" />
        <div className="myProjct-style">MY PROJECTS</div>
      </div>

      {/* Conditionally render nav options based on showNavOptions state */}
      {showNavOptions && (
        <div className="nav-options-container">
          <ul className="nav-options">
            <li><span style={{ float: 'left' }}>Mobile App</span>
            <span style={{ float: 'right', marginRight: '-10px'}} onClick={toggleAddForm}>&bull; &bull; &bull;</span></li>
            <li>Website Redesign</li>
            <li>Design System</li>
            <li>Wireframes</li>
          </ul>
        </div>
      )}

      {/* Conditionally render add form based on showAddForm state */}
      {showAddForm && (
        <div className="overlay">
          <div className="add-form-popup">
            <form onSubmit={handleFormSubmit}>
              <img src={CloseImg} className="close-style" alt="close-pic" onClick={toggleAddForm} />
              <h3 className="form-header">New Project</h3>
              <div className="Under-Line-style"></div>
              <div className="form-row">
                <label htmlFor="projectName">Name:</label>
                <input type="text" id="projectName" value={projectName} onChange={handleProjectNameChange} required />
              </div>
              <div className="form-row">
                <label htmlFor="startDate">Start Date:</label>
                <input type="date" id="startDate" value={startDate} onChange={handleStartDateChange} required />
              </div>
              <div className="form-row">
                <label htmlFor="endDate">End Date:</label>
                <input type="date" id="endDate" value={endDate} onChange={handleEndDateChange} required />
              </div>
              <div className="form-row">
                <label htmlFor="description">Description:</label>
                <textarea id="description" value={description} onChange={handleDescriptionChange} rows="4" required />
              </div>
              <div className="form-row">
                <button type="submit" className="submit-btn">Save</button>
                <button type="button" className="cancel-btn" onClick={toggleAddForm}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyProjects;
