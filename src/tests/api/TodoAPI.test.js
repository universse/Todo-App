var expect = require('expect')
var TodoAPI = require('TodoAPI')

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todoList')
  })
  it('should exist', () => {
    expect(TodoAPI).toExist()
  })

  describe('setTodos', () => {
    it('should set valid todoList', () => {
      var todoList = [
        {
          id: 1,
          todo: 'Eat chicken',
          done: false
        }
      ]
      TodoAPI.setTodos(todoList)
      var actual = JSON.parse(localStorage.getItem('todoList'))
      expect(actual).toEqual(todoList)
    })

    it('should not set todoList with invalid data', () => {
      var todoList = "invalid"
      TodoAPI.setTodos(todoList)
      expect(localStorage.getItem('todoList')).toBe(null)
    })
  })

  describe('getTodos', () => {
    it('should get valid todoList', () => {
      var todoList = [
        {
          id: 1,
          todo: 'Eat chicken',
          done: false
        }
      ]
      localStorage.setItem('todoList', JSON.stringify(todoList))
      var actual = TodoAPI.getTodos()
      expect(actual).toEqual(todoList)
    })

    it('should return [] with invalid data', () => {
      var actual = TodoAPI.getTodos()
      expect(actual).toEqual([])
    })
  })
})
