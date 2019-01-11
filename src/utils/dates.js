const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

/**
 * Get the ordinal value
 */
const ordinal = i => {
  const j = i % 10;
  const k = i % 100;

  if (j === 1 && k !== 11) {
    return `${i}st`;
  }
  if (j === 2 && k !== 12) {
    return `${i}nd`;
  }
  if (j === 3 && k !== 13) {
    return `${i}rd`;
  }
  return `${i}th`;
};

export const formatDate = date => {
  const d = new Date(date);

  return `${days[d.getDay()]}, ${ordinal(d.getDate())} ${
    months[d.getMonth()]
  } ${d.getFullYear()}`;
};
