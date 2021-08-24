import React from 'react';
import { useSelector } from 'react-redux'

const Notes = () => {
  const notes = useSelector(state => state.notes)

  return (
    <ul>
      {notes.map((note) => (<li key={note.id}>{note.text}</li>))}
    </ul>
  );
};

export default Notes;