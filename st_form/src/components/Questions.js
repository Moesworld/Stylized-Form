import React from 'react'
import {useState} from 'react'
import './Questions.css'
import Question from './Question';



function Questions({questions, nextQ}) {
   
    return (
        <>
            <Question  questions={questions} nextQ={nextQ}/>
            
        </>
    )
}

export default Questions
