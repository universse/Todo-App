import {combineReducers, createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {showCompletedReducer, searchValueReducer, todoListReducer, locationReducer, userReducer} from 'reducers'
import {routerReducer} from 'react-router-redux'

export const configureStore = () => {
  const reducer = combineReducers({
    showCompleted: showCompletedReducer,
    searchValue: searchValueReducer,
    todoList: todoListReducer,
    location: locationReducer,
    user: userReducer,
    routing: routerReducer
  })

  var store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

  return store
}
