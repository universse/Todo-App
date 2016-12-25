var {toggleCompleted, inputSearch, addTodo, checkTodo, startFetchingLocation, completeFetchingLocation, fetchLocation} = require('actions')
var store = require('store').configureStore()

const render = () => {
  let state = store.getState()
  console.log(state)
}

let unsubscribe = store.subscribe(render)

store.dispatch(inputSearch('dog'))

store.dispatch(addTodo('learn redux'))

store.dispatch(inputSearch('cat'))

store.dispatch(addTodo('learn react native'))

store.dispatch(toggleCompleted())

store.dispatch(toggleCompleted())

store.dispatch(fetchLocation())
