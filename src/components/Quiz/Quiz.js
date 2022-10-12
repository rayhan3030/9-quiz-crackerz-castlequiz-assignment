import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizData from '../QuizData/QuizData';

const Quiz = () => {
    const quizDatas = useLoaderData()
    // console.log(quizDatas.data.questions)
    const quizData = quizDatas.data.questions;
    console.log(quizData);
    return (
        <div>
            <h1 className='text-3xl border bg-yellow-600 text-white'>Quiz is here</h1>
            <h1>Quiz Topic: <span className='text-2xl font-extrabold'>{quizDatas.data.name}</span></h1>
            {
                quizData.map(quiz => <QuizData
                    key={quiz.id}
                    quiz={quiz}
                ></QuizData>)
            }
        </div>
    );
};

export default Quiz;