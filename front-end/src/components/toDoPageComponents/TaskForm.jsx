import React, { useState } from 'react'
import "./TaskForm.css"
import Tag from './Tag'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const TaskForm = ({ setTasks }) => {
    const [taskData, setTaskData] = useState({
        task: "",
        status: "todo",
        tags: []
    })
    const [date, setDate] = useState(new Date());
    const [inputVisible, setInputVisible] = useState(false);
    const [currentTag, setCurrentTag] = useState("");
    const [editTag, setEditTag] = useState("");
    const [tagLists, setTagLists] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);

    const checkTag = (tag) => {
        return taskData.tags.some(item => item === tag)
    }

    const selectTag = (tag) => {
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

    const handleAddTagClick = () => {
        setInputVisible(true);
    }

    const handleAddTagChange = (event) => {
        setCurrentTag(event.target.value)
    }

    const handleAddTagKeyDown = (event) => {
        if (event.keyCode === 13) {
            handleAddTagInsert();
        }
    }

    const handleAddTagInsert = () => {
        setTagLists([...tagLists, currentTag]);
        setCurrentTag('');
        setInputVisible(false);
    }

    const handleInputBlur = () => {
        if (currentTag.trim() !== '') {
            handleAddTagInsert();
        } else {
            setInputVisible(false);
        }
    };

    const handleEditTagChange = (event) => {
        setEditTag(event.target.value);
    }

    const handleEditTagKeyDown = (event) => {
        if (event.keyCode === 13) {
            setEditTag(event.target.value);

        }
    }

    const handleEditBlur = () => {
        saveEdit();
    };

    const saveEdit = () => {
        const updatedItems = [...tagLists];
        updatedItems[editingIndex] = editTag;
        setTagLists(updatedItems);
        setEditingIndex(null);
        setEditTag('');
    };
    const handleItemClick = (index) => {
        setEditingIndex(index);
        setEditTag(tagLists[index]);
    };

    const handleRemoveItem = (index) => {
        setTagLists(tagLists.filter((_, i) => i !== index));
    };

    console.log(tagLists)

    return (
        <header className='app_header'>
            <form
                onSubmit={handleSubmit}>
                <input type="text"
                    name="task" className='task_input' placeholder='Enter your task'
                    onChange={handleChange}
                    value={taskData.task}
                />
                <input type="text"
                    name="task" className='description_input' placeholder='Enter task description'
                    onChange={handleChange}
                    value={taskData.task}
                />
                <div className='task_form_bottom_line'>
                    <div className='tags_select'>
                        <p>Tags: </p>
                        {tagLists.map((tag, index) => {
                            return (
                                <li key={index} className="item">
                                    {editingIndex === index ? (
                                        <input
                                            className='edit_tag_input'
                                            type="text"
                                            value={editTag}
                                            onChange={handleEditTagChange}
                                            onKeyDown={handleEditTagKeyDown}
                                            onBlur={handleEditBlur}
                                            autoFocus
                                        />
                                    ) : (
                                        <span className="tag_display" onClick={() => handleItemClick(index)}>{tag}
                                            <button className="remove-button" onClick={() => handleRemoveItem(index)}>x</button>
                                        </span>

                                    )}
                                </li>
                            )
                        })}
                        {inputVisible && (
                            <input
                                className='add_tag_input'
                                type="text"
                                value={currentTag}
                                onChange={handleAddTagChange}
                                onKeyDown={handleAddTagKeyDown}
                                onBlur={handleInputBlur}
                                autoFocus
                            />
                        )}
                        <button type="button" className='add_tags' onClick={() => handleAddTagClick()}> + </button>

                    </div>
                    <div className='status_select'>
                        {/* <div className='status_select'> */}
                        <p>Status: </p>
                        <select
                            name="status"
                            className='task_status'
                            onChange={handleChange}
                            value={taskData.status}>
                            <option value="todo">To do</option>
                            <option value="doing">Doing</option>
                            <option value="done">Done</option>
                        </select>
                        {/* </div> */}
                        <p>Deadline: </p>
                        <DatePicker className='deadline_picker' selected={date} onChange={(date) => setDate(date)} dateFormat="dd/MM/YYYY" />
                        <button type='submit' className='task_submit'> + Add Task</button>
                    </div>

                </div>
            </form>

        </header >
    )
}

export default TaskForm