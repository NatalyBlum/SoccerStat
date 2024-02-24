import PropTypes from "prop-types";
import MatchTable from "../matchTable/matchTable";

function ContainerMatchTable(props) {

  const { data } = props;

const getStatus = (obj) => {
  if (!obj.score || !obj.score2) {
    return "-"
  } else {
    if (obj.status === "Blue" || obj.status === "Aquamarine") {
      return "Запланирован"
    } else if (obj.status === "Crimson" || obj.status === "Fuscia" || obj.status === "Turquoise") {
      return "В прямом эфире"
    } else if (obj.status === "Goldenrod" || obj.status === "Green" || obj.status === "Violet") {
      return "В игре"
    } else if (obj.status === "Indigo" || obj.status === "Khaki" || obj.status === "Yellow") {
      return "Пауза"
    } else if (obj.status === "Maroon" || obj.status === "Mauv") {
      return "Завершен"
    } else if (obj.status === "Orange" || obj.status === "Pink") {
      return "Отложен"
    } else if (obj.status === "Puce" || obj.status === "Purple") {
      return "Приостановлен"
    } else if (obj.status === "Red" || obj.status === "Teal") {
      return "Отменен"
    }
  }
}

const formatDate = (date) => {
  const arrDate = date.split('-');
  arrDate.reverse();
  return arrDate.join('.');
}

  return (
    <MatchTable data={data} getStatus={getStatus} formatDate={formatDate}/>
  );
}

ContainerMatchTable.propTypes = {
  data: PropTypes.array,
};

export default ContainerMatchTable;
