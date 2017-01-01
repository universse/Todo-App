import React from 'react'
import {Route, Router, IndexRoute, browserHistory} from 'react-router'
import {syncHistoryWithStore, push} from 'react-router-redux'

import {logIn, logOut, fetchTodoList} from 'actions'
import {AppLayout} from 'AppLayout'
import Login from 'Login'
import {App} from 'App'
import {configureStore} from 'store'
import firebase from 'firebase.main'

export var store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(logIn(user.uid))
    store.dispatch(fetchTodoList(user.uid))
    store.dispatch(push('app'))
  } else {
    store.dispatch(logOut())
    store.dispatch(push(''))
  }
})

export let AppRouter = props =>
  <Router history={history}>
    <Route path='/' components={AppLayout}>
      <IndexRoute component={Login} />
      <Route path='app' component={App} />
    </Route>
  </Router>
