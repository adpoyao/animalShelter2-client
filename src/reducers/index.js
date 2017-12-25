import {combineReducers} from 'redux';
import {reducer as catReducer} from './cat';
import {reducer as dogReducer} from './dog';
import {reducer as toggleReducer} from './toggle'
import {reducer as getOldestReducer} from './getOldest'
import {reducer as formReducer} from 'redux-form';

const reducer = combineReducers({
  catShelter: catReducer,
  dogShelter: dogReducer,
  oldestShelter: getOldestReducer,
  animalView: toggleReducer,
  form: formReducer
});

export default reducer;