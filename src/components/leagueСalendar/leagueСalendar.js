import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PaginationBox from '../paginationBox/paginationBox';
import styles from './leagueCalendar.module.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { BASE_URL } from '../../App';
import { LEAGUES_CALENDAR, GET_ERROR, COUNT } from '../../store/actions';
import { useSelector } from 'react-redux';

function LeagueCalendar() {

  const [isDownloaded, setIsDownloaded] = useState(false);

  const dispatch = useDispatch();
  const { id } = useParams();
  const dataCurrentPage = useSelector((state) => state.leagues.currentPageDataLeagueMatch);

  useEffect(() => {
    // axios.get(BASE_URL + `${id}/matches`)
    axios.get(BASE_URL + `${id}`)
          .then(response => {
            if (response.status > 299) {
              dispatch({
                type: GET_ERROR,
              })
            }
            // console.log(response.data.result)
            dispatch({
              type: LEAGUES_CALENDAR,
              leaguesCalendar: response.data.result,
            })
            dispatch({
              type: COUNT,
              count: Math.ceil(response.data.result.price),
            })
            setIsDownloaded(true)
          })
  }, [id])
  // console.log(count)

  const data = useSelector((state) => state.leagues.leaguesCalendar);
  const count = useSelector((state) => state.leagues.count);
  const isError  = useSelector((state) => state.leagues.isError);
  console.log('dataCurrentPage', dataCurrentPage)
  // console.log('data', data)
  // console.log('count', count)

  return (
    <>
    {
      isDownloaded &&
      <div>
      {
        isError ?
        <div>
          'Is Error'
        </div> :
        <div className={styles.calendarBox}>
          <div className={styles.leagueCalendar}>
            <p>
              Лиги
            </p>
            <svg className={styles.arrow} width="10" height="8" viewBox="0 0 13 8" fill="none"   xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.65689 5.60651L1.35359 0.303208L0.646484 1.01031L6.65689 7.02072L12.6673 1.01031L11.9602 0.303208L6.65689 5.60651Z" fill="#A1A6B4"/>
            </svg>
            <p className={styles.name}>
              {
                data.name
              }
            </p>
          </div>
          <h3 className={styles.head}>Матчи</h3>
          <div>
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
            {
              dataCurrentPage ?
              dataCurrentPage.map((item) => {
                <div>{item.title}</div>
              }) : <></>
            }
            {/* {
              dataCurrentPage.map((item) => {
                <div>{item.title}</div>
              })
            } */}
          </div>
          <PaginationBox count={count} />
        </div>
      }
      </div>
    }
    </>
  );
}

export default LeagueCalendar;
