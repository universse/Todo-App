var React = require('react')

let SearchTodo = ({clear, input, showCompleted, searchValue}) =>
  <form onSubmit={clear} className='pv3 ba bl-0 bt-0 br-0 b--dotted b--black-30 w-40-l w-70 center'>
    <input type='text' placeholder='Search...' value={searchValue} onChange={input} className='center w-100 db pa3-l pa2-m pa1' />
    <div className='center w-100 mt3'>
      <label className='f5-ns f6'><input type='checkbox' onChange={showCompleted} className='dib ml2 mr2 w1 h1' />Show completed</label>
    </div>
  </form>

module.exports = SearchTodo
