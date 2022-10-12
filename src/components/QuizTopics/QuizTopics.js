import React from 'react';
import { Link } from 'react-router-dom';

// import './QuizTopics.css';

const QuizTopics = ({ quiz }) => {
    const { name, logo, id } = quiz;
    return (
        <div className='bg-red-100 rounded-full'>
            <div className=''>
                <div>
                    <img className='rounded-full' src={logo} alt="" />
                </div>
                <div>
                    <h3>{name}</h3>
                    <Link to={`/quiz/${id}`}><button className='bg-blue-500 hover:bg-blue-700 rounded-full text-white font-bold py-2 px-4 rounded'>Start Practice</button></Link>
                </div>
            </div>
        </div>
    );
};

export default QuizTopics;