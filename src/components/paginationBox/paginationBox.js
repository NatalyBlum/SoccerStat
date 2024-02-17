import { useState, useEffect } from 'react';
import styles from './paginationBox.module.css';
import { Container, Pagination } from '@mui/material';
import { useDispatch } from 'react-redux';
// import { BASE_URL } from '../../App';
// import { useSelector } from 'react-redux';
// import axios from 'axios';
import { CURRENT_PAGE } from '../../store/actions';

function PaginationBox(props) {
  const [currentPage, setCurrentPage] = useState(1);
  // const [leaguePerPage] = useState(9);
  // const skip = (currentPage - 1) * leaguePerPage;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: CURRENT_PAGE,
      currentPage: currentPage,
    })
  }, [currentPage])
  // useEffect(() => {
      // axios.get(BASE_URL + `?limit=${leaguePerPage}&skip=${skip}&fields=items(_id, title, price, edition, description),count`)
      //   .then((response) => {
      //     if (response.status > 299) {
      //       dispatch({
      //         type: GET_ERROR,
      //       })
      //     }
      //     dispatch({
      //       type: CURRENT_PAGE_DATA_LEAGUE_MATCH,
      //       currentPageDataLeagueMatch: response.data.result.items,
      //     })
      //     // console.log(response)
      //   })
    // }, [currentPage])

    return (
      <div className={styles.paginationWrap}>
        <Container>
        {!!props.count && (
          <Pagination
            count={props.count}
            page={currentPage}
            onChange={(_, num) => setCurrentPage(num)}
            className={styles.pagination}
          />
        )}
        </Container>
      </div>

    );
  }

  export default PaginationBox;
