import { combineReducers } from 'redux';
import resourcesReducer from './resourcesReducer.js';

const reducers = combineReducers({
    resources: resourcesReducer
});

export default reducers;