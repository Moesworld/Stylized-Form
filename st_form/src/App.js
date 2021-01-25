
import './App.css';
import React, {useState} from 'react';
import Questions from './components/Questions';
import Button from './components/Button';


const App = () =>{

  //here we can add and manipulate variables
  //const welcomemsg = "Welcome to the stylistic form";
  let [nextQ, setNext] = useState(0);
  const [questions, setQuestions] = useState([
    {
    id : 1,
    text: 'Q1. how many hours of sleep do you get a night ?',
    hint: 'hint: this should help you', 
    answered : false, 
  },
  {
    id : 2,
    text: 'Q2. What is your favourite sport ?',
    hint: 'hint: this should help you', 
    answered : false, 
  },
  {
    id : 3,
    text: 'Q3. Where do you see yourself in 10 years?',
    hint: 'hint: this should help you', 
    answered : false, 
  },
  {
    id : 4,
    text: 'Q4. What is your most recent search on google ?',
    hint: 'hint: this should help you', 
    answered : false, 
  },
  {
    id : 5,
    text: 'Q5. What is your income ?',
    hint: 'hint: this should help you', 
    answered : false, 
  },
  {
    id : 6,
    text: 'Q6. how much time do you spend on social-media ?',
    hint: 'hint: this should help you', 
    answered : false, 
  }
  ]);
  const nextQuestion = () =>{
    if(nextQ == 5){
      setNext(0)
    }else{
      setNext(++nextQ)
    }
   
    console.log(nextQ)
  }
  return (
    
    <div className="App">
      <div className="center">
          <div className="container-fluid">
              <div className="row">
                  < Questions questions={questions} nextQ={nextQ}/>
                  <p>
                      This web app allows you to answer a series of questions 
                      that will visually keep you engaged.
                      <code id="cntr"></code>
                  </p>
                  
                  < Button onClick={nextQuestion}/>
              </div>
            <div className="row">
              <div className="container padme">
                  <div className="w3-light-grey w3-round">
                      <div className="w3-container w3-round w3-blue" id="stBar"><p id="lftpad"></p> </div>
                  </div>
              </div>
            </div>
            
          </div>
          
      </div>

      <div className="center circle2">

      </div>
    </div>
  );
}
export default App;
