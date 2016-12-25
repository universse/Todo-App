var React = require('react')
var {connect} = require('react-redux')

var SearchTodo = require('SearchTodo')
var TodoList = require('TodoList')
var AddTodo = require('AddTodo')
var TodoAPI = require('TodoAPI')

class App extends React.Component {
  render () {
    return (
      <div className='w-80-ns w-90 center'>
        <h1 className='f1-l f2-m f3 mt4 mb3-l mb2-m mb0 avenir center w-60-l w-80-m w-90 tc'>To-Do List</h1>
        <SearchTodo />
        <TodoList />
        <AddTodo />
      </div>
    )
  }

  componentDidUpdate () {
    let {todoList} = this.props
    TodoAPI.setTodos(todoList)
  }
}

module.exports = connect(
  state => ({
    todoList: state.todoList
  })
)(App)
