import React, { useState } from "react";
import { useFetchQuestions } from "../../hooks/useFetchQuestions";
import { QuizItem } from "../QuizItem/QuizItem";
import { useCounter } from "../../hooks/useCounter";
import "./QuizScreen.css";
import { Link } from "react-router-dom";


export const QuizScreen = () => {
  const { state, increment } = useCounter(0);
  const { data, loading } = useFetchQuestions();
  const [score, setScore] = useState(0);
  const [ans, setAns] = useState([])




  const handleTrue = (correct_answer) => {
    setAns([...ans,'True']);
    if (correct_answer === 'True') {
      setScore(score + 1)
    }
    increment();
  };

  const handleFalse = ( correct_answer) => {
    setAns([...ans,'False']);
    if (correct_answer === 'False') {
      setScore(score + 1)
    }
    increment();
  };
  return (
    <>
      {state>9 ? (
        <div className="finish">
          <h1>You score</h1>
          <h1>{`${score} / ${state}`}</h1>
          <ul className="ul1">{ 
             data.map((q, i) => (
              ( ans[i] === q.correct_answer) ?
              (<div className='good'
                    key={q.question}>
                  <p className="pf">- {q.question} 
                      <b>Correct answer: {q.correct_answer}</b> 
                  </p>
              </div>)
              :
              (<div className='bad'
                  key={q.question}>
                  <p className="pf">- {q.question} 
                      <b>Correct answer: {q.correct_answer}</b> 
                  </p>
              </div>

              )
              )
              )
        }</ul>
          <Link       
          className="Reset btn btn-dark" 
          to="/">
          PLAY AGAIN?
          </Link> 
       </div>
      ) : loading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <div className="Question">
          <QuizItem key={data[state].question} {...data[state]} />
          <button
            className="btn btn-outline-primary"
            onClick={() => handleTrue(data[state].correct_answer)}
          >
            True
          </button>
          <button
            className="btn btn-outline-primary"
            onClick={() => handleFalse(data[state].correct_answer)}
          >
            False
          </button>
          <footer>{state + 1} of 10</footer>
        </div>
      )}
    </>
  );
};
