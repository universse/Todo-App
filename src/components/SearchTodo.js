var React = require('react')

let SearchTodo = ({clear, input, showCompleted, searchValue}) =>
  <form onSubmit={clear}>
    <input type='text' placeholder='Search...' value={searchValue} onChange={input} />
    <button type='submit'>Clear!</button>
    <br />
    <input type='checkbox' onChange={showCompleted} />Show completed
  </form>

module.exports = SearchTodo
