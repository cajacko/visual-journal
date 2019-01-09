const uuid = require("uuid/v1");

module.exports = ({ store }) => props => {
  const id = uuid();

  return store.set(["photoProps", id], props).then(() => id);
};
