import React from 'react'
import "./TaskColumn.css"
import TaskCard from './TaskCard'

const TaskColumn = ({ columnName, icon, tasks, status, handleDelete }) => {
    // const { columnName, icon } = props
    // console.log(Todo)
    return (
        <section className='task_column'>
            <h2 className='task_column_heading'>
                {icon} {columnName}
            </h2>
            {tasks.map((task, index) => task.status === status &&
                < TaskCard key={index}
                    title={task.task}
                    tags={task.tags}
                    handleDelete={handleDelete}
                    index={index} />)}
        </section>
    )
}

export default TaskColumn