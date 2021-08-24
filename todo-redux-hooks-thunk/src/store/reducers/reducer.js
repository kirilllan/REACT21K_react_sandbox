import * as actionTypes from '../actions'

const reducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return state.concat({
        id: action.id + 1,
        text: action.text,
        completed: action.completed
      })
  }
  return state
}

export default reducer