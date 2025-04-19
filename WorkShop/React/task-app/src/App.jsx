import { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks,setTasks] = useState([]);

  const createTask = (title,description,important) => {
    setTasks([...tasks,{
      id:Math.ceil(Math.random()*9999999),
      title,
      description,
      important
    }])
    console.log(tasks);
  }

  const deleteTask = (id) => {
    const deleteAfterTasks = tasks.filter(task => task.id !== id);
    setTasks(deleteAfterTasks);
  }

  const updateTask = (id,title,description,important) => {
    const updateAfterTasks = tasks.map(task => {
      if(task.id === id){
        return {id,title,description,important}
      }
      return task;
    })
    setTasks(updateAfterTasks);
  }

  return (
  <div id="app">
    <div id="task-form-container">
      <TaskForm createTask={createTask}/>
    </div>
    <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}/>
  </div>
  )
}

export default App;
