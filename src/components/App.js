var React = require('react')
var SearchTodo = require('SearchTodo')
var TodoList = require('TodoList')
var AddTodo = require('AddTodo')

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      current: [],
      all: [],
      showAll: false
    }
    this._searchTodo = this._searchTodo.bind(this)
    this._addTodo = this._addTodo.bind(this)
  }

  _searchTodo (todo) {

  }

  _addTodo (todo) {
    this.setState(prevState => ({
      all: prevState.all.concat(todo),
      current: prevState.current.concat(todo)
    }))
  }

  render () {
    let {current, all, showAll} = this.state

    return (
      <div>
        <h1>Todo App</h1>
        <SearchTodo search={this._searchTodo} />
        <TodoList list={showAll ? all : current} />
        <AddTodo add={this._addTodo} />
      </div>
    )
  }
}

module.exports = App
