import React, { Component } from "react";

export class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  handlePlusClick = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  handleMinusClick = () => {
    this.setState((prevState) => {
      if (prevState.counter > 0) {
        return {
          counter: prevState.counter - 1,
        };
      }
    });
  };

  render() {
    return (
      <div>
        <div className="counter">
          <h1>Counter</h1>
          <div>{this.state.counter}</div>
        </div>
        <div className="change-counter">
          <button onClick={() => this.handlePlusClick()}>+</button>
          <button onClick={() => this.handleMinusClick()}>-</button>
        </div>
      </div>
    );
  }
}

export default Counter;
