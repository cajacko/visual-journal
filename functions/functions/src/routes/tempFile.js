const { join } = require("path");

module.exports = ({ sendFile, tmpDir }) => (req, res) => {
  const { id } = req.query;

  if (!id) throw new Error("No id passed");

  const filePath = join(tmpDir, `${id}.html`);

  sendFile(filePath);
};
