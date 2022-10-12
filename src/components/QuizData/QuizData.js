import React from 'react';

const QuizData = ({ quiz }) => {
    const { question, options, id, correctAnswer } = quiz;
    return (
        <div>

            <h1 className='text-xl p-5'>{question} </h1>
            {/* <input type="radio" name="answer1" value="wrong">Diego Maradona */}

            {/* <div><input type="radio" name="" id={id} value={correctAnswer} /> {options[0]}</div>
            <div> <input type="radio" name="" id={id} />{options[1]}</div>
            <div><input type="radio" name="" id={id} />{options[2]}</div>
            <div><input type="radio" name="" id={id} />{options[3]}</div> */}


            <div>

                <div>
                    <input type="radio" id={id} name="age" value="30" />
                    <label for={id}>{options[0]}</label>
                </div>
                <div>
                    <input type="radio" id={id} name="age" value="60" />
                    <label for={id}>{options[1]}</label>
                </div>
                <div>
                    <input type="radio" id={id} name="age" value="100" />
                    <label for={id}>{options[2]}</label>
                </div>
                <div>
                    <input type="radio" id={id} name="age" value="200" />
                    <label for={id}>{options[3]}</label>
                </div>
            </div>


        </div>
    );
};

export default QuizData;