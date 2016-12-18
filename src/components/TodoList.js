var React = require('react')

let TodoList = ({list, check}) => {
  let todoList = list.map(({todo, time, done}, i) =>
    <li key={i} onChange={check(i, todo, time)}>
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
