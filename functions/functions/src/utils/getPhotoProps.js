const allIcons = require('../../common/config/icons');

module.exports = ({ body: { text, location, date, theme, themeVariant, icons } }) => ({
  text,
  location,
  dateString: date,
  theme,
  themeVariant,
  icons: icons.map((key) => allIcons[key] || null).filter((content) => content),
});
