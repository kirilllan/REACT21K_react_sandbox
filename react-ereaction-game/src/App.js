import React , {Component} from 'react';
import Circle from "./Circle";
import "./App.css";
import GameOver from "./GameOver";
import startSound from './sound1.mp3'
import endSound from './sound2.wav';

let gameStartSound = new Audio(startSound)
let gameEndSound = new Audio(endSound)


const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class App extends Component {
  state = {
    score: 0,
    current: 0,
    gameStart: false,
    rounds: 0,
    disableStartButton: false,
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
    gameStartSound.play()
    if (this.state.current !== id) {
      this.endHandler()
      return
    }
    this.setState({
      score: this.state.score +1,
      rounds: 0
    })
  }

  nextCircle = () => {
    if (this.state.rounds >= 5) {
      this.endHandler()
      return
    }

    let nextActive
    do {nextActive = getRndInteger(1, 4)} while (nextActive === this.state.current)
    this.setState({
      current: nextActive,
      round: this.state.round +1
    })
    this.pace *= .95
    this.timer = setTimeout(this.nextCircle, this.pace)

    console.log('active circle: ',this.state.current)
  }

  startHandler = () => {
    this.nextCircle()
    this.setState({disableStartButton:true})
  }
  endHandler = () => {
    clearTimeout(this.timer)
    gameEndSound.play()
    this.setState({
      gameStart: true
    })
  }

  render() {
    const circlesList = this.state.circles.map(c => {
      return <Circle id={c.id} key={c.id} color={c.color} click={() =>this.clickHandler(c.id,c.color)}  active={this.state.current === c.id} disabled={this.state.gameStart}/>
    }); 
    return (
      <div>
        <h1>Speedgame</h1>
        <p>Your score is: {this.state.score}</p>
        <div className="circles">{circlesList}</div>
        <button onClick={this.startHandler}>Start</button>
        <button onClick={this.endHandler} disabled={this.state.gameStart}>Stop</button>
        {this.state.gameStart && <GameOver score={this.state.score}/>}
      </div>
    )
}
}

export default App;
