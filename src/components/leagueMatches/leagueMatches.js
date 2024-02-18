import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PaginationBox from '../paginationBox/paginationBox';
import styles from './leagueMatches.module.css';
import MatchTable from '../matchTable/matchTable';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { LEAGUE_MATCHES, COUNT_LEAGUE_MATCHES, GET_ERROR } from '../../store/actions';
import { BASE_URL } from '../../App';
import { NavLink } from 'react-router-dom';

function LeagueMatches() {

  const dispatch = useDispatch();
  const { id } = useParams();
  const data = useSelector((state) => state.leagues.leagues);
  const currentLeague = data.filter((item) => item._id === id);
  const currentPage = useSelector((state) => state.leagues.currentPage);
  const countMatches = useSelector((state) => state.leagues.countLeagueMatches);
  const isError  = useSelector((state) => state.leagues.isError);
  const [leaguePerPage] = useState(8);
  const skip = (currentPage - 1) * leaguePerPage;
  const countPage = Math.ceil(countMatches / leaguePerPage);


  const currentData = data.slice(skip, skip + leaguePerPage);

  useEffect(() => {
        // axios.get(`http://api.football-data.org/v4/competitions/${id}/matches`)
        //       .then(response => {
        //         console.log(response)
        //         dispatch({
        //           type: MATCHES_LEAGUE,
        //           matches_league: response.data.competitions,
        //         },
        //         {
        //           type: COUNT_MATCHES_LEAGUE,
        //           count: response.data.count,
        //         })
        //       })
            axios.get(BASE_URL)
              .then(response => {
                if (response.status > 299) {
                  dispatch({
                  type: GET_ERROR,
                  })
                }
                console.log(response)
                dispatch({
                  type: LEAGUE_MATCHES,
                  league_matches: response.data.result.items,
                })
                dispatch({
                  type: COUNT_LEAGUE_MATCHES,
                  countLeagueMatches: response.data.result.items.length,
                })
              })
  }, [])

  return (
    <>
      {
        isError ?
        <div>
          'Is Error'
        </div> :
        <div className={styles.calendarBox}>
          <div className={styles.leagueMatches}>
            <NavLink to={'/'} className={styles.headerLink}>Лиги</NavLink>
            <svg className={styles.arrow} width="10" height="8" viewBox="0 0 13 8" fill="none"   xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.65689 5.60651L1.35359 0.303208L0.646484 1.01031L6.65689 7.02072L12.6673 1.01031L11.9602 0.303208L6.65689 5.60651Z" fill="#A1A6B4"/>
            </svg>
            <p className={styles.name}>
              {
                currentLeague.length ?
                currentLeague[0].name : <></>
              }
            </p>
          </div>
          <h3 className={styles.head}>Матчи</h3>
          <div className={styles.filter}>
            <span className={styles.text}>с</span>
            <label className={styles.inputDate}>
              <input type="date"></input>
            </label>
            <span className={styles.text}>по</span>
            <label className={styles.inputDate}>
              <input type="date"></input>
            </label>
          </div>
          <div>
            <MatchTable data={currentData}/>
          </div>
          <PaginationBox count={countPage} />
        </div>
      }
    </>
  );
}

export default LeagueMatches;
