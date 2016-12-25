var React = require('react')
var {connect} = require('react-redux')
var {toggleCompleted, inputSearch} = require('actions')

let SearchTodo = ({showCompleted, searchValue, dispatch}) =>
  <form onSubmit={(e) => { e.preventDefault(); dispatch(inputSearch('')) }} className='pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30 w-40-l w-70 center'>
    <input type='text' placeholder='Search...' value={searchValue} onChange={(e) => { dispatch(inputSearch(e.target.value)) }} className='center w-100 db pa3-l pa2-m pa1' />
    <div className='center w-100 mt3'>
      <label className='f5-ns f6'><input type='checkbox' onChange={() => { dispatch(toggleCompleted()) }} className='dib ml2 mr2 w1 h1' />Show completed</label>
    </div>
  </form>

module.exports = connect(
  state => ({
    showCompleted: state.showCompleted,
    searchValue: state.searchValue
  })
)(SearchTodo)
