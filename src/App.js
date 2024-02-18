import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Leagues from './components/leagues/leagues';
import Teams from './components/teams/teams';
import Header from './components/header/header';
import LeagueMatches from './components/leagueMatches/leagueMatches';
import styles from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { LEAGUES, COUNT_LEAGUES, GET_ERROR } from './store/actions';
export const BASE_URL = 'http://example.front.ylab.io/api/v1/articles';
// export const BASE_URL = 'http://api.football-data.org/v4/competitions/';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    // axios.get('http://api.football-data.org/v4/competitions/')
    // .then(response => {
    //   dispatch({
    //     type: LEAGUES,
    //     leagues: response.data.competitions,
    //   },
    //   {
    //     type: COUNT_LEAGUES,
    //     count: response.data.count,
    //   })
    // })
    axios.get(BASE_URL)
          .then(response => {
            if (response.status > 299) {
              dispatch({
              type: GET_ERROR,
              })
            }
            dispatch({
              type: LEAGUES,
              leagues: response.data.result.items,
            })
            dispatch({
              type: COUNT_LEAGUES,
              countLeagues: response.data.result.items.length,
            })
          })
  }, [])

  const data = useSelector((state) => state.leagues.leagues);

  return (
    <div className={styles.App}>
      <div>
        <Header />
      </div>
      {
        data ?
        <Routes>
        <Route  path={`/`}
                element={<Leagues />} />
        <Route  path={'/teams'}
                element={<Teams />} />
        <Route  path={'/leagueMatches/:id'}
                element={<LeagueMatches />} />
      </Routes> : <></>
      }
    </div>
  );
}

export default App;
