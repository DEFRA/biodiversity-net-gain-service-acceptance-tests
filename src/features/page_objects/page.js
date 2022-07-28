/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
module.exports = class Page {
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

  get radioYes() {
    // return $("#check-legal-agreement-correct-yes");
    return $("#legal-agreement-correct");
  }

  get radioNo() {
    // return $("#check-legal-agreement-correct-no");
    return $("#legal-agreement-correct-2");
  }

  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  open(path) {
    return browser.url(`./${path}`);
  }
};
