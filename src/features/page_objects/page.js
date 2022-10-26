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

  get errorMsgSummary() {
    return $(".govuk-error-summary");
  }

  get radioYes() {
    return $("#check-upload-correct-yes");
  }

  get radioNo() {
    return $("#check-upload-correct-no");
  }

  get filesizeIndicator() {
    return $("#filesize");
  }

  get doNotHaveDocument() {
    return $("#dont-have-document");
  }

  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  open(path) {
    return browser.url(`./${path}`);
  }
};
