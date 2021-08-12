//########################################################################
//########################         Omar           ########################
//########################        Mohamed         ########################
//########################################################################


let Reset;
Reset = 0

import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import App from './App';
import Button from './components/Button';
import Result from './components/Result';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'O.C.O',
      counter: 84
      
    };
  }
  incrementCount = (incrementValues) =>{
    this.setState((prevState) => ({
        counter: prevState.counter + incrementValues   
    }));
  }
   incrementCount2 = (incrementValues2) =>{
    this.setState((prevState) => ({
        counter: prevState.counter * incrementValues2
    }));
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
         Made By Omar Mohamed 
         
        </p>
        
        <Button incrementValue={1} onClickFunction={ this.incrementCount }/>
        <Button incrementValue={10} onClickFunction={ this.incrementCount }/>
        <Button incrementValue={100} onClickFunction={ this.incrementCount }/>
        <Button incrementValue={1000} onClickFunction={ this.incrementCount }/>
        <Button incrementValue={2010} onClickFunction={ this.incrementCount }/>
        <Button incrementValue={Reset} onClickFunction={ this.incrementCount2 }/>
        <Button incrementValue={-2010} onClickFunction={ this.incrementCount }/>
        <Button incrementValue={-1000} onClickFunction={ this.incrementCount }/>
        <Button incrementValue={-100} onClickFunction={ this.incrementCount }/>
        <Button incrementValue={-10} onClickFunction={ this.incrementCount }/>
        <Button incrementValue={-1} onClickFunction={ this.incrementCount }/>
        <Result counter={this.state.counter}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

Reset = 0;
let v1;
v1 = Result

  


