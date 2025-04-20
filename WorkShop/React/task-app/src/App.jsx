// import { useEffect, useState } from "react";
// import axios from "axios"
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

//const apiUrl = "http://localhost:3000/tasks";
function App() {
//   const [tasks,setTasks] = useState([]);
// //async
//   const createTask = async (title,description,important) => {
//     const response = await axios.post(apiUrl,{title,description,important });
//     setTasks([...tasks,response.data]);
//     // setTasks([...tasks,{
//     //   id:Math.ceil(Math.random() * 9999999),
//     //   title,
//     //   description,
//     //   important
//     // }])
//     //console.log(response.data);
//   }

//   const deleteTask = async(id) => {
//     // const deleteAfterTasks = tasks.filter(task => task.id !== id);
//     // setTasks(deleteAfterTasks);
//     await axios.delete(apiUrl+`/${id}`);
//     getTasks();
//   }

//   const getTasks = async() => {
//     const response = await axios.get(apiUrl);
//     // console.log(response.data);
//     setTasks(response.data)
//   }

  
//   useEffect(() => {
//     getTasks();
//   },[]);
 

//   const updateTask = async(id,title,description,important) => {
//     await axios.put(apiUrl+`/${id}`,{
//       title,
//       description,
//       important
//     });
//     getTasks();
//     // const updateAfterTasks = tasks.map(task => {
//     //   if(task.id === id){
//     //     return {id,title,description,important}
//     //   }
//     //   return task;
//     // })
//     // setTasks(updateAfterTasks);
//   }

  return (
  <div id="app">
    <div id="task-form-container">
      <TaskForm />
    </div>
    <TaskList />
  </div>
  )
}

export default App;
