var React = require('react')
var {connect} = require('react-redux')

var Todo = require('Todo')

let TodoList = ({showCompleted, searchValue, todoList, dispatch}) => {
  let filteredList = todoList.filter(({todo}) => todo.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1)
  let incompleteList = filteredList.filter(({done}) => !done)

  let listToRender = showCompleted ? filteredList : incompleteList
  let list = listToRender.map((todo) => <Todo key={todo.id} {...todo} />)

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
