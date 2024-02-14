import { useRouter } from 'next/router';
import styles from './leagueCalendar.module.css';

function LeagueCalendar() {

  // console.log(props)
  const router = useRouter();
  const { id } = router.query;
  console.log(router.query);

  return (
    <div className={styles.leagueCalendar}>
      <p>
        Лиги
      </p>
      <svg className={styles.arrow} width="10" height="8" viewBox="0 0 13 8" fill="none"   xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.65689 5.60651L1.35359 0.303208L0.646484 1.01031L6.65689 7.02072L12.6673 1.01031L11.9602 0.303208L6.65689 5.60651Z" fill="#A1A6B4"/>
      </svg>
      <p>
        mnb
      </p>
    </div>

  );
}

export default LeagueCalendar;
