import styles from './matchTable.module.css';
import PropTypes from 'prop-types';

function MatchTable(props) {

  const { data } = props;

const getStatus = (obj) => {
  if (!obj.score || !obj.score2) {
    return '-'
  } else {
    if (obj.status === 'Blue' || obj.status === 'Aquamarine') {
      return 'Запланирован'
    } else if (obj.status === 'Crimson' || obj.status === 'Fuscia' || obj.status === 'Turquoise') {
      return 'В прямом эфире'
    } else if (obj.status === 'Goldenrod' || obj.status === 'Green' || obj.status === 'Violet') {
      return 'В игре'
    } else if (obj.status === 'Indigo' || obj.status === 'Khaki' || obj.status === 'Yellow') {
      return 'Пауза'
    } else if (obj.status === 'Maroon' || obj.status === 'Mauv') {
      return 'Завершен'
    } else if (obj.status === 'Orange' || obj.status === 'Pink') {
      return 'Отложен'
    } else if (obj.status === 'Puce' || obj.status === 'Purple') {
      return 'Приостановлен'
    } else if (obj.status === 'Red' || obj.status === 'Teal') {
      return 'Отменен'
    }
  }
}

const formatDate = (date) => {
  const arrDate = date.split('-');
  arrDate.reverse();
  return arrDate.join('.');
}

  return (
    <div>
      {
        data ?
        <table id="table" className={styles.matchTable}>
          <tbody>
          {
          data.map((item) => <tr className={styles.string} key={item.id}>
              <td className={styles.cell}>
                {
                  formatDate(item.date)
                }
              </td>
              <td className={styles.cell}>{item.time}</td>
              <td className={styles.cell}>
                {
                  getStatus(item)
                }
              </td>
              <td className={styles.cell}>{item.name}</td>
              <td className={styles.cell}>-</td>
              <td className={styles.cell}>{item.last_name}</td>
              <td className={styles.cell}>
                <div className={styles.cellScore}>
                  <span className={styles.score}>
                    {
                      (!item.score || !item.score2) ? '-' : <>{item.score}:{item.score2}</>
                    }
                  </span>
                  <span className={styles.scoreGrey}>
                    {
                      (!item.score || !item.score2) ? '-' : <>({item.score}:{item.score2})</>
                    }
                  </span>
                  <span className={styles.scoreGrey}>
                    {
                      (!item.score || !item.score2) ? '-' : <>({item.score}:{item.score2})</>
                    }
                  </span>
                </div>
              </td>
            </tr>
          )
        }
          </tbody>
      </table> : <></>
      }
    </div>
  );
}

MatchTable.propTypes = {
  data: PropTypes.array,
};

export default MatchTable;
