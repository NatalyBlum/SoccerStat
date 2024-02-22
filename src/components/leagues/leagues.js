import { useState } from 'react';
import Search from '../search/search';
import { NavLink } from 'react-router-dom';
import PaginationBox from '../paginationBox/paginationBox';
import styles from './leagues.module.css';
import { useSelector } from 'react-redux';

function Leagues() {

  const data = useSelector((state) => state.leagues.leagues);
  const filteredData = useSelector((state) => state.leagues.filteredData);
  const currentPage = useSelector((state) => state.leagues.currentPage);
  const [leaguePerPage] = useState(9);
  const skip = (currentPage - 1) * leaguePerPage;

  const getCurrentData = (data) => {
    if (!data) {
      return [];
    }
    return data.slice(skip, skip + leaguePerPage);
  }
  let currentData = getCurrentData(filteredData);
  const countPage = Math.ceil(filteredData.length / leaguePerPage);

  return (
    <div className={styles.leagues}>
      <Search data={data}/>
      {
        currentData.length ?
        <div>
          <div className={styles.cardsList}>{
            currentData.map(item => <NavLink to={`/leagueMatches/${item.id}`} key={item.id} item={item} className={styles.cardsItem}>
              {
                item.name ? <p>{item.name}</p> : <p>-</p>
              }
              {
                item.area.name ? <p>{item.area.name}</p> : <p>-</p>
              }
            </NavLink>
            )}
            </div>
            <PaginationBox count={countPage}/>
          </div> : <div className={styles.message}>По Вашему запросу ничего не найдено</div>
      }
    </div>
  );
}

export default Leagues;
