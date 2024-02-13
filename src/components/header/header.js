import React from 'react';
import styles from './header.module.css';

function Header() {

  return (
    <div className={styles.header}>
      <ul className={styles.headerList}>
        <li className={styles.headerItem}>
          <a href='/#' className={styles.headerLink}>
            Лого
          </a>
        </li>
        <li className={styles.headerItem}>
          <a href='/#' className={styles.headerLink}>
            Лиги
          </a>
        </li>
        <li className={styles.headerItem}>
          <a href='/#' className={styles.headerLink}>
            Команды
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
