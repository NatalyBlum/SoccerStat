import React from 'react';
import Search from '../search/search';
import { NavLink } from 'react-router-dom';
import PaginationBox from '../paginationBox/paginationBox';
import styles from './leagues.module.css';

function Leagues(props) {

  // console.log(props)

  return (
    <div className={styles.leagues}>
      <Search />
      <div className={styles.cardsList}>{
        props.data.map(item => <NavLink to={`/leagueCalendar/${item.id}`} key={item.id} item={item} className={styles.cardsItem}>
          <p>{item.name}</p>
          <p>{item.name}</p>
        </NavLink>
        )}
      </div>
      <PaginationBox />
    </div>
  );
}

export default Leagues;
