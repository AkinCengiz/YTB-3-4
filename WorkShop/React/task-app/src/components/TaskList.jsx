import React from 'react'
import TaskCard from './TaskCard'

function TaskList({tasks}) {
  return (
    <div id='task-list'>
        {
            tasks.map((task) => <TaskCard task={task} key={task.id} />)
        }
    </div>
  )
}

export default TaskList