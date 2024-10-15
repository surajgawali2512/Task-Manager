import React, { useState } from 'react';
import './AddTask.css'
import { addTaskData } from './Task_Service';
function AddTask() {
  const [task, setTask] = useState({ taskName: '', taskStatus: '' });
  const [message, setMessage] = useState(''); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = () => {
    console.log('TAsk added:', task);

    addTaskData(task)
      .then((resp) => {
        console.log(resp);
        setMessage('task added successfully!'); 
        setTask({ taskName: '', taskStatus: '' });  
      })
      .catch((error) => {
        console.error('Error adding task:', error);
        setMessage('Failed to add task. Please try again.'); 
      });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Add a New task</h2>
      <input
        type="text"
        name="taskName"
        placeholder="task Name"
        value={task.taskName}
        onChange={handleChange}
        style={{ margin: '5px' }}
      />
      <select name="taskStatus" value={task.taskStatus} onChange={handleChange}>
        <option value={true}>Completed</option>
        <option value={false}>Incomplete</option>
      </select>
      <button onClick={handleSubmit} style={{ marginTop: '10px' }}>Add Task</button>

      {/* Display success/error message */}
      {message && <p style={{ color: message.includes('successfully') ? 'green' : 'red' }}>{message}</p>}
    </div>
  );
}

export default AddTask;
