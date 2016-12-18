var React = require('react')
var SearchTodo = require('SearchTodo')
var TodoList = require('TodoList')
var AddTodo = require('AddTodo')

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      todoList: [],
      showCompleted: false,
      searchValue: ''
    }
    this._handleClearSearch = this._handleClearSearch.bind(this)
    this._handleSearchInput = this._handleSearchInput.bind(this)
    this._handleShowCompleted = this._handleShowCompleted.bind(this)
    this._handleCheck = this._handleCheck.bind(this)
    this._handleAddTodo = this._handleAddTodo.bind(this)
  }

  _handleClearSearch (e) {
    e.preventDefault()
    this.setState({searchValue: ''})
  }

  _handleSearchInput (e) {
    this.setState({searchValue: e.target.value})
  }

  _handleShowCompleted () {
    this.setState({showCompleted: !this.state.showCompleted})
  }

  _handleCheck (i, todo, time) {
    return (e) => {
      let done = e.target.checked
      let updatedTodo = {todo, time, done}
      let todoList = this.state.todoList
      todoList.splice(i, 1, updatedTodo)
      this.setState({todoList})
    }
  }

  _handleAddTodo (todo) {
    this.setState(prevState => ({
      todoList: prevState.todoList.concat(todo)
    }))
  }

  render () {
    let {todoList, showCompleted, searchValue} = this.state
    let filteredList = todoList.filter(({todo}) => todo.indexOf(searchValue) !== -1)
    let incompleteList = filteredList.filter(({done}) => done === false)

    return (
      <div>
        <h1>Todo App</h1>
        <SearchTodo clear={this._handleClearSearch} input={this._handleSearchInput} showCompleted={this._handleShowCompleted} searchValue={searchValue} />
        <TodoList list={showCompleted ? filteredList : incompleteList} check={this._handleCheck} />
        <AddTodo add={this._handleAddTodo} />
      </div>
    )
  }
}

module.exports = App
