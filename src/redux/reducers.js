import {routerReducer} from 'react-router-redux'
import {combineReducers} from 'redux'

const showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_COMPLETED':
      return !state
    default:
      return state
  }
}

const searchValueReducer = (state = '', action) => {
  switch (action.type) {
    case 'INPUT_SEARCH':
      return action.searchValue
    default:
      return state
  }
}

const todoListReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat(action.todoItem)
    case 'CHECK_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return {
            ...todo,
            done: action.done
          }
        }
        return todo
      })
    case 'LOG_OUT':
      return []
    default:
      return state
  }
}

// export const locationReducer = (state = {fetching: false, url: undefined}, action) => {
//   switch (action.type) {
//     case 'START_FETCHING_LOCATION':
//       return {
//         ...state,
//         fetching: true
//       }
//     case 'COMPLETE_FETCHING_LOCATION':
//       return {
//         fetching: false,
//         url: action.url
//       }
//     default:
//       return state
//   }
// }

const userReducer = (state = '', action) => {
  switch (action.type) {
    case 'LOG_IN':
      return action.uid
    case 'LOG_OUT':
      return ''
    default:
      return state
  }
}

const reducer = combineReducers({
  showCompleted: showCompletedReducer,
  searchValue: searchValueReducer,
  todoList: todoListReducer,
  user: userReducer,
  routing: routerReducer
})

export default reducer
