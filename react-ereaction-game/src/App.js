import React , {Component} from 'react';
import Circle from "./Circle";
import "./App.css";

class App extends Component {
  state = {
    circles: [
      {id: 1, color: 'green'},
      {id:2,color:'yellow'},
      {id:3,color:'red'},
      {id:4,color:'orange'}
    ]
  }
  render() {
    const circleList = this.state.circles.map(c => {
      return <Circle id={c.id} key={c.id} color={c.color}/>
    }); 
    return (
      <div>
        <h1>Speedgame</h1>
        <p>Your score is:</p>
        <div className="circles">{circleList}</div>
        <button>Start</button>
        <button>Stop</button>
      </div>
    )
}
}

export default App;
