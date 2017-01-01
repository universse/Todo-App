import React from 'react'
import {connect} from 'react-redux'
import {startAddingTodo} from 'actions'

class AddTodo extends React.Component {
  constructor (props) {
    super(props)
    this._addTodo = this._addTodo.bind(this)
  }

  _addTodo (e) {
    e.preventDefault()
    let {uid, dispatch} = this.props
    let todo = this._input.value
    if (todo !== '') {
      dispatch(startAddingTodo(uid, todo))
      this._input.value = ''
    } else {
      this._input.focus()
    }
  }

  render () {
    return (
      <form onSubmit={this._addTodo} className='pt4 pb3 w-40-l w-70 center'>
        <input type='text' placeholder='Add a task' ref={input => { this._input = input }} className='center db w-100 pa3-l pa2-m pa1' />
        <button type='submit' className='center bn w-100 f4-l f5-m f6 link dim br2 pv3-ns pv2 mt3 db white bg-blue'>Add!</button>
      </form>
    )
  }
}

export default connect(
  state => ({
    uid: state.user
  })
)(AddTodo)
