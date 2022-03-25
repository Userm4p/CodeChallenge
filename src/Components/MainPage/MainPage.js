import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import "./MainPage.css"

export const MainPage = () => {
  return (
    <Fragment >
      <div className="mainpage">
        <h1>Welcome to the trivial challenge!</h1>
        <hr/>
        <h6 className='p'>You will be presented whit 10 true or false questions</h6>
        <h6 className='p'>Can you score 100%?</h6>
        <Link       
          className="Begin btn btn-dark" 
          to="/QuizScreen">
          Begin
        </Link>   
      </div>
    </Fragment>
  )
}
