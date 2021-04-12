import React , {Component} from 'react';
import Circle from "./Circle";
import "./App.css";

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class App extends Component {
  state = {
    score: 0,
    current: 0,
    circles: [
      {id: 1, color: 'green'},
      {id:2,color:'yellow'},
      {id:3,color:'red'},
      {id:4,color:'orange'}
    ]
  }
  timer = undefined;
  pace = 1500;

  clickHandler = (id,color) => {
    console.log('u clic ', id, color)
    this.setState({
      score: this.state.score +1
    })
  }

  nextCircle = () => {
    let nextActive
    do {nextActive = getRndInteger(1, 4)} while (nextActive === this.state.current)
    this.setState({current: nextActive})
    this.pace *= .95
    this.timer = setTimeout(this.nextCircle, this.pace)

    console.log('active circle: ',this.state.current)
  }

  startHandler = () => {
    this.nextCircle()
  }
  endHandler = () => {
    clearTimeout(this.timer)
  }

  render() {
    const circlesList = this.state.circles.map(c => {
      return <Circle id={c.id} key={c.id} color={c.color} click={() =>this.clickHandler(c.id,c.color)} />
    }); 
    return (
      <div>
        <h1>Speedgame</h1>
        <p>Your score is: {this.state.score}</p>
        <div className="circles">{circlesList}</div>
        <button onClick={this.startHandler}>Start</button>
        <button onClick={this.endHandler}>Stop</button>
      </div>
    )
}
}

export default App;
