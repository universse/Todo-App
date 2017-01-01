import React from 'react'
import {Route, Router, IndexRoute, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import {AppLayout} from 'AppLayout'
import Login from 'Login'
import {App} from 'App'
import {configureStore} from 'store'

export var store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

export let AppRouter = props =>
  <Router history={history}>
    <Route path='/' components={AppLayout}>
      <IndexRoute component={Login} />
      <Route path='app' component={App} />
    </Route>
  </Router>
