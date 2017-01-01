import React from 'react'
import {render} from 'react-dom'
import {browserHistory} from 'react-router'

import {AppContainer} from 'AppContainer'
import firebase from 'firebase.main'

// var TodoAPI = require('TodoAPI')
require('applicationStyle')

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    browserHistory.push('app')
  } else {
    browserHistory.push('')
  }
})

render(
  <AppContainer />,
  document.getElementById('root')
)
