import React from 'react'

import SearchTodo from 'SearchTodo'
import TodoList from 'TodoList'
import AddTodo from 'AddTodo'

export let App = props =>
  <div className='w-80-ns w-90 center'>
    <h1 className='f1-l f2-m f3 mt4 mb3-l mb2-m mb0 avenir center w-60-l w-80-m w-90 tc'>To-Do List</h1>
    <SearchTodo />
    <TodoList />
    <AddTodo />
  </div>
