import React from 'react'
import {Provider} from 'react-redux'

import {store, AppRouter} from 'AppRouter'

store.subscribe(() => {
  let state = store.getState()
  console.log(state)
})

export let AppContainer = props =>
  <Provider store={store}>
    <AppRouter />
  </Provider>
