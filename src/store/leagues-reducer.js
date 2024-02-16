import { LEAGUES, LEAGUES_CALENDAR, COUNT } from "./actions";

let initialState = {
  leagues: [],
  leaguesCalendar: [],
  count: 0,
}

export const leaguesReducer = (state = initialState, action) => {
  switch(action.type) {
    case LEAGUES:
      return {
        ...state,
        leagues: action.leagues
      }
    case LEAGUES_CALENDAR:
      return {
        ...state,
        leaguesCalendar: action.leaguesCalendar,
      }
    case COUNT:
      return {
        ...state,
        count: action.count,
      }
    default:
      return state
  }
}
