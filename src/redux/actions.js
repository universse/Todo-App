// import axios from 'axios'
import firebase, {firebaseRef, githubProvider} from 'firebase.main'
import {push} from 'react-router-redux'

export const inputSearch = searchValue => ({
  type: 'INPUT_SEARCH',
  searchValue
})

export const toggleCompleted = () => ({
  type: 'TOGGLE_COMPLETED'
})

export const addTodo = todoItem => ({
  type: 'ADD_TODO',
  todoItem
})

export const fetchTodoList = () => (dispatch, getState) => {
  let uid = getState().user
  firebaseRef.child(uid).once('value').then(snapshot => {
    var savedTodoList = snapshot.val() || {}
    var formattedTodoList = Object.keys(savedTodoList).map(id => ({id, ...savedTodoList[id]}))
    dispatch(addTodo(formattedTodoList))
  })
}

export const startAddingTodo = todo => (dispatch, getState) => {
  let d = new Date()
  let time = d.toLocaleString()
  let todoItem = {
    todo,
    time,
    done: false
  }
  let uid = getState().user
  let todoItemRef = firebaseRef.child(uid).push(todoItem)
  // todoItemRef.update({id: todoItemRef.key})
  return todoItemRef.then(() => {
    dispatch(addTodo({
      id: todoItemRef.key,
      ...todoItem
    }))
  })
}

export const checkTodo = (id, done) => ({
  type: 'CHECK_TODO',
  id,
  done
})

export const startCheckingTodo = (id, done) => (dispatch, getState) => {
  let uid = getState().user
  var todoItemRef = firebaseRef.child(`${uid}/${id}`)
  todoItemRef.update({
    done
  }).then(() => {
    dispatch(checkTodo(id, done))
  })
}

export const logIn = uid => ({
  type: 'LOG_IN',
  uid
})

export const startLogin = () => (dispatch, getState) =>
  firebase.auth().signInWithPopup(githubProvider)
  // .then((user) => {
  //   dispatch(logIn(user.user.uid))
  //   dispatch(fetchTodoList(user.user.uid))
  //   dispatch(push('app'))
  // })

export const logOut = () => ({
  type: 'LOG_OUT'
})

export const startLogout = () => (dispatch, getState) =>
  firebase.auth().signOut()
  // .then(() => {
  //   dispatch(clearList())
  //   dispatch(logOut())
  //   dispatch(push(''))
  // })

// export const startFetchingLocation = () => ({
//   type: 'START_FETCHING_LOCATION'
// })
//
// export const completeFetchingLocation = url => ({
//   type: 'COMPLETE_FETCHING_LOCATION',
//   url
// })
//
// export const fetchLocation = () => (dispatch, getState) => {
//   dispatch(startFetchingLocation())
//   let baseURL = 'http://maps.google.com/?q='
//   axios.get('http://ipinfo.io/').then(resolve => {
//     let loc = resolve.data.loc
//     dispatch(completeFetchingLocation(baseURL + loc))
//   })
// }
