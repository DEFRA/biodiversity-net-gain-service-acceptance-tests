const Page = require("../page");

class LandBoundaryUploadImageFile extends Page {
  get titleText() {
    return "Upload a document or image showing the land boundary";
  }

  get path() {
    return "land/upload-land-boundary";
  }

  open() {
    return super.open(this.path);
  }
}
module.exports = new LandBoundaryUploadImageFile();
