import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import eventsReducer from './eventsReducer';

const rootReducer = combineReducers({
  events : eventsReducer,
  routing: routerReducer
});

export default rootReducer;
