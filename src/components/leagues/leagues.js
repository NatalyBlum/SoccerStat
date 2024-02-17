import { useState } from 'react';
import Search from '../search/search';
import { NavLink } from 'react-router-dom';
import PaginationBox from '../paginationBox/paginationBox';
import styles from './leagues.module.css';
import { useSelector } from 'react-redux';

function Leagues() {

  const data = useSelector((state) => state.leagues.leagues);
  const isError  = useSelector((state) => state.leagues.isError);
  const currentPage = useSelector((state) => state.leagues.currentPage);
  const countLeagues = useSelector((state) => state.leagues.countLeagues);
  const [leaguePerPage] = useState(3);
  const skip = (currentPage - 1) * leaguePerPage;
  const countPage = Math.ceil(countLeagues / leaguePerPage);

  const currentData = data.slice(skip, skip + leaguePerPage);
  // console.log(currentData)

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
        currentData.map(item => <NavLink to={`/leagueMatches/${item._id}`} key={item._id} item={item} className={styles.cardsItem}>
          <p>{item.name}</p>
          <p>{item.name}</p>
        </NavLink>
        )}
        </div>
        <PaginationBox count={countPage}/>
      </div>
    </div>
  );
}

export default Leagues;
