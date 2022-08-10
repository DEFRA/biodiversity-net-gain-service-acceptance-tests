/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
module.exports = class Page {
  get startButton() {
    return $(".govuk-button--start']");
  }

  get continueButton() {
    return $(".govuk-button");
  }

  get govFileUpload() {
    return $(".govuk-file-upload");
  }

  get errorMsg() {
    return $(".govuk-error-message");
  }

  get radioYes() {
    return $("#check-legal-agreement-correct-yes");
  }

  get radioNo() {
    return $("#id=check-legal-agreement-correct-no");
  }

  get filesizeIndicator() {
    return $("#filesize");
  }

  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  open(path) {
    return browser.url(`./${path}`);
  }
};
