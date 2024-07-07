import React, { useState } from 'react'
import "./TaskForm.css"
import Tag from './Tag'

const TaskForm = ({ setTasks }) => {
    const [taskData, setTaskData] = useState({
        task: "",
        status: "todo",
        tags: []
    })


    const checkTag = (tag) => {
        return taskData.tags.some(item => item === tag)
    }

    const selectTag = (tag) => {
        // console.log(tag);
        if (taskData.tags.some(item => item === tag)) {
            const filterTags = taskData.tags.filter(item => item !== tag)
            setTaskData(prev => {
                return { ...prev, tags: filterTags }
            })
        } else {
            setTaskData(prev => {
                return { ...prev, tags: [...prev.tags, tag] }
            })
        }
    };
    // console.log(taskData.tags)
    const handleChange = (e) => {
        const { name, value } = e.target;

        // return all prev properties and replace w the new field and value
        setTaskData(prev => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(taskData)
        setTasks(prev => {
            return [...prev, taskData]
        })
        setTaskData({
            task: "",
            status: "todo",
            tags: []
        })

    }
    // const [task, setTask] = useState("");
    // const [status, setStatus] = useState("todo");
    // const handleTaskChange = (e) => {
    //     setTask(e.target.value)
    // };
    // const handleStatusChange = (e) => {
    //     setStatus(e.target.value)
    // };
    // 
    return (
        <header className='app_header'>
            <form
                onSubmit={handleSubmit}>
                <input type="text"
                    name="task" className='task_input' placeholder='Enter your task'
                    onChange={handleChange}
                    value={taskData.task}
                />
                <div className='task_form_bottom_line'>
                    <div>
                        <Tag tagName="HTML" selectTag={selectTag} selected={checkTag("HTML")} />
                        <Tag tagName="CSS" selectTag={selectTag} selected={checkTag("CSS")} />
                        <Tag tagName="JavaScript" selectTag={selectTag} selected={checkTag("JavaScript")} />
                        <Tag tagName="React" selectTag={selectTag} selected={checkTag("React")} />
                    </div>
                    <div>
                        <select
                            name="status"
                            className='task_status'
                            onChange={handleChange}
                            value={taskData.status}>
                            <option value="todo">To do</option>
                            <option value="doing">doing</option>
                            <option value="done">done</option>
                        </select>
                        <button type='submit' className='task_submit'> + Add Task</button>
                    </div>
                </div>
            </form>

        </header>
    )
}

export default TaskForm