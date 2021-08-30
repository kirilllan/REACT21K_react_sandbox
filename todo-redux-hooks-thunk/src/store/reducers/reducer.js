import * as actionTypes from '../actions'
import noteServices from '../../services/Notes'

const reducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.INIT_NOTES:
      return action.data
    case actionTypes.ADD_TODO:
      return [...state, action.data]
    case actionTypes.TOGGLE_TODO:
      console.log('from toggletodo')
      const noteToChange = state.find(n => n.id === action.id)
      const changeNote = { ...noteToChange, completed: !noteToChange.completed }
      return state.map((note) => (note.id !== action.id ? note : changeNote))
    case actionTypes.REMOVE:
      console.log('from remove:', action, action.removeName)
      //return state
      return state.filter(note => note.text !== action.removeName)
  }
  return state
}

export const initializeNotes = () => {
  return async (dispatch) => {
    const notes = await noteServices.getAll()
    dispatch({
      type: actionTypes.INIT_NOTES,
      data: notes
    })
  }
}

export const createNote = (text) => {
  return async (dispatch) => {
    const newNote = await noteServices.createNew(text)
    dispatch({
      type: actionTypes.ADD_TODO,
      data: newNote
    })
  }
}

export default reducer