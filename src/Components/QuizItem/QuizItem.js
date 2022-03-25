import React from 'react'
import "./QuizItem.css";

export const QuizItem = ({ category, question }) => {




  return (
    <div className='d1' >
        <h1>{category}</h1>
        <h6 className='p1'>{question}</h6>
    </div>
    )}