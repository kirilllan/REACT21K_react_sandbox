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
    <form onSubmit={addTodo}>
      <input type="text" name="noteInput"></input>
      <input type="submit" value="Add note"></input>
    </form>
  );
};

export default NewNote;