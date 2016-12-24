var redux = require('redux')
var thunk = require('redux-thunk').default
var {showCompletedReducer, searchValueReducer, todoListReducer, locationReducer} = require('reducers')

export const configureStore = () => {
  const reducer = redux.combineReducers({
    showCompleted: showCompletedReducer,
    searchValue: searchValueReducer,
    todoList: todoListReducer,
    location: locationReducer
  })

  var store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

  return store
}
