var expect = require('expect')
var {showCompletedReducer, searchValueReducer, todoListReducer, locationReducer} = require('reducers')

describe('Reducers', () => {
  describe('showCompletedReducer', () => {
    it('should input toggle showCompleted', () => {
      let action = {
        type: 'TOGGLE_COMPLETED'
      }
      let actualState = showCompletedReducer(false, action)
      expect(actualState).toEqual(true)
    })
  })

  describe('searchValueReducer', () => {
    it('should input searchValue', () => {
      let action = {
        type: 'INPUT_SEARCH',
        searchValue: 'random'
      }
      let actualState = searchValueReducer('', action)
      expect(actualState).toEqual(action.searchValue)
    })
  })

  describe('todoListReducer', () => {
    it('should add todo', () => {
      let action = {
        type: 'ADD_TODO',
        todo: 'learn redux'
      }
      let actualState = todoListReducer([], action)
      expect(actualState.length).toBe(1)
      expect(actualState[0].todo).toEqual(action.todo)
    })

    it('should check todo', () => {
      let action = {
        type: 'CHECK_TODO',
        id: 1
      }
      let actualState = todoListReducer([{
        id: 1,
        todo: 'learn redux',
        time: 'Dec',
        done: false
      }], action)
      expect(actualState[0].done).toEqual(true)
    })
  })
})
