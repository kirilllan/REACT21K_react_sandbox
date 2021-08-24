import React from 'react';
import * as actionTypes from '../store/actions'

import { useSelector, useDispatch } from 'react-redux';

const NewNote = () => {
  const notes = useSelector(state => state)
  const dispatch = useDispatch()
  const addTodo = text => ({
    type: actionTypes.ADD_TODO,
    id: i++,
    text: text,
    completed: false
  })
  let i = notes.length

  return (
    <form onSubmit={e => {
      e.preventDefault()
      dispatch(addTodo(e.target.noteInput.value))
      e.target.note.value = ''
    }}>
      <input type="text" name="noteInput"></input>
      <input type="submit" value="Add note"></input>
    </form>
  );
};

export default NewNote;