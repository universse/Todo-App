var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var TestUtils = require('react-addons-test-utils')

var TodoList = require('TodoList')

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist()
  })

  it('should render one list item for each todo in todo list', () => {
    var list = [
      {
        id: 1,
        todo: 'Learn React',
        time: 'Sunday',
        done: false
      },
      {
        id: 2,
        todo: 'Learn React Native',
        time: 'Monday',
        done: true
      }
    ]
    const renderer = TestUtils.createRenderer()
    renderer.render(<TodoList list={list} check={() => () => {}} />)
    const result = renderer.getRenderOutput()
    expect(result.props.children.length).toEqual(list.length)
  })
})
