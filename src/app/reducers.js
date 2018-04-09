import { combineReducers } from 'redux';
import routeReducer from './routeReducer';

// add global reducer here (if required)
export default function createReducer(injectedReducers) {
  return combineReducers({
    route: routeReducer,
    ...injectedReducers,
  });
}
