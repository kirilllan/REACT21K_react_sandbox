import React from 'react';
import * as actionTypes from '../store/actions'

import { useSelector, useDispatch } from 'react-redux';

const NewNote = () => {
  const notes = useSelector(state => state)
  let i = notes.length

  return (
    <form>
      <input type="text" name="note"></input>
      <input type="submit" value="Add note"></input>
    </form>
  );
};

export default NewNote;