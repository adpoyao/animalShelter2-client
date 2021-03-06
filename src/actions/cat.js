import {REACT_APP_API_BASE_URL} from '../config'

//Sync
export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = (cat) => ({
  type: FETCH_CAT_SUCCESS,
  cat
})

export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST'
export const fetchCatRequest = () => ({
  type: FETCH_CAT_REQUEST
})

export const FETCH_CAT_ERROR = 'FETCH_CAT_ERROR'
export const fetchCatError = (error) => ({
  type: FETCH_CAT_ERROR,
  error
})

export const ADOPT_CAT_SUCCESS = 'ADOPT_CAT_SUCCESS';
export const adoptCatSuccess = () => ({
  type: ADOPT_CAT_SUCCESS
})

export const ADOPT_CAT_REQUEST = 'ADOPT_CAT_REQUEST'
export const adoptCatRequest = () => ({
  type: ADOPT_CAT_REQUEST
})

export const ADOPT_CAT_ERROR = 'ADOPT_CAT_ERROR'
export const adoptCatError = (error) => ({
  type: ADOPT_CAT_ERROR,
  error
})

export const SUBMIT_CAT_SUCCESS = 'SUBMIT_CAT_SUCCESS';
export const submitCatSuccess = () => ({
  type: SUBMIT_CAT_SUCCESS
})

export const SUBMIT_CAT_REQUEST = 'SUBMIT_CAT_REQUEST'
export const submitCatRequest = () => ({
  type: SUBMIT_CAT_REQUEST
})

export const SUBMIT_CAT_ERROR = 'SUBMIT_CAT_ERROR'
export const submitCatError = (error) => ({
  type: SUBMIT_CAT_ERROR,
  error
})

//async
export const FETCH_CAT = 'FETCH_CAT'
export const fetchCat = () => dispatch => {
  dispatch(fetchCatRequest());
  console.log('fetching next cat...')
  return fetch(`${REACT_APP_API_BASE_URL}/cat`)
  .then(res => {
    if(!res.ok){
      return Promise.reject(res.statusText)
    }
    console.log('received a cat!')
    return res.json();
  })
  .then(cat => dispatch(fetchCatSuccess(cat)))
  .catch(error => dispatch(fetchCatError(error)))
}

export const ADOPT_CAT = 'ADOPT_CAT'
export const adoptCat = () => dispatch => {
  dispatch(adoptCatRequest());
  console.log('adopting this cat...')
  return fetch(`${REACT_APP_API_BASE_URL}/cat`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json'
    }
  })
  .then(res => {
    if(!res.ok){
      return Promise.reject(res.statusText)
    }
    console.log('adoption request received!')
  })
  .then(() => dispatch(adoptCatSuccess()))
  .then(() => dispatch(fetchCat()))
  .catch(error => dispatch(adoptCatError(error)))
}

export const SUBMIT_CAT = 'SUBMIT_CAT'
export const submitCat = (data, type) => dispatch => {
  dispatch(submitCatRequest());
  console.log('Helping you abandon your pet...')
  return fetch(`${REACT_APP_API_BASE_URL}/${type}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json'
    }
  })
  .then(res => {
    if(!res.ok){
      return Promise.reject(res.statusText)
    }
    console.log('Added it to shelter!')
  })
  .then(() => dispatch(submitCatSuccess()))
  .then(() => dispatch(fetchCat()))
  .catch(error => dispatch(submitCatError(error)))
}