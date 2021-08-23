function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD": return { ...state, results: state.results.concat({ id: new Date(), value: state.taskk }) }
    case "DELETE":
    // const updatedArray = state.todos.filter(item => item.id !== action.item)
    // return { ...state, todos: updatedArray }
    case 'STORE_RESULT': return { ...state, results: state.results.concat({ id: new Date(), value: state.taskk }) }
  }

  return state
}

const initialState = {
  val: "",
  results: [{
    id: 1,
    value: 10
  }]
}

export default reducer;