import {REACT_APP_API_BASE_URL} from '../config'

//Sync
export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = (dog) => ({
  type: FETCH_DOG_SUCCESS,
  dog
})

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST'
export const fetchDogRequest = () => ({
  type: FETCH_DOG_REQUEST
})

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR'
export const fetchDogError = (error) => ({
  type: FETCH_DOG_ERROR,
  error
})

export const ADOPT_DOG_SUCCESS = 'ADOPT_DOG_SUCCESS';
export const adoptDogSuccess = () => ({
  type: ADOPT_DOG_SUCCESS
})

export const ADOPT_DOG_REQUEST = 'ADOPT_DOG_REQUEST'
export const adoptDogRequest = () => ({
  type: ADOPT_DOG_REQUEST
})

export const ADOPT_DOG_ERROR = 'ADOPT_DOG_ERROR'
export const adoptDogError = (error) => ({
  type: ADOPT_DOG_ERROR,
  error
})

//async
export const FETCH_DOG = 'FETCH_DOG'
export const fetchDog = () => dispatch => {
  dispatch(fetchDogRequest());
  console.log('fetching next dog...')
  return fetch(`${REACT_APP_API_BASE_URL}/dog`)
  .then(res => {
    if(!res.ok){
      return Promise.reject(res.statusText)
    }
    console.log('received a dog!')
    return res.json();
  })
  .then(dog => dispatch(fetchDogSuccess(dog)))
  .catch(error => dispatch(fetchDogError(error)))
}

export const ADOPT_DOG = 'ADOPT_DOG'
export const adoptDog = () => dispatch => {
  dispatch(adoptDogRequest());
  console.log('adopting this dog...')
  return fetch(`${REACT_APP_API_BASE_URL}/dog`, {
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
  .then(() => dispatch(adoptDogSuccess()))
  .then(() => dispatch(fetchDog()))
  .catch(error => dispatch(adoptDogError(error)))
}