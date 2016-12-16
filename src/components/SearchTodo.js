var React = require('react')

class SearchTodo extends React.Component {
  constructor (props) {
    super(props)
    this._onSearch = this._onSearch.bind(this)
  }

  _onSearch (e) {
    e.preventDefault()
    let todo = this._input.value
    this.props.search(todo)
    this._input.value = ''
  }

  render () {
    return (
      <form onSubmit={this._onSearch}>
        <input type='text' placeholder='Search...' ref={input => { this._input = input }} />
        <button type='submit'>Search!</button>
        <br />
        <input type='checkbox' />Show completed
      </form>
    )
  }
}

module.exports = SearchTodo
