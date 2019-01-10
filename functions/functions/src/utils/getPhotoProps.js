module.exports = ({ body: { text, location, date, theme, themeVariant } }) => ({
  text,
  location,
  dateString: date,
  theme,
  themeVariant
});
