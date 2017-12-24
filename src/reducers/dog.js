import * as actions from '../actions'

const initialState = {
  data: null,
  error: null,
  loading: null
}

export const reducer = (state=initialState, action) => {
  switch(action.type){
    case actions.FETCH_DOG_REQUEST:
    case actions.ADOPT_DOG_REQUEST:
      return Object.assign({}, state, {
        error: null,
        loading: true
      });
    case actions.FETCH_DOG_ERROR:
    case actions.ADOPT_DOG_ERROR:
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      });
    case actions.FETCH_DOG_SUCCESS:
      return Object.assign({}, state, {
        error: null,
        loading: false,
        data: action.dog
      });
    case actions.ADOPT_DOG_SUCCESS:
      return Object.assign({}, state, {
        error: null,
        loading: false
      })
  }
  return state
}