import React from 'react'
import {render} from 'react-dom'
import {browserHistory} from 'react-router'
import {syncHistoryWithStore, push} from 'react-router-redux'

import {AppContainer} from 'AppContainer'
import {logIn, logOut, fetchTodoList} from 'actions'
import firebase from 'firebase.main'
import configureStore from 'store'

require('applicationStyle')

const store = configureStore()
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

render(
  <AppContainer store={store} history={history} />,
  document.getElementById('root')
)

// import React from 'react'
// import {render} from 'react-dom'
// import {push} from 'react-router-redux'
//
// import {AppContainer} from 'AppContainer'
// import {logIn, logOut, fetchTodoList} from 'actions'
// import firebase from 'firebase.main'
// import {store} from 'AppRouter'
//
// var TodoAPI = require('TodoAPI')
// require('applicationStyle')
//
// firebase.auth().onAuthStateChanged(user => {
//   if (user) {
//     store.dispatch(logIn(user.uid))
//     store.dispatch(fetchTodoList(user.uid))
//     store.dispatch(push('app'))
//   } else {
//     store.dispatch(logOut())
//     store.dispatch(push(''))
//   }
// })
//
// render(
//   <AppContainer />,
//   document.getElementById('root')
// )
