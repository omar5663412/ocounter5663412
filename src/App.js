import React, { Component } from "react";
import "./style.css";
import './App.css';

export default function App() {
  return (
    <div>
      <h1>Made By Omar Mohamed</h1>
      
    </div>
  );
}

class  App extends Component {
  fileSelectedHandler = event => {
    console.log(event.target)
  }
  render() {
    return (
      <div className="App">
      <input type="file" onChange={this.fileSelectedHandler}/>
    <div>
    );
  }
}



export defualt  App;
