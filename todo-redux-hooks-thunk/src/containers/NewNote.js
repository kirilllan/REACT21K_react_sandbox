import React from 'react';
//import * as actionTypes from '../store/actions'

import { useSelector, useDispatch } from 'react-redux';
import { createNote } from '../store/reducers/reducer'

const NewNote = () => {
  const notes = useSelector(state => state)
  let i = notes.length
  const dispatch = useDispatch()
  const addTodo = async e => {
    e.preventDefault()
    const text = e.target.note.value
    dispatch(createNote(text))
    e.target.note.value = ""
  }

  return (
    <form onSubmit={addTodo}>
      <input type="text" name="noteInput"></input>
      <input type="submit" value="Add note"></input>
    </form>
  );
};

export default NewNote;