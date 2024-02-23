import styles from './header.module.css';
import { NavLink } from 'react-router-dom';

function Header() {

  return (
    <div className={styles.header}>
      <nav>
        <ul className={styles.headerList}>
          <li className={styles.headerLogo}>
            <div className={styles.logo}>
            </div>
          </li>
          <li className={styles.headerItem}>
            <NavLink to={'/'} className={styles.headerLink}>Лиги</NavLink>
          </li>
          <li className={styles.headerItem}>
            <NavLink to={'/teams'} className={styles.headerLink}>Команды</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
