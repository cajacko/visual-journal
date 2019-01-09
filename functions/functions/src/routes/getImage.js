const getPhotoBlob = require("../utils/getPhotoBlob");

module.exports = ({ sendImage, fs, tmpDir, baseUrl, store }) => (req, res) => {
  const { ref } = req.query;

  if (!ref) throw new Error("No ref given");

  const location = ["photoProps", ref];

  store
    .get(location)
    .then(photoProps => {
      if (!photoProps) throw new Error("No photo props at ref");

      // store.remove(location).catch(() => null);

      return photoProps;
    })
    .then(getPhotoBlob({ fs, tmpDir, baseUrl }))
    .then(sendImage);
};
