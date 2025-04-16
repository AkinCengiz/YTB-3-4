import React from 'react'

function TaskForm() {
  return (
    <form id='task-form'>
        <h2 id='form-title'>Create Task</h2>
        <div className="form-group">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" />
        </div>
        <div className="form-group">
            <label htmlFor="description" className="form-label">Descripton</label>
            <textarea name="description" id="description" className='form-control' rows={5}></textarea>
        </div>
        <div className="form-group">
            <label htmlFor="important" className="form-label">Important 
                <input type="checkbox" name='important' id='important' className='form-check' />
            </label>
        </div>
        <button className='form-button create-button'>Create</button>
    </form>
  )
}

export default TaskForm