export const showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_COMPLETED':
      return !state
    default:
      return state
  }
}

export const searchValueReducer = (state = '', action) => {
  switch (action.type) {
    case 'INPUT_SEARCH':
      return action.searchValue
    default:
      return state
  }
}

export const todoListReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      let d = new Date()
      let time = d.toLocaleString()
      let id = d.valueOf()
      return state.concat({id, todo: action.todo, time, done: false})
    case 'CHECK_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          var done = !todo.done
        }
        return {
          ...todo,
          done
        }
      })
    default:
      return state
  }
}

export const locationReducer = (state = {fetching: false, url: undefined}, action) => {
  switch (action.type) {
    case 'START_FETCHING_LOCATION':
      return {
        ...state,
        fetching: true
      }
    case 'COMPLETE_FETCHING_LOCATION':
      return {
        fetching: false,
        url: action.url
      }
    default:
      return state
  }
}
