const uuid = require("uuid/v1");
const { join } = require("path");

class TempFile {
  constructor({ fs, tmpDir }) {
    this._fs = fs;
    this._id = uuid();
    this._filePath = join(tmpDir, `${this._id}.html`);
  }

  write(html) {
    return this._fs
      .ensureFile(this._filePath)
      .then(() => this._fs.writeFile(this._filePath, html));
  }

  getID() {
    return Promise.resolve(this._id);
  }

  remove() {
    return this._fs.remove(this._filePath).catch(() => null);
  }
}

module.exports = TempFile;
