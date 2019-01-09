module.exports = ({ body: { text, location, date } }) => ({
  text,
  location,
  dateString: date
});
