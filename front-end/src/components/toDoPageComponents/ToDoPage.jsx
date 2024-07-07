import React, { useState, useEffect } from 'react'
import TaskForm from './TaskForm'
import TaskColumn from './TaskColumn'
import './ToDoPage.css'
import { useNavigate } from 'react-router-dom';

const oldTasks = localStorage.getItem("tasks")
console.log(oldTasks)
const ToDoPage = () => {
    const navigate = useNavigate();
    const handleNavHome = () => {
        navigate('/')
    };
    const [tasks, setTasks] = useState(JSON.parse(oldTasks) || [])

    // what to run, when to run
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])
    const handleDelete = (taskIndex) => {
        const newTasks = tasks.filter((task, index) => index !== taskIndex)
        setTasks(newTasks)
    }


    console.log("task", tasks)
    return (
        <div>
            <button onClick={handleNavHome} className='back_home_page'>🏠</button>
            <TaskForm setTasks={setTasks} />
            <div className='app_main'>
                <TaskColumn columnName="To do" icon="🆕" tasks={tasks} status="todo" handleDelete={handleDelete} />
                <TaskColumn columnName="Doing" icon="🌟" tasks={tasks} status="doing" handleDelete={handleDelete} />
                <TaskColumn columnName="Done" icon="✅" tasks={tasks} status="done" handleDelete={handleDelete} />
            </div>
        </div>
    )
}

export default ToDoPage