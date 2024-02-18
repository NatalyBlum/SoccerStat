import styles from './search.module.css';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FILTERED_DATA } from '../../store/actions';

const filterData = (searchText, arrData) => {
  if (searchText === '') {
    return arrData;
  }
  return arrData.filter((item) => (item.name.toLowerCase().includes(searchText.toLowerCase())) || (item.title.toLowerCase().includes(searchText.toLowerCase())))
}

function Search() {

  const dispatch = useDispatch();
  const data = useSelector((state) => state.leagues.leagues);
  const [dataList, setDataList] = useState(data);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredData = filterData(search, data);
      setDataList(filteredData);
    }, 300);

    return () => setTimeout(Debounce);
  }, [search])

  useEffect(() => {
    dispatch({
      type: FILTERED_DATA,
      filteredData: dataList,
    })
  }, [dataList])

  return (
    <form className={styles.search} action="https://jsonplaceholder.typicode.com/ posts" method="post">
      <label>
        <input
          className={styles.searchInput}
          value={search}
          type="text"
          name="search"
          placeholder='Поиск'
          onChange={(e) => setSearch(e.target.value)}
          />
      </label>
      <button className={styles.searchBtn} type="submit" aria-label="Найти">
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5792 11.9497H12.721L12.4168 11.6564C13.4814 10.418 14.1224 8.81018 14.1224 7.06118C14.1224 3.16124 10.9611 0 7.06118 0C3.16124 0 0 3.16124 0 7.06118C0 10.9611 3.16124 14.1224 7.06118 14.1224C8.81018 14.1224 10.418 13.4814 11.6564 12.4168L11.9497 12.721V13.5792L17.3814 19L19 17.3814L13.5792 11.9497ZM7.06118 11.9497C4.3562 11.9497 2.17267 9.76615 2.17267 7.06118C2.17267 4.3562 4.3562 2.17267 7.06118 2.17267C9.76615 2.17267 11.9497 4.3562 11.9497 7.06118C11.9497 9.76615 9.76615 11.9497 7.06118 11.9497Z" fill="#C4C4C4"/>
        </svg>
      </button>
    </form>
  );
}

export default Search;
