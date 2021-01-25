import React from 'react'
import './Questions.css';

const Question = ({questions, nextQ}) => {
    return (
        <div className='fifty'>
            <div className='question'>
                <h1>{questions[nextQ].text}</h1>
                <p>{questions[nextQ].hint}</p>
            </div>
        </div>
        
    )
}

export default Question

