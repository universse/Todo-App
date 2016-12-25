var React = require('react')
var {connect} = require('react-redux')
var {checkTodo} = require('actions')

let TodoList = ({showCompleted, searchValue, todoList, dispatch}) => {
  let filteredList = todoList.filter(({todo}) => todo.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1)
  let incompleteList = filteredList.filter(({done}) => !done)

  let listToRender = showCompleted ? filteredList : incompleteList

  let list = listToRender.map(({id, todo, time, done}) =>
    <li key={id} className='center w-100 lh-copy pv2-ns pv1 ba bl-0 bt-0 br-0 b--dotted b--black-30'>
      <div className='dib w-10 h1 v-top relative top-1'>
        <input type='checkbox' checked={done} onChange={() => { dispatch(checkTodo(id)) }} className='h1 w1 v-top' />
      </div>
      <div className='dib w-90 pl0-l pl1-m pl2'>
        <p className='mv0 f4-l f5'>{todo}</p>
        <p className='mv0 gray i f4-l f5'><small>{time}</small></p>
      </div>
    </li>
  )

  return (
    <ul className='list pl0 center w-40-l w-70 mv1'>
      {list}
    </ul>
  )
}

module.exports = connect(
  state => ({
    showCompleted: state.showCompleted,
    searchValue: state.searchValue,
    todoList: state.todoList
  })
)(TodoList)
