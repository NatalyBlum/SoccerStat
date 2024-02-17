import { LEAGUES, LEAGUES_CALENDAR, COUNT, CURRENT_PAGE_DATA_LEAGUE_MATCH, GET_ERROR } from "./actions";

let initialState = {
  leagues: [],
  leaguesCalendar: [],
  count: 0,
}

export const leaguesReducer = (state = initialState, action) => {
  console.log(action)
  switch(action.type) {
    case LEAGUES:
      return {
        ...state,
        leagues: action.leagues,
        isError: false,
      }
    case LEAGUES_CALENDAR:
      return {
        ...state,
        leaguesCalendar: action.leaguesCalendar,
        isError: false,
      }
    case COUNT:
      return {
        ...state,
        count: action.count,
      }
    case CURRENT_PAGE_DATA_LEAGUE_MATCH:
      return {
        ...state,
        currentPageDataLeagueMatch: action.currentPageDataLeagueMatch,
        isError: false,
      }
      case GET_ERROR:
        return {
          ...state,
          isError: true,
        }
    default:
      return state
  }
}
