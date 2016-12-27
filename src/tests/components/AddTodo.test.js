var React = require('react')
var ReactDOM = require('react-dom')
import expect from 'expect'
var TestUtils = require('react-addons-test-utils')

var AddTodo = require('AddTodo')

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist()
  })
})
