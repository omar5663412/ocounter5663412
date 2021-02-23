import React, { Component } from 'react';

class Button extends Component{
  constructor(props){
    super(props);

  }
  handleClick = () => {
    this.props.onClickFunction(this.props.incrementValue);
  }
  render() {
      return(
        <button onClick={this.handleClick}>
          {this.props.incrementValue}
        </button>);
  }
}

export default Button;