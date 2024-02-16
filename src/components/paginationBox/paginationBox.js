import { useState, useEffect } from 'react';
import styles from './paginationBox.module.css';
import { Container, Pagination } from '@mui/material';
import { BASE_URL } from '../../App';
// import Leagues from '../leagues/leagues';
import axios from 'axios';
// import { Leagues } from '../leagues/leagues';

function PaginationBox(props) {
  const [countPage, setCountPage] = useState(17);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(9);
  const skip = (currentPage - 1) * productPerPage;

  useEffect(() => {
      axios.get(BASE_URL + `?limit=${productPerPage}&skip=${skip}&fields=items(_id, title, price, edition, description),count`)
        .then((data) => console.log('4'))
    }, [currentPage])

    return (
      <div className={styles.paginationWrap}>
        <Container>
        {!!countPage && (
          <Pagination
            count={countPage}
            page={currentPage}
            onChange={(_, num) => setCurrentPage(num)}
            className={styles.pagination}
          />
        )}
          {/* <Pagination
              count={countPage}
              page={currentPage}
              onChange={(_, num) => setCurrentPage(num)}
              className={styles.pagination}
            /> */}
        </Container>
      </div>

    );
  }

  export default PaginationBox;
