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
    removeName: name
  })
  return (
    <>
      <ul>
        {notes.map(note => (<><li key={note.id} onClick={() => dispatch(toggleTodo(note.id))} className={note.completed ? 'strike todo' : 'todo'}> {note.text} </li> <button key={Math.random().toString()} className="button-remove" onClick={() => dispatch(remove(note.text))}>delete</button></>))}
      </ul>
    </>
  );
};

export default Notes;