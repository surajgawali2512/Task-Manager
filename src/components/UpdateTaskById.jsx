import React, { useEffect, useState } from "react";
import { getTaskById, updateTask } from "./Task_Service";
import { useParams } from "react-router-dom";

function UpdateTaskById() {
  const [taskDetails, setTaskDetails] = useState({
    taskName: "",
    taskStatus: "",
  });
  const [message, setMessage] = useState(""); // State for success/error message
  const { empId } = useParams();

  useEffect(() => {
    getTaskById(empId)
      .then((resp) => {
        console.log(resp);
        setTaskDetails(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [empId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskDetails({ ...taskDetails, [name]: value });
  };

  const handleSubmit = () => {
    updateTask(taskDetails)
      .then((resp) => {
        console.log(resp);
        console.log("success");
        setMessage("Task updated successfully!"); // Set success message
      })
      .catch((error) => {
        console.log(error);
        console.log("Error");
        setMessage("Failed to update task. Please try again."); // Set error message
      });
  };

  return (
    <div>
      <h2 className="add-task-title">Update Task</h2>
      <input
        type="text"
        name="empId"
        placeholder="Task ID"
        value={empId}
        readOnly
        className="add-task-input"
      />
      <br />
      <input
        type="text"
        name="taskName"
        placeholder="Task Name"
        value={taskDetails.taskName}
        onChange={handleChange}
        className="add-task-input"
      />
      <br />
      <input
        type="text"
        name="taskStatus"
        placeholder="Task Status"
        value={taskDetails.taskStatus}
        onChange={handleChange}
        className="add-task-input"
      />
      <br />
      <button onClick={handleSubmit}>Update Task</button>

      {/* Display success/error message */}
      {message && (
        <p style={{ color: message.includes("successfully") ? "green" : "red" }}>
          {message}
        </p>
      )}
    </div>
  );
}

export default UpdateTaskById;
