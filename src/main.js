import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import {configureStore} from 'store'
import {App} from 'App'
import {fetchTodoList} from 'actions'
// var TodoAPI = require('TodoAPI')

require('applicationStyle')

var store = configureStore()

// const saveTodoListToLocalStorage = () => {
//   let state = store.getState()
//   console.log(state)
//   TodoAPI.setTodos(state.todoList)
// }

// let unsubscribe = store.subscribe(saveTodoListToLocalStorage)
store.dispatch(fetchTodoList())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
