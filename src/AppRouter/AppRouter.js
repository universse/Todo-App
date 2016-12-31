import React from 'react'
import {Route, Router, IndexRoute, browserHistory} from 'react-router'
import {AppLayout} from 'AppLayout'
import {Login} from 'Login'
import {App} from 'App'

export let AppRouter = props =>
  <Router history={browserHistory}>
    <Route path='/' components={AppLayout}>
      <IndexRoute component={Login} />
      <Route path='app' component={App} />
    </Route>
  </Router>
