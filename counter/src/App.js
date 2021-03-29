import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
  state = {
    counter: 0
  }
addHandler = () => {this.setState({
  counter: this.state.counter+1
})}
removeHandler = () => {this.setState({
  counter: this.state.counter -1 > 0 ? this.state.counter -1 : 0
})}
resetHandler = () => {this.setState({
  counter: 0
})}
  render() {
    
    let circleClass = `${this.state.counter === 0 ? '' : this.state.counter % 2 === 0 ? 'even' : 'odd'} circle`
    return (
      <div>
        <Header />
        <div>
        <h1 className={circleClass}>{this.state.counter}</h1>
        <button onClick={this.addHandler}>+ Add 1 +</button>
        <button onClick={this.removeHandler}>- Remove 1 -</button>
        <button onClick={this.resetHandler}>|reset|</button>
        </div>
      <Footer />
      </div>
    )
  }
}


export default App;
