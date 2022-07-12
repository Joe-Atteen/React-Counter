import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrease = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>COUNT: {this.state.count}</h1>
        <button onClick={this.handleIncrease}>Increase</button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Decrease
        </button>
      </div>
    );
  }
}

export default ClassCounter;
