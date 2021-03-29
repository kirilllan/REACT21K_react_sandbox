import React, { Component } from "react";
import "./App.css"

class App extends Component {
  state = {
    counter: 0
  }

addHandler = () => {this.setState({
  counter: this.state.counter+1
})}
removeHandler = () => {this.setState({
  counter: this.state.counter -1
})}
resetHandler = () => {this.setState({
  counter: 0
})}
  render() {
    return (
      <div>
        <h1 className="circle">{this.state.counter}</h1>
        <button onClick={this.addHandler}>+ Add 1 +</button>
        <button onClick={this.removeHandler}>- Remove 1 -</button>
        <button onClick={this.resetHandler}>|reset|</button>
      </div>
    )
  }
}


export default App;
