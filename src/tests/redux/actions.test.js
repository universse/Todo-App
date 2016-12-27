import expect from 'expect'
import {toggleCompleted, inputSearch, addTodo, checkTodo, startFetchingLocation, completeFetchingLocation, fetchLocation} from 'actions'

describe('Actions', () => {
  it('should properly input search', () => {
    let expectedAction = {
      type: 'INPUT_SEARCH',
      searchValue: 'random'
    }
    let actualAction = inputSearch(expectedAction.searchValue)
    expect(actualAction).toEqual(expectedAction)
  })

  it('should properly toggle Show Completed', () => {
    let expectedAction = {
      type: 'TOGGLE_COMPLETED'
    }
    let actualAction = toggleCompleted()
    expect(actualAction).toEqual(expectedAction)
  })

  it('should properly add todo', () => {
    let expectedAction = {
      type: 'ADD_TODO',
      todoItem: {
        id: 1,
        todo: 'learn redux',
        done: false
      }
    }
    let actualAction = addTodo(expectedAction.todoItem)
    expect(actualAction).toEqual(expectedAction)
  })

  it('should properly check off done todo', () => {
    let expectedAction = {
      type: 'CHECK_TODO',
      id: 2,
      done: true
    }
    let actualAction = checkTodo(expectedAction.id, expectedAction.done)
    expect(actualAction).toEqual(expectedAction)
  })
})
