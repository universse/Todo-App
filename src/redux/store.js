import {combineReducers, createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {showCompletedReducer, searchValueReducer, todoListReducer, locationReducer} from 'reducers'

export const configureStore = () => {
  const reducer = combineReducers({
    showCompleted: showCompletedReducer,
    searchValue: searchValueReducer,
    todoList: todoListReducer,
    location: locationReducer
  })

  var store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

  return store
}
