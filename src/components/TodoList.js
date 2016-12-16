var React = require('react')
var Todo = require('Todo')

let TodoList = ({list}) =>
  <div>
    {list.map(todo => <Todo todo={todo[0]} time={todo[1]} />)}
  </div>

module.exports = TodoList
