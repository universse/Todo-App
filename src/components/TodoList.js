var React = require('react')

let TodoList = ({list, check}) => {
  let todoList = list.map(({id, todo, time, done}) =>
    <li key={id} onChange={check(id)} className='center w-100 lh-copy pv2 ba bl-0 bt-0 br-0 b--dotted b--black-30'>
      <div className='dib w-10 h1 v-top relative top-1'>
        <input type='checkbox' checked={done} className='h1 w1 v-top' />
      </div>
      <div className='dib w-90'>
        <p className='mv0'>{todo}</p>
        <p className='mv0 gray i'><small>{time}</small></p>
      </div>
    </li>
  )

  return (
    <ul className='list pl0 center w-50 mv1'>
      {todoList}
    </ul>
  )
}

module.exports = TodoList
