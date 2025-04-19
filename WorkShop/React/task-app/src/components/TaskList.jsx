import React from 'react'
import TaskCard from './TaskCard'

function TaskList({tasks, deleteTask,updateTask}) {
  return (
    <div id='task-list'>
        {
            tasks.map((task) => <TaskCard task={task} key={task.id} deleteTask={deleteTask} updateTask={updateTask}/>)
        }
    </div>
  )
}

export default TaskList