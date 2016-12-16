var React = require('react')

class AddTodo extends React.Component {
  constructor (props) {
    super(props)
    this._onAddTodo = this._onAddTodo.bind(this)
  }

  _onAddTodo (e) {
    e.preventDefault()
    let todo = this._input.value
    let time = ''
    todo !== '' && this.props.add([todo, time])
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
