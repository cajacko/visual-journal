const getPhotoProps = require("../utils/getPhotoProps");
const getPhotoBlob = require("../utils/getPhotoBlob");

module.exports = ({ sendImage, fs, tmpDir }) => (req, res) => {
  const photoProps = getPhotoProps(req);

  getPhotoBlob({ fs, tmpDir })(photoProps).then(sendImage);
};
