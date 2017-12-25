import * as actions from '../actions'

const initialState = {
  view: null
}

export const reducer = (state=initialState, action) => {
  switch(action.type){
    case actions.TOGGLE:
      return Object.assign({}, state, {
        view: action.animalType
      });
  }
  return state;
}