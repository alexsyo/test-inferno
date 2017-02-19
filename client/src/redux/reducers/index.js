import { combineReducers } from 'redux';
import resourcesReducer from './resourcesReducer.js';
import populationReducer from './populationReducer.js';

const reducers = combineReducers({
  resources: resourcesReducer,
  population: populationReducer
});

export default reducers;