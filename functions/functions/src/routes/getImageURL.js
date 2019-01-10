const getPhotoProps = require("../utils/getPhotoProps");
const storePhotoProps = require("../utils/storePhotoProps");

module.exports = ({ sendJSON, baseUrl, store }) => (req, res) => {
  const photoProps = getPhotoProps(req);

  storePhotoProps({ store })(photoProps).then(ref => {
    const imageURL = `${baseUrl}/getImage?ref=${ref}`;

    sendJSON({ imageURL });
  });
};
