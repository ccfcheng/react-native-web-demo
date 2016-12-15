import { combineReducers } from 'redux';
import queryReducer from './query';
import resultsReducer from './results';

const rootReducer = combineReducers({
  query: queryReducer,
  results: resultsReducer,
});

export default rootReducer;
