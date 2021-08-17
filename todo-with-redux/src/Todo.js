import React, { Component } from 'react';
import { connect } from 'react-redux';

class Todo extends Component {
  render() {
    return (
      <div>
        TODO:
        <br />
        <form>
          <input type="text" name="task" />
          <button type="submit" onclick="localStorage.setItem(task.value, task.value)">add task</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)