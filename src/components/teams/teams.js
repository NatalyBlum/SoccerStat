import { useState } from 'react';
import Search from '../search/search';
import { NavLink } from 'react-router-dom';
import PaginationBox from '../paginationBox/paginationBox';
import styles from './teams.module.css';
import { useSelector } from 'react-redux';
import  MOCK_DATA from '../../MOCK_DATA.json';

function Teams() {

  const data = useSelector((state) => state.leagues.leagues);
  const filteredData = useSelector((state) => state.leagues.filteredData);
  const isError  = useSelector((state) => state.leagues.isError);
  const currentPage = useSelector((state) => state.leagues.currentPage);
  const [leaguePerPage] = useState(14);
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
    <div className={styles.teams}>
      <Search data={data}/>
      {
        isError ?
        <div>
          'Is Error'
        </div> : <></>
      }
      {
        currentData.length ?
        <div>
          <div className={styles.cardsList}>{
            currentData.map(item => <NavLink to={`/teamMatches/${item.id}`} key={item.id} item={item} className={styles.cardsItem}>
              <p>{item.name}</p>
            </NavLink>
            )}
            </div>
            <PaginationBox count={countPage}/>
          </div> : <div className={styles.message}>По Вашему запросу ничего не найдено</div>
      }
    </div>
  );
}

export default Teams;
