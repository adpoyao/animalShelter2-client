import {REACT_APP_API_BASE_URL} from '../config'

//Sync
export const GET_OLDEST_SUCCESS = 'GET_OLDEST_SUCCESS';
export const getOldestSuccess = (oldest) => ({
  type: GET_OLDEST_SUCCESS,
  oldest
})

export const GET_OLDEST_REQUEST = 'GET_OLDEST_REQUEST'
export const getOldestRequest = () => ({
  type: GET_OLDEST_REQUEST
})

export const GET_OLDEST_ERROR = 'GET_OLDEST_ERROR'
export const getOldestError = (error) => ({
  type: GET_OLDEST_ERROR,
  error
})

//async
export const GET_OLDEST = 'GET_OLDEST'
export const getOldest = () => dispatch => {
  dispatch(getOldestRequest());
  console.log('fetching the oldest but greatest...')
  return fetch(`${REACT_APP_API_BASE_URL}/oldest`)
  .then(res => {
    if(!res.ok){
      return Promise.reject(res.statusText)
    }
    console.log('received the oldest!')
    return res.json();
  })
  .then(oldest => dispatch(getOldestSuccess(oldest)))
  .catch(error => dispatch(getOldestError(error)))
}
