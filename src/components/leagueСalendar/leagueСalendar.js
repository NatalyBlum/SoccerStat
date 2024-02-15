import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PaginationBox from '../paginationBox/paginationBox';
import styles from './leagueCalendar.module.css';
import axios from 'axios';
import { BASE_URL } from '../../App';

function LeagueCalendar() {

  // console.log(props)
  const { id } = useParams();
  // const item = props.data.filter(item => item.id === id);
  // const currentItem = item[0];

    const [matches, setMatches] = useState([]);
    const [count, setCount] = useState(0);

    // const id = props.item.id;
    console.log(id)
    // const count = 15;

  useEffect(() => {
    axios.get(BASE_URL + `${id}/matches`)
          .then(response => {
            console.log(response)
            setMatches(response.data.matches);
            setCount(response.data.count);
          })
  }, [id])

  return (
    <div className={styles.calendarBox}>
      <div className={styles.leagueCalendar}>
        <p>
          Лиги
        </p>
        <svg className={styles.arrow} width="10" height="8" viewBox="0 0 13 8" fill="none"   xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.65689 5.60651L1.35359 0.303208L0.646484 1.01031L6.65689 7.02072L12.6673 1.01031L11.9602 0.303208L6.65689 5.60651Z" fill="#A1A6B4"/>
        </svg>
        <p className={styles.name}>
          {/* {props.item.name} */}
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

      </div>
      <PaginationBox count={count}/>
    </div>
  );
}

export default LeagueCalendar;
