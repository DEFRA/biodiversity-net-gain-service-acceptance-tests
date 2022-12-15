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

  get eligibilityContinueButton(){
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
    return $("input[value='yes']"); 
  }

  get radioNo() {
    return $("input[value='no']");
  }

  get radioNotSure() {
    return $("input[value='not sure']");
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
