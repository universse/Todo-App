var React = require('react')
var ReactDOM = require('react-dom')
var {Provider} = require('react-redux')

var store = require('store').configureStore()
var App = require('App')

require('applicationStyle')
require('tachyons')

const render = () => {
  let state = store.getState()
  console.log(state)
}

let unsubscribe = store.subscribe(render)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
