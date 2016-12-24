var {toggleCompleted, inputSearch, addTodo, checkTodo, startFetchingLocation, completeFetchingLocation, fetchLocation} = require('actions')
var store = require('store').configureStore()

const render = () => {
  let state = store.getState()
  console.log(state)
}

let unsubscribe = store.subscribe(render)

store.dispatch(inputSearch('dog'))

store.dispatch(addTodo({
  id: 123,
  todo: 'learn redux',
  done: false
}))

store.dispatch(inputSearch('cat'))

store.dispatch(addTodo({
  id: 456,
  todo: 'learn react native',
  done: false
}))

store.dispatch(toggleCompleted())

store.dispatch(toggleCompleted())

store.dispatch(checkTodo(123))

store.dispatch(checkTodo(123))

store.dispatch(fetchLocation())
