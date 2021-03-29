import React, { Component } from "react";
import Box from './Box';

class Main extends Component {
  state = {
    persons: [
      {
        name: 'Jo',
        age: 1,
        title: ''
      },
      {
        name: 'Jon',
        age: 22,
        title: '.'
      },
      {
        name: 'John',
        age: 100.000,
        title: 'X'
      }
    ]
  }
  render() {
    return (
      <main>
        <div>
          <Box name={this.state.persons[0].name} age={this.state.persons[0].age} title={this.state.persons[0].title} whateva="o yea"/>
          <Box name={this.state.persons[1].name} age={this.state.persons[1].age} title={this.state.persons[1].title}/>
          <Box name={this.state.persons[2].name} age={this.state.persons[2].age} title={this.state.persons[2].title}/>
        </div>
      </main>
    )
  }
}
export default Main;