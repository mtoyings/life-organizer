import React from 'react'
import "./TaskColumn.css"
import TaskCard from './TaskCard'

const TaskColumn = ({ columnName, icon, tasks, status, handleDelete }) => {
    // const { columnName, icon } = props
    // console.log(Todo)
    return (
        <section className='task_column'>
            <p className='task_column_heading' style={{ fontSize: '20px' }}>
                {icon} {columnName}
            </p>
            {tasks.map((task, index) => task.status === status &&
                < TaskCard key={index}
                    title={task.task}
                    description={task.description}
                    tags={task.tags}
                    deadline={task.deadline}
                    handleDelete={handleDelete}
                    index={index} />)}
        </section>
    )
}

export default TaskColumn