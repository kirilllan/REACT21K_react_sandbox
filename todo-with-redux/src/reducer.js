function reducer(state = initialState, action) {

  switch (action.type) {
    case "ADD": return { ...state, results: state.results.concat({ id: new Date(), value: action.value }) }
    case "DELETE":
      const resultsFiltered = state.results.filter(e => e.value !== action.value)
      return { ...state, results: resultsFiltered }
    case 'STORE_RESULT': return { ...state, results: state.results.concat({ id: new Date(), value: action.value }) }
  }

  return state
}

const initialState = {
  results: []
}

export default reducer;