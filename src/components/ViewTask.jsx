import React, { useState, useEffect } from 'react';
import { getAllTaskData } from './Task_Service';
import './ViewTask.css';

function ViewTask() {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    getAllTaskData()
      .then((resp) => {
        setTaskList(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>EmpId</th>
            <th>Task Name</th>
            <th>Task Status</th>
          </tr>
        </thead>
        <tbody>
          {taskList.map((task, index) => (
            <tr key={index}>
              <td>{task.empId}</td>
              <td>{task.taskName}</td> {/* Corrected field name */}
              <td>{task.taskStatus ? 'Completed' : 'Incomplete'}</td> {/* Adjusted for boolean value */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewTask;
