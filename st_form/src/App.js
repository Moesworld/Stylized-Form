
import './App.css';
import React, {Component} from 'react';

class App extends Component {
constructor(props){
  super(props);
  this.state={
    question : "Hello world",
    answer : ""
  }
};

render() {
  return (
    <div className="App">
      <div className="center">
          <div className="container-fluid">
              <div className="row">
                  <h1>Welcome to the stylistic form</h1>
                  <p>
                      This web app allows you to answer a series of questions 
                      that will visually keep you engaged.
                      <code id="cntr"></code>
                  </p>
                  
                  <div className="btnContainer">
                      <button type="button" onclick="NextPage()">Start</button>
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
