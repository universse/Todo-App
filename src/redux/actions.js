var axios = require('axios')

export const inputSearch = searchValue => ({
  type: 'INPUT_SEARCH',
  searchValue
})

export const toggleCompleted = () => ({
  type: 'TOGGLE_COMPLETED'
})

export const addTodo = todo => ({
  type: 'ADD_TODO',
  todo
})

export const checkTodo = id => ({
  type: 'CHECK_TODO',
  id
})

export const startFetchingLocation = () => ({
  type: 'START_FETCHING_LOCATION'
})

export const completeFetchingLocation = url => ({
  type: 'COMPLETE_FETCHING_LOCATION',
  url
})

export const fetchLocation = () => (dispatch, getState) => {
  dispatch(startFetchingLocation())
  let baseURL = 'http://maps.google.com/?q='
  axios.get('http://ipinfo.io/').then(resolve => {
    let loc = resolve.data.loc
    dispatch(completeFetchingLocation(baseURL + loc))
  })
}
