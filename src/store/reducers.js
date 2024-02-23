import { combineReducers } from 'redux';
import { leaguesReducer } from './leagues-reducer';

export const rootReducer = combineReducers({
  leagues: leaguesReducer,
})
