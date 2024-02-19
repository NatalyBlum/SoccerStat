import styles from './matchTable.module.css';

function MatchTable(props) {

const getStatus = (obj) => {
  if (!obj.score || !obj.score2) {
    return '-'
  } else {
    if (obj.status === 'Blue' || obj.status === 'Aquamarine') {
      return 'SCHEDULED'
    } else if (obj.status === 'Crimson' || obj.status === 'Fuscia' || obj.status === 'Turquoise') {
      return 'LIVE'
    } else if (obj.status === 'Goldenrod' || obj.status === 'Green' || obj.status === 'Violet') {
      return 'IN_PLAY'
    } else if (obj.status === 'Indigo' || obj.status === 'Khaki' || obj.status === 'Yellow') {
      return 'PAUSED'
    } else if (obj.status === 'Maroon' || obj.status === 'Mauv') {
      return 'FINISHED'
    } else if (obj.status === 'Orange' || obj.status === 'Pink') {
      return 'POSTPONED'
    } else if (obj.status === 'Puce' || obj.status === 'Purple') {
      return 'SUSPENDED'
    } else if (obj.status === 'Red' || obj.status === 'Teal') {
      return 'CANCELED'
    }
  }
}

const formatDate = (string) => {
  return string.replace(new RegExp('/', 'g'), '.')
}

  return (
    <div>
      {
        props.data ?
        <table id="table" className={styles.matchTable}>
        {
          props.data.map((item) => <tr className={styles.string} key={item._id}>
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
              <td className={styles.cell}>{item.first_name}</td>
              <td className={styles.cell}>-</td>
              <td className={styles.cell}>{item.last_name}</td>
              <td className={styles.cellScore}>
                <td className={styles.score}>
                  {
                    (!item.score || !item.score2) ? '-' : <>{item.score}:{item.score2}</>
                  }
                </td>
                <td className={styles.scoreGrey}>
                  {
                    (!item.score || !item.score2) ? '-' : <>({item.score}:{item.score2})</>
                  }
                </td>
                <td className={styles.scoreGrey}>
                  {
                    (!item.score || !item.score2) ? '-' : <>({item.score}:{item.score2})</>
                  }
                </td>
              </td>
            </tr>
          )
        }
      </table> : <></>
      }
    </div>
  );
}

export default MatchTable;
