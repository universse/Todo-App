var React = require('react')
var ReactDOM = require('react-dom')
var {Provider} = require('react-redux')

var store = require('store').configureStore()
var App = require('App')
var {fetchTodoList} = require('actions')
// var TodoAPI = require('TodoAPI')

require('applicationStyle')
require('tachyons')

// const saveTodoListToLocalStorage = () => {
//   let state = store.getState()
//   console.log(state)
//   TodoAPI.setTodos(state.todoList)
// }

// let unsubscribe = store.subscribe(saveTodoListToLocalStorage)
store.dispatch(fetchTodoList())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
