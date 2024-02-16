import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Leagues from './components/leagues/leagues';
import Teams from './components/teams/teams';
import Header from './components/header/header';
import LeagueCalendar from './components/leagueСalendar/leagueСalendar';
import styles from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { LEAGUES, COUNT } from './store/actions';
export const BASE_URL = 'http://example.front.ylab.io/api/v1/articles/';
// export const BASE_URL = 'http://api.football-data.org/v4/competitions/';

function App() {

  // const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://example.front.ylab.io/api/v1/articles/')
          .then(response => {
            // console.log(response.data.result.items)
            // setData(response.data.result.items);
            dispatch({
              type: LEAGUES,
              leagues: response.data.result.items,
            },
            {
              type: COUNT,
              count: response.data.result.items.length,
            })
          })
  }, [])

  const data = useSelector((state) => state.leagues);
  // console.log(data)


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
        <Route  path={'/leagueCalendar/:id'}
                element={<LeagueCalendar />} />
      </Routes> : <></>
      }
    </div>
  );
}

export default App;
