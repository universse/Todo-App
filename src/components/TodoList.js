var React = require('react')

let TodoList = ({list, check}) => {
  let todoList = list.map(({id, todo, time, done}) =>
    <li key={id} onChange={check(id)}>
      <input type='checkbox' checked={done} />
      <p className='todo'>{todo}</p>
      <p className='time'>{time}</p>
    </li>
  )

  return (
    <ul>
      {todoList}
    </ul>
  )
}

module.exports = TodoList
