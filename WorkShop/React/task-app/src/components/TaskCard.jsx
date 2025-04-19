import React, { useState } from 'react'
import TaskForm from './TaskForm';

function TaskCard({task,deleteTask,updateTask}) {
    const [isUpdate,setIsUpdate] = useState(false);

    const handleDeleteTask = () => {
        deleteTask(task.id);
    }
    const handleClickUpdate = () => {
        setIsUpdate(true);
    }
    const handleSubmit = (id,title,description,important) => {
        setIsUpdate(false);
        updateTask(id,title,description,important);
    }
  return (
    <div className="task-card-container">
        {
            isUpdate ? <TaskForm task={task} updateTask={handleSubmit}/> :
            <div className="task-card">
                <div className="card-group">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">{task.title}</p>
                </div>
                <div className="card-group">
                    <h4 className="card-title">Description</h4>
                    <p className="card-text">{task.description}</p>
                </div>
                <div className="card-group">
                    <h4 className="card-title">Important</h4>
                    <p className="card-text">{task.important ? "Important" : "Normal"}</p>
                </div>
                <div className="button-group">
                    <button className='card-button update-button' onClick={handleClickUpdate}>Update</button>
                    <button className='card-button delete-button' onClick={handleDeleteTask}>Delete</button>
                </div>
            </div>
        }
    </div>
  )
}

export default TaskCard