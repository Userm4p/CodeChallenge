import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MainPage } from './Components/MainPage/MainPage'
import { QuizScreen } from './Components/QuizScreen/QuizScreen';


export const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/QuizScreen" element={<QuizScreen/>} />
        </Routes>
    </BrowserRouter>
  )
}
