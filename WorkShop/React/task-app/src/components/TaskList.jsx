import React from 'react'
import TaskCard from './TaskCard'
import { useContext } from 'react'
import { TaskContext } from '../contexts/TaskContext'

function TaskList() {
  const {tasks} = useContext(TaskContext)
  return (
    <div id='task-list'>
        {
            tasks.map((task) => <TaskCard task={task} key={task.id} />)
        }
    </div>
  )
}

export default TaskList