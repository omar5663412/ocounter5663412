//########################################################################
//########################         Omar           ########################
//########################        Mohamed         ########################
//########################################################################





import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Button from './components/Button';
import Result from './components/Result';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'O.C',
      counter: 0
    };
  }
  incrementCount = (incrementValues) =>{
    this.setState((prevState) => ({
        counter: prevState.counter + incrementValues   
    }));
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          React Simple Counter
        </p>
        <Button incrementValue={1} onClickFunction={ this.incrementCount }/>
        <Button incrementValue={10} onClickFunction={ this.incrementCount }/>
        <Button incrementValue={100} onClickFunction={ this.incrementCount }/>
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
