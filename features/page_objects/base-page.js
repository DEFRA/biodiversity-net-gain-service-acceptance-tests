/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
module.exports = class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */

  get getHeading() {
    return $(".govuk-heading-xl");
  }

  get startButton() {
    return $(".govuk-button--start']");
  }

  get continueButton() {
    return $(".govuk-button");
  }

  get govFileUpload() {
    return $(".govuk-file-upload");
  }

  open(path) {
    return browser.url(`./${path}`);
  }
};
