import React from 'react';
import TaskImg from "../assets/Task-img.png";

function Tasks() {
    const handleClick = () => {
        window.open("https://github.com/kowsalyalalitha/my-git", "_blank");
      };

  return (
    <div>
    <a href="https://github.com/kowsalyalalitha/my-git" target="_blank" rel="noopener noreferrer" className="task-link"></a>
     <img src={TaskImg} className="taskImg-style" alt="task-img" onClick={handleClick} />
    <div className="Task-style" onClick={handleClick}>Tasks</div>
    </div>
  );
}

export default Tasks;