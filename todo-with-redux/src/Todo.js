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
          <fakebutton onClick={this.props.onStoreResult} onClick={this.props.addTask}>add task</fakebutton>
        </form>
        <ul>
          {this.props.storedResults.map(item => <li key={item.id}>{item.value}
            <fakebutton onClick={this.props.delete}>x</fakebutton>
          </li>)}
        </ul>
      </div>
    )
  }
}
// onClick={() => this.props.onDeleteResult(item.id)}
const mapStateToProps = state => {
  return {
    task: state.taskk,
    storedResults: state.results
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTask: () => dispatch({ type: "ADD", value: document.getElementById("task").value }),
    delete: (e) => { console.log(e); return dispatch({ type: "DELETE", value: e.target.parentNode.childNodes[0].data }) },
    onStoreResult: () => dispatch({ type: 'STORE_RESULT', value: document.getElementById("task").value })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)