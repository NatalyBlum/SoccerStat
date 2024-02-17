import styles from './matchTable.module.css';

function MatchTable(props) {

  console.log(props.data[0].dateCreate)

  return (
    <div>
      <table id="table" className={styles.matchTable}>
        {
          props.data.map((item) => <tr className={styles.string} key={item._id}>
              <td className={styles.cell}>{item.dateCreate}</td>
              <td className={styles.cell}>{item.name}</td>
              <td className={styles.cell}>{item.name}</td>
              <td className={styles.cell}>{item.name}</td>
              <td className={styles.cell}>-</td>
              <td className={styles.cell}>{item._type}</td>
              <td className={styles.cell}>{item.name}</td>
              <td className={styles.cell}>{item.name}</td>
            </tr>
          )
        }
      </table>
    </div>
  );
}

export default MatchTable;
