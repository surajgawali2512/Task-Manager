import React,{useEffect,useState} from "react";
import { getTaskById } from "./Task_Service";
import {useParams} from "react-router-dom";
import { updateTask } from "./Task_Service";

function UpdateTaskById(){
    const[taskDetails ,setTaskDetails]=useState({
       taskName:"",
       taskStatus:""
    });
    const {empId}=useParams();
    useEffect(()=>{
        getTaskById(empId)
.then((resp)=>{
    console.log(resp);
    setTaskDetails(resp);
})
.catch((error)=>{
console.log(error);
}
);
      },
[]);
const handleChange=(e)=>{
    const{name,value}=e.target;
    setTaskDetails({...taskDetails,[name]: value});
};

const handleSubmit=()=>{
    updateTask(taskDetails)
    .then((resp)=>{
        console.log(resp);
        console.log("success");
}) 
.catch((error)=>{
    console.log(error);
    console.log("Error");
})
};
return(
    <div>
    <h2 className="add-task-title">Update Task</h2>
     <input type="text"
     name="taskName"
     placeholder="task name"
     value={empId}
     readOnly
     className="add-task-input" />
     <br/>
     <input type="text"
      name="taskName"
      placeholder="taskname"
      value={taskDetails.taskName}
      onChange={handleChange}
       className="add-task-input"
      id="" />
      <br/>
      <input type="text"
      name="taskStatus"
      placeholder="task Status"
      value={taskDetails.taskStatus}
      onChange={handleChange}
       className="add-task-input"
      id="" />
      <br/>
      <button onClick={handleSubmit}>Update Task</button>
    </div>
)
}
export default UpdateTaskById;