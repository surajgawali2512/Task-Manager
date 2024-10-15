import React, { useState,useEffect } from 'react';
import { getAllTaskData } from './Task_Service';
import './ViewTask.css'
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
            <th>Task</th>
            <th>TaskStatus</th>
          </tr>
        </thead>
        <tbody>
          {taskList.map((task, index) => (
            <tr>
              <td>{task.empId}</td>
              <td>{task.task}</td>
              <td>{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

  
    </div>
  );
}

export default ViewTask;


