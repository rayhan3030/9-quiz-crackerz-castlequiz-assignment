import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import QuizTopics from '../QuizTopics/QuizTopics';

const QuizDetails = () => {
    const quizData = useLoaderData();
    console.log(quizData.data)
    const quizDatas = quizData.data;
    return (
        <div>
            <h2>this is quiz details</h2>
            <h1>Quiz Topic Name: {quizDatas.questions[0].question}</h1>

            {/* {
                quizDatas.map(qzdata => <Quiz
                    key={qzdata.id}
                    qzdata={qzdata}
                ></Quiz>)
            } */}
        </div>
    );
};

export default QuizDetails;