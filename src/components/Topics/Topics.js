import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopics from '../QuizTopics/QuizTopics';
import './Topics.css'

const Topics = () => {
    const loaderData = useLoaderData();
    const quizData = loaderData.data;
    console.log(quizData)

    return (
        <div>
            <div className='header-topic'>
                <h1 className='text-4xl bg-transparent font-bold text-yellow-500'>Welcome to Castle Quiz</h1>
                <p className='text-white'>HELLo learners!!  For the past few weeks you have learnt many things.  We have selected four interesting topic for you.Now a Little quiz for you. best of luck</p>
                <h2 className='text-white'>We have : {quizData.length} Course Contents</h2>
            </div>
            <div className='grid grid-cols-4 gap-3 rounded-full mt-16'>
                {
                    quizData.map(quiz => <QuizTopics
                        key={quiz.id}
                        quiz={quiz}
                    ></QuizTopics>)
                }
            </div>
        </div >
    );
};

export default Topics;