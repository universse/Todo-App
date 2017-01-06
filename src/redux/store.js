import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {routerMiddleware} from 'react-router-redux'
import {browserHistory} from 'react-router'

import reducer from 'reducers'

const middleware = routerMiddleware(browserHistory)

const configureStore = () => {
  var store = createStore(reducer, compose(
    applyMiddleware(middleware, thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

  store.subscribe(() => {
    let state = store.getState()
    console.log(state)
  })

  return store
}

export default configureStore
