import { LEAGUES, LEAGUES_CALENDAR, COUNT_LEAGUES, GET_ERROR, CURRENT_PAGE, COUNT_LEAGUE_MATCHES, LEAGUE_MATCHES, FILTERED_DATA } from "./actions";

let initialState = {
  leagues: null,
  leaguesCalendar: [],
  leagueMatches: [],
  countLeagues: 0,
  countLeagueMatches: 0,
  currentPage: 1,
  filteredData: [],
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
    case LEAGUE_MATCHES:
      return {
        ...state,
        leagueMatches: action.leagueMatches,
        isError: false,
      }
    case COUNT_LEAGUES:
      return {
        ...state,
        countLeagues: action.countLeagues,
      }
    case COUNT_LEAGUE_MATCHES:
      return {
        ...state,
        countLeagueMatches: action.countLeagueMatches,
      }
    case FILTERED_DATA:
      return {
        ...state,
        filteredData: action.filteredData,
      }
    // case CURRENT_PAGE_DATA_LEAGUE_MATCH:
    //   return {
    //     ...state,
    //     currentPageDataLeagueMatch: action.currentPageDataLeagueMatch,
    //     isError: false,
    //   }
    case GET_ERROR:
      return {
        ...state,
        isError: true,
      }
    case CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      }
    default:
      return state
  }
}
