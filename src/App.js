import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Leagues from './components/leagues/leagues';
import Teams from './components/teams/teams';
import Header from './components/header/header';
import LeagueMatches from './components/leagueMatches/leagueMatches';
import TeamMatches from './components/teamMatches/teamMatches';
import styles from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { LEAGUES, COUNT_LEAGUES, GET_ERROR } from './store/actions';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(process.env.REACT_APP_BASE_URL)
    .then(response => {
      dispatch({
        type: LEAGUES,
        leagues: response.data.competitions,
      })
      dispatch({
        type: COUNT_LEAGUES,
        count: response.data.count,
      })
    })
    .catch (() => {
      dispatch({
        type: GET_ERROR,
      })
    })
  }, [dispatch])

  const data = useSelector((state) => state.leagues.leagues);
  const isError  = useSelector((state) => state.leagues.isError);

  return (
    <div className={styles.app}>
      <div>
        <Header />
      </div>
      {
        isError ?
        <div className={styles.error}>
          Вы достигли лимита запросов.
        </div> : <></>
      }
      {
        data ?
        <Routes>
        <Route  path={`/`}
                element={<Leagues />} />
        <Route  path={'/teams'}
                element={<Teams />} />
        <Route  path={'/leagueMatches/:id'}
                element={<LeagueMatches />} />
        <Route  path={'/teamMatches/:id'}
                element={<TeamMatches />} />
      </Routes> : <></>
      }
    </div>
  );
}

export default App;
