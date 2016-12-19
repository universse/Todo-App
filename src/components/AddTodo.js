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
      <form onSubmit={this._onAddTodo} className='pv4 w-50 center'>
        <input type='text' placeholder='Add a task' ref={input => { this._input = input }} className='center db w-100 pa2' />
        <button type='submit' className='center bn w-100 f4 link dim br2 pv3 mt3 db white bg-blue'>Add!</button>
      </form>
    )
  }
}

module.exports = AddTodo
