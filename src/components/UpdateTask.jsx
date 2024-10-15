import React, { useState } from 'react';


import { Link } from 'react-router-dom';
function UpdateTask() {
  const [empId, setEmpId] = useState('');
 



  return (
    <div className="update-task-container">
      <h2 className="update-task-title">Update a Task</h2>
    
      <input
        type="text"
        placeholder="Enter Task ID"
        value={empId}
        onChange={(e) => setEmpId(e.target.value)}
        className="update-task-input"
      />
      <Link to={"/update-taskbyId/" + empId} className="home-button">
        Update Task
      </Link>
     
    </div>
  );
}

export default UpdateTask;
