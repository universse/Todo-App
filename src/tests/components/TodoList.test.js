var React = require('react')
var ReactDOM = require('react-dom')
import expect from 'expect'
var TestUtils = require('react-addons-test-utils')

var TodoList = require('TodoList')

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist()
  })
})
