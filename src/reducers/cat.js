import * as actions from '../actions'

const initialState = {
  data: null,
  error: null,
  loading: false
}


export const reducer = (state=initialState, action) => {
  switch(action.type){
    case actions.FETCH_CAT_REQUEST:
    case actions.ADOPT_CAT_REQUEST:
      return Object.assign({}, state, {
        error: null,
        loading: true
      });
    case actions.FETCH_CAT_ERROR:
    case actions.ADOPT_CAT_ERROR:
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      })
    case actions.FETCH_CAT_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        error: false,
        data: action.cat
      })
    case actions.ADOPT_CAT_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        error: false
      })
  }
  return state
}