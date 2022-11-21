/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
module.exports = class Page {
  get startButton() {
    return $(".govuk-button--start']");
  }

  get continueButton() {
    return $("#continue");
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
    return $("[id$='correct-yes']");  
  }

  get radioNo() {
    return $("[id$='correct-no']");
  }

  get filesizeIndicator() {
    return $("#filesize");
  }

  get doNotHaveDocument() {
    return $("#dont-have-document");
  }

  get Day() {
    return $("[id$='StartDate-day']");
  }

  get Month() {
    return $("[id$='StartDate-month']");
  }

  get Year() {
    return $("[id$='StartDate-year']");
  }
  
  get otherRoleTextBox(){
    return $("#roleOther");
  }

  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  open(path) {
    return browser.url(`./${path}`);
  }
};
