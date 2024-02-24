import styles from './matchTable.module.css';
import PropTypes from 'prop-types';

function MatchTable(props) {

  const { data, formatDate, getStatus } = props;

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
  formatDate: PropTypes.func,
  getStatus: PropTypes.func,
};

export default MatchTable;
