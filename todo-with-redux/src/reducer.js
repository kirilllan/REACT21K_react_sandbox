function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD": return { ...state, todos: state.todos.concat({ id: new Date(), value: state.val }) }
    case "DELETE":
      const updatedArray = state.todos.filter(item => item.id !== action.item)
      return { ...state, todos: updatedArray }
  }

  return state
}

const initialState = {
  val: "",
  todos: [{
    id: 1,
    value: task
  }]
}

export default reducer;