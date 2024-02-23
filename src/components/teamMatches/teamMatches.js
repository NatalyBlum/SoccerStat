import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import PaginationBox from '../paginationBox/paginationBox';
import styles from './teamMatches.module.css';
import MatchTable from '../matchTable/matchTable';
import { useSelector } from 'react-redux';
import  MOCK_DATA from '../../MOCK_DATA.json';

function TeamMatches() {

  const { id } = useParams();
  const data = useSelector((state) => state.leagues.leagues);
  const currentTeam = data.filter((item) => String(item.id) === id);
  const currentPage = useSelector((state) => state.leagues.currentPage);
  const [leaguePerPage] = useState(8);
  const [selectStart, setSelectStart] = useState('');
  const [selectEnd, setSelectEnd] = useState('');
  const [dataList] = useState(MOCK_DATA);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filteredDate, setFilteredDate] = useState([]);
  const [countPage, setCountPage] = useState(1);
  const skip = (currentPage - 1) * leaguePerPage;

  const getCurrentDate = (data) => {
    if (data) {
      return data.slice(skip, skip + leaguePerPage);
    }
    return 0;
  }

  const filterDate = (selectStart, selectEnd, arrData) => {
    if (selectStart === '' || selectEnd === '') {
      setCountPage(Math.ceil(arrData.length / leaguePerPage))
      return arrData;
    }
    const result = arrData.filter((item) => {
      const itemDate = new Date(item.date);
      const dateStart = new Date(selectStart);
      const dateEnd = new Date(selectEnd);
      if (itemDate.getTime() < dateEnd.getTime() && itemDate.getTime() > dateStart.getTime()) {
        setIsFiltered(true);
        return item;
      }
    })
      setCountPage(Math.ceil(result.length / leaguePerPage))
      return result;
  }

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredDate = filterDate(selectStart, selectEnd, dataList);
      setFilteredDate(filteredDate);
    }, 300);

    return () => setTimeout(Debounce);
  }, [selectStart, selectEnd])

  return (
    <>
      <div className={styles.calendarBox}>
        <div className={styles.teamMatches}>
          <NavLink to={'/teams'} className={styles.headerLink}>Команды</NavLink>
          <svg className={styles.arrow} width="10" height="8" viewBox="0 0 13 8" fill="none"   xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.65689 5.60651L1.35359 0.303208L0.646484 1.01031L6.65689 7.02072L12.6673 1.01031L11.9602 0.303208L6.65689 5.60651Z" fill="#A1A6B4"/>
          </svg>
          <p className={styles.name}>
            {
              currentTeam ?
              currentTeam[0].name : <></>
            }
          </p>
        </div>
        <h3 className={styles.head}>Матчи</h3>
        <div className={styles.filter}>
        <form>
            <span className={styles.text}>с</span>
            <label htmlFor="start" className={styles.labelDate}>Дата начала</label>
            <input
              id="start"
              name="start"
              type="date"
              className={styles.inputDate}
              onChange={(e) => setSelectStart(e.target.value)}
            />
            <span className={styles.text}>по</span>
            <label htmlFor="end" className={styles.labelDate}>Дата окончания</label>
            <input
              id="end"
              name="end"
              type="date"
              className={styles.inputDate}
              onChange={(e) => setSelectEnd(e.target.value)}
            />
          </form>
        </div>
        <div>
          {
            isFiltered ? <MatchTable data={getCurrentDate(filteredDate)}/> : <MatchTable data={getCurrentDate(dataList)}/>
          }
        </div>
        <PaginationBox count={countPage} />
      </div>
    </>
  );
}

export default TeamMatches;
