import React from 'react'
import {Provider} from 'react-redux'

import {AppRouter} from 'AppRouter'
import {configureStore} from 'store'
import {fetchTodoList} from 'actions'

var store = configureStore()

// const saveTodoListToLocalStorage = () => {
//   let state = store.getState()
//   console.log(state)
//   TodoAPI.setTodos(state.todoList)
// }
// let unsubscribe = store.subscribe(saveTodoListToLocalStorage)
store.dispatch(fetchTodoList())

export let AppContainer = props =>
  <Provider store={store}>
    <AppRouter />
  </Provider>
