var React = require('react')

let Todo = ({todo, time}) =>
  <li>
    <p className='todo'>{todo}</p>
    <p className='time'>{time}</p>
  </li>

module.exports = Todo
