
import './App.css';
import React, {Component} from 'react';
import Questions from './components/Questions';


class App extends Component {

constructor(props){
  super(props);
  this.state={
    question : "Hello world",
    answer : "",
    counter: 0,
  }
};


nextPage(){
  var questions = ["Q1. ", "Q2", "Q3", "Q4", "Q5", "Q6"];
  console.log("click");
  
}

render() {
  return (
    
    <div className="App">
      <div className="center">
          <div className="container-fluid">
              <div className="row">
                  < Questions text={this.state.question}/>
                  <p>
                      This web app allows you to answer a series of questions 
                      that will visually keep you engaged.
                      <code id="cntr"></code>
                  </p>
                  
                  <div className="btnContainer">
                      <button type="button" onClick={this.nextPage}>Start</button>
                  </div>
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
}
export default App;
