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
          <button type="submit" onclick={this.props.addTask}>add task</button>
        </form>
        <ul>
          {this.props.todos.mapDispatchToProps(todo => <li key={todo.id} onClick={() => this.props.onDelete(todo.id)}>{todo.value}</li>)}
        </ul>
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
    addTask: (task) => dispatch({ type: "ADD" }),
    onDelete: () => dispatch({ type: "DELETE", item: id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)