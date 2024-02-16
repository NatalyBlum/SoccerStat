import React from 'react';
import Search from '../search/search';
import { NavLink } from 'react-router-dom';
import PaginationBox from '../paginationBox/paginationBox';
import styles from './leagues.module.css';
import { useSelector } from 'react-redux';

function Leagues() {

  // console.log(props)

  const data = useSelector((state) => state.leagues.leagues);
   console.log(data)
  // const data = [1, 2, 3, 4, 5]

  return (
    <div className={styles.leagues}>
      <Search />
      {
        data ?
        <div className={styles.cardsList}>{
          data.map(item => <NavLink to={`/leagueCalendar/${item._id}`} key={item._id} item={item} className={styles.cardsItem}>
            <p>{item.name}</p>
            <p>{item.name}</p>
          </NavLink>
        //   data.map(item => <NavLink to={`/leagueCalendar/${item.id}`} key={item.id} item={item} className={styles.cardsItem}>
        //   <p>{item.name}</p>
        //   <p>{item.name}</p>
        // </NavLink>
          )}
        </div> : <></>
      }
      <PaginationBox />
    </div>
  );
}

export default Leagues;
