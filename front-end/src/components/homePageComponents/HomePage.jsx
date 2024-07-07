import React from 'react'
import "./HomePage.css"
import ToDoPage from '../toDoPageComponents/ToDoPage'
import { useNavigate } from 'react-router-dom';
import avatarIcon from '../../assets/ava.png'

const HomePage = () => {
    const navigate = useNavigate();
    const handleClickToDo = () => {
        navigate('/todo')
    };
    const handleClickSchedule = () => {
        navigate('/schedule')
    };
    const handleClickWhatDo = () => {
        navigate('/whatdo')
    };
    return (
        <header className='home_page'>
            <div>
                <h1 className='welcome_msg'>Let's Organize Your Life</h1>
                <img className="user_profile_pic" src={avatarIcon} alt='' />
                <div>
                    <button onClick={handleClickToDo} className='change_page'>List To Do</button>
                    <button onClick={handleClickSchedule} className='change_page'>Schedule</button>
                    <button onClick={handleClickWhatDo} className='change_page'>tOO rOt whOt dO</button>

                </div>
            </div>

        </header>
    )
}

export default HomePage