import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as actionTypes from '../store/actions'

const Notes = () => {
  const notes = useSelector(state => state)
  const dispatch = useDispatch()
  const toggleTodo = (id) => ({
    type: actionTypes.TOGGLE_TODO,
    id: id
  })
  const remove = name => ({
    type: actionTypes.REMOVE,
  })
  return (
    <ul>
      {notes.map((note) => (<li key={note.id} onClick={() => dispatch(toggleTodo(note.id))} className={note.completed ? 'strike todo' : 'todo'}>{note.text} <button className="button-remove" >delete</button></li>))}
    </ul>
  );
};

export default Notes;