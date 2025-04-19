import React, { useState } from 'react'

function TaskForm({createTask,task,updateTask}) {
    const [title,setTitle] = useState(task ? task.title : "");
    const [description,setDescription] = useState(task ? task.description : "");
    const [important, setImportant] = useState(task ? task.important : false);

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
        if(task){
            updateTask(task.id,title,description,important)
        }else{
            createTask(title,description,important);
        }
        //console.log(title,description, e.target);
        setDescription("");
        setImportant(false);
        setTitle("");
    }


  return (
    <form id='task-form' onSubmit={handleSubmit}>
        <h2 id='form-title'>{task ? "Update Task" : "Create Task"}</h2>
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
        <button className={task ? "form-button update-button" : "form-button create-button"}>{task ? "Update" :"Create" }</button>
    </form>
  )
}

export default TaskForm