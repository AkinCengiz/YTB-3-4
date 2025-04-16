import "./App.css";
import TaskForm from "./components/TaskForm";

function App() {
  return (
  <div id="app">
    <div id="task-form-container">
      <TaskForm />
    </div>
    <div style={{width:"50%", height:"30vh",border:"1px solid black"}}></div>
  </div>
  )
}

export default App;
