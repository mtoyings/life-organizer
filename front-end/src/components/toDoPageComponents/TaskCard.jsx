import React from 'react'
import "./TaskCard.css"
import Tag from "./Tag"

const TaskCard = ({ title, description, deadline, tags, handleDelete, index }) => {
    const padZero = (num) => {
        return num < 10 ? `0${num}` : num;
    };

    const formatDateFromString = (deadline) => {
        const date = new Date(deadline);
        if (isNaN(date)) return '';

        const day = padZero(date.getDate());
        const month = padZero(date.getMonth() + 1); // Months are zero-indexed
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    };

    const stringDeadline = formatDateFromString(deadline)
    console.log("tags", tags)
    return (
        <article className="task_card">
            <p className='task_text'>
                {title}
            </p>
            {/* <p className="task_description">{description}</p> */}
            <div className='task_card_tags'>
                {tags.map((tag, index) => <Tag key={index} tagName={tag} selected="true" />)}
            </div>


            <div className='task_card_last_line'>
                <div className='task_card_deadline'>
                    <p className="task_deadline">🗓 {stringDeadline}</p>
                </div>

                <div className='task_delete' onClick={() => handleDelete(index)}>
                    <span role="img" aria-label="red_cross" className='delete_icon'>❌</span>
                </div>
            </div>

        </article>
    )
}

export default TaskCard