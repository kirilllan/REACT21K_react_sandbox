import React from 'react';

import { useDispatch } from 'react-redux';
import { createNote } from '../store/reducers/reducer'

const NewNote = () => {
  const dispatch = useDispatch()
  const addTodo = async e => {
    e.preventDefault()
    const text = e.target.noteInput.value
    dispatch(createNote(text))
    e.target.noteInput.value = ""
  }

  return (
    <form onSubmit={addTodo} className="todo-form">
      <input type="text" name="noteInput" className="todo-form-input-1"></input>
      <input type="submit" value="Add note" className="todo-form-input-2"></input>
    </form>
  );
};

export default NewNote;