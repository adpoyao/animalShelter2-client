import {combineReducers} from 'redux';
import {reducer as catReducer} from './cat';
import {reducer as dogReducer} from './dog';

const reducer = combineReducers({
  catShelter: catReducer,
  dogShelter: dogReducer
});

export default reducer;