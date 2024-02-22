import { useState, useEffect } from 'react';
import styles from './paginationBox.module.css';
import { Container, Pagination } from '@mui/material';
import { useDispatch } from 'react-redux';
import { CURRENT_PAGE } from '../../store/actions';

function PaginationBox(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: CURRENT_PAGE,
      currentPage: currentPage,
    })
  }, [currentPage])

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
