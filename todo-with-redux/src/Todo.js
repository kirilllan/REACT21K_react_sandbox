import React, { Component } from 'react';
import { connect } from 'react-redux';

class Todo extends Component {
  render() {
    return (
      <div>
        TODO:
        {this.props.todos}
        <br />
        <form>
          <input type="text" name="task" id="task" />
          <button onClick={this.props.onStoreResult} onClick={this.props.addTask}>add task</button>
        </form>
        <ul>
          {this.props.storedResults.map(item => <li key={item.id} onClick={() => this.props.onDeleteResult(item.id)}>{item.value}
            <button onClick={this.props.delete}>X</button>
          </li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    task: state.taskk,
    storedResults: state.results
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTask: (task) => dispatch({ type: "ADD", value: task }),
    //onDelete: () => dispatch({ type: "DELETE", item: //id }),
    onStoreResult: () => dispatch({ type: 'STORE_RESULT', })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)