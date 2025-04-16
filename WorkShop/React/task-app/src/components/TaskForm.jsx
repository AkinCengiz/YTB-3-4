import React, { useState } from 'react'

function TaskForm({createTask}) {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [important, setImportant] = useState(false);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
        // console.log(title)
    }
    function handleDescriptionChange(e){
        setDescription(e.target.value);
        // console.log(description)
    }
    const handleImportantChecked = (e) => {
        setImportant(e.target.checked);
        // console.log(important)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(title,description, e.target);
        createTask(title,description,important);
        setDescription("");
        setImportant(false);
        setTitle("");
    }


  return (
    <form id='task-form' onSubmit={handleSubmit}>
        <h2 id='form-title'>Create Task</h2>
        <div className="form-group">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" value={title} className="form-control" id="title" onChange={handleTitleChange} />
        </div>
        <div className="form-group">
            <label htmlFor="description" className="form-label">Descripton</label>
            <textarea name="description" value={description} id="description" className='form-control' rows={5} onChange={handleDescriptionChange}></textarea>
        </div>
        <div className="form-group">
            <label htmlFor="important" className="form-label">Important 
                <input type="checkbox" name='important' id='important' className='form-check' checked={important} onChange={handleImportantChecked} />
            </label>
        </div>
        <button className='form-button create-button'>Create</button>
    </form>
  )
}

export default TaskForm