import React from 'react';
import Search from '../search/search';
import { NavLink } from 'react-router-dom';
import styles from './leagues.module.css';

function Leagues(props) {

  // console.log(props.data[0])

  return (
    <div className={styles.leagues}>
      <Search />
      <div className={styles.cardsList}>{
        props.data.map(item => <NavLink to={`/leagueCalendar/${item.id}`} key={item.id} className={styles.cardsItem}>
          <p>{item.name}</p>
          <p>{item.name}</p>
        </NavLink>
        )}
      </div>
    </div>
  );
}

export default Leagues;
