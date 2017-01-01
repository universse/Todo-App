import {combineReducers, createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {showCompletedReducer, searchValueReducer, todoListReducer, userReducer} from 'reducers'
import {routerReducer, routerMiddleware} from 'react-router-redux'
import {browserHistory} from 'react-router'

const middleware = routerMiddleware(browserHistory)

export const configureStore = () => {
  const reducer = combineReducers({
    showCompleted: showCompletedReducer,
    searchValue: searchValueReducer,
    todoList: todoListReducer,
    // location: locationReducer,
    user: userReducer,
    routing: routerReducer
  })

  var store = createStore(reducer, compose(
    applyMiddleware(middleware, thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

  return store
}
