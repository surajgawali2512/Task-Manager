import React, { useState } from 'react';
import { deleteTask } from './Task_Service';
import './DeleteTask.css'
function DeleteTask() {
  const [empId, setEmpId] = useState(''); 
  const [message, setMessage] = useState('');

  const handleDelete = () => {
    deleteTask(empId)
      .then((resp) => {
        console.log(resp);
        setMessage('Task deleted successfully!'); 
        setEmpId('');
      })
      .catch((error) => {
        console.error('Error deleting task:', error);
        setMessage('Failed to delete task. Please try again.');
      });
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2>Delete a Task</h2>
      <input
        type="text"
        placeholder="Enter Employee ID"
        value={empId}
        onChange={(e) => setEmpId(e.target.value)} 
      />
      <button onClick={handleDelete} style={{ marginLeft: '10px' }}>
        Delete Task
      </button>

     
      {message && <p style={{ color: message.includes('successfully') ? 'green' : 'red' }}>{message}</p>}
    </div>
  );
}

export default DeleteTask;
