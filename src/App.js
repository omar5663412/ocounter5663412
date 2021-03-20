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
    console.log(event.target.files[0])
  }

  fileUploaderHandler = () =>

  render() {
    return (
      <div className="App">
      <input type="file" onChange={this.fileSelectedHandler}/>
      <button onClick={this.fileSelectedHandler}>Upload</button
    <div>
    );
  }
}



export defualt  App;
