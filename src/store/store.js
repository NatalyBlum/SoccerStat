


let store = {
  state: {
    leagues: [],
    leagueMatches: [],
    count: 0,
    currentPageDataLeagueMatch: [],
  },
  _callSubscriber() {
    console.log('state changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  // dispatch(action) {

  //   this._state.profilePage = profileReducer(this._state.profilePage, action);
  //   this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
  //   this._state.sidebar = sidebarReducer(this._state.sidebar, action);

  //   this._callSubscriber(this._state);
  // }
}


export default store;



