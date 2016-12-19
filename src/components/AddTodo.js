var React = require('react')

class AddTodo extends React.Component {
  constructor (props) {
    super(props)
    this._onAddTodo = this._onAddTodo.bind(this)
  }

  _onAddTodo (e) {
    e.preventDefault()
    let todo = this._input.value
    let d = new Date()
    let time = d.toLocaleString()
    let id = d.valueOf()
    todo !== '' && this.props.add({id, todo, time, done: false})
    this._input.value = ''
  }

  render () {
    return (
      <form onSubmit={this._onAddTodo}>
        <input type='text' placeholder='Add todo' ref={input => { this._input = input }} />
        <button type='submit'>Add!</button>
      </form>
    )
  }
}

module.exports = AddTodo
