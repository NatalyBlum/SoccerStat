import React from 'react';
import styles from './pagination.module.css';

function Pagination() {

  const pageNumbers = [];
  const currentPage = 10;

  for (let i = 1; i <= Math.ceil(100/9); i ++ ) {
    pageNumbers.push(i);
  }

  const resultArray = pageVisible(pageNumbers, currentPage);

  function pageVisible (pageNumbers, currentPage) {
    const resultArray = [];

    if (currentPage <= 10) {
      resultArray.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '...', pageNumbers.length - 1);
    } else if (currentPage > 10) {
      resultArray.push(currentPage, '...', pageNumbers.length - 1);
    }
    return resultArray;
  }

  return (
    <>
      <ul className={styles.pagination}>
      <li className={styles.paginationItem}>
        <button className={styles.paginationLink}>
          <svg className={styles.imgLeft} width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.65689 5.60651L1.35359 0.303208L0.646484 1.01031L6.65689 7.02072L12.6673 1.01031L11.9602 0.303208L6.65689 5.60651Z" fill="#A1A6B4"/>
          </svg>
        </button>
      </li>
        {
          resultArray.map((number) => (
            <li className={styles.paginationItem} key={resultArray.indexOf(number)}>
              { (number === '...') ?
                <span className={styles.paginationDots}>{number}</span>
                :
                <button className={styles.paginationLink} >
                  <span>{number}</span>
                </button>
              }
            </li>
          ))
        }
        <li className={styles.paginationItem}>
          <button className={styles.paginationLink}>
            <svg className={styles.imgRight} width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.65689 5.60651L1.35359 0.303208L0.646484 1.01031L6.65689 7.02072L12.6673 1.01031L11.9602 0.303208L6.65689 5.60651Z" fill="#A1A6B4"/>
            </svg>
          </button>
        </li>
      </ul>
    </>
  );
}

export default Pagination;
