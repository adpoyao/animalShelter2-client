import * as actions from '../actions'

const initialState = {
  data: null,
  error: null,
  loading: null
}

export const reducer = (state=initialState, action) => {
  switch(action.type){
    case actions.GET_OLDEST_REQUEST:
      return Object.assign({}, state, {
        error: null,
        loading: true
      });
    case actions.GET_OLDEST_ERROR:
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      });
    case actions.GET_OLDEST_SUCCESS:
      return Object.assign({}, state, {
        error: null,
        loading: false,
        data: action.oldest
      });
  }
  return state
}