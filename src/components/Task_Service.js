import { myAxios } from "./Helper";

export const addTaskData = (task) => {

 console.log(task)
  return myAxios.post("/task/addTasks", task).then((response) => response.data);
   
};

export const getAllTaskData = () =>{ 
  return myAxios.get("/task/getAllTasks")
  .then((response) => response.data);
 // .then((response) => response.json());


 };

 export const getTaskById=(id)=>{
  return myAxios.get("/task/getTaskById/"+id)
  .then((response)=>response.data);
}

 export const deleteTask =(id)=>{
 
  return myAxios.delete("/task/deleteTaskById/"+id )
 // .then((response) => response.data);
 };

 

 export const updateTask = (task) => {


  return myAxios.put("/task/updateTask/"+task.empId, task)
  .then((response) => response.data);

};

