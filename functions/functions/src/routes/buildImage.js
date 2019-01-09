const getPhotoProps = require("../utils/getPhotoProps");
const getPhotoBlob = require("../utils/getPhotoBlob");

module.exports = ({ sendImage, fs, tmpDir, baseUrl }) => (req, res) => {
  const photoProps = getPhotoProps(req);

  getPhotoBlob({ fs, tmpDir, baseUrl })(photoProps).then(sendImage);
};
