import React from 'react'

function TaskCard({task}) {
  return (
    <div className="task-card-container">
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
                <button className='card-button update-button'>Update</button>
                <button className='card-button delete-button'>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default TaskCard