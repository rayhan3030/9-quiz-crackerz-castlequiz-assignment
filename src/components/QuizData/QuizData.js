import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import './QuizData.css'




const QuizData = ({ quiz }) => {



    const { question, options, id, correctAnswer } = quiz;
    return (
        <div className='c-container'>
            <div>
                <h1 className='text-xl p-5'>{question} </h1>
                <div>
                    <div>
                        <button><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button>
                    </div>
                    <div>
                        <input type="radio" id={id} name="age" value="30" />
                        <label >{options[0]}</label>
                    </div>
                    <div>
                        <input type="radio" id={id} name="age" value="60" />
                        <label >{options[1]}</label>
                    </div>
                    <div>
                        <input type="radio" id={id} name="age" value="100" />
                        <label >{options[2]}</label>
                    </div>
                    <div>
                        <input type="radio" id={id} name="age" value="200" />
                        <label >{options[3]}</label>
                    </div>
                </div>


            </div>
            <div>
                <p className='font-bold'>Answer: {correctAnswer}</p>
                {

                }
            </div>
        </div>
    );
};

export default QuizData;