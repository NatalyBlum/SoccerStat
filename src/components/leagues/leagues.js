import React from 'react';
import Search from '../search/search';
import { NavLink } from 'react-router-dom';
import PaginationBox from '../paginationBox/paginationBox';
import styles from './leagues.module.css';
import { useSelector } from 'react-redux';

function Leagues() {

  const data = useSelector((state) => state.leagues.leagues);
  const isError  = useSelector((state) => state.leagues.isError);

  return (
    <div className={styles.leagues}>
      <Search />
      {
        isError ?
        <div>
          'Is Error'
        </div> : <></>
      }
      <div>
        <div className={styles.cardsList}>{
        data.map(item => <NavLink to={`/leagueCalendar/${item._id}`} key={item._id} item={item} className={styles.cardsItem}>
          <p>{item.name}</p>
          <p>{item.name}</p>
        </NavLink>
        )}
      </div>
      <PaginationBox />
      </div>
    </div>
  );
}

export default Leagues;
