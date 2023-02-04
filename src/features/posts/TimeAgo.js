// &nbsp; &nbsp; &nbsp; : it is  used to generate the space betwn word

//date-fns: it is all about date
import { parseISO, formatDistanceToNow } from "date-fns";

//This { timestamp} is passed from postList.js
const TimeAgo = ({ timestamp }) => {
  let timeAgo = "";

  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }
  return (
    <span title={timestamp}>
      &nbsp; &nbsp; &nbsp;
      <i>
        <b>{timeAgo}</b>
      </i>
    </span>
  );
};

export default TimeAgo;
