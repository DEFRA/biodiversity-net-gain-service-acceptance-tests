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

  get backButton() {
    return $(".govuk-back-link");
  }

  get uploadButton() {
    return $('*[data-testid="continue"]');
  }

  get govContinueButton(){
    return $('*[data-testid="continue"]');
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
  
  get firstName() {
    return $("[id='firstName']");
  }

  get middleName() {
    return $("[id='middleName']");
  }

  get lastName() {
    return $("[id='lastName']");
  }

  get otherRoleTextBox(){
    return $("#roleOther");
  }

  get habitatTotal(){
   return $('*[data-testid="habitatTotal"]'); 
  }

  get hedgeTotal(){
    return $('*[data-testid="hedgeTotal"]'); 
   }

   get riverTotal(){
    return $('*[data-testid="riverTotal"]'); 
   }

  async enterValidDate(date) {
    var arr = date.split('/');
  
    //clear values
    await this.Day.clearValue();
    await this.Month.clearValue();
    await this.Year.clearValue();
  
    //add values
    await this.Day.addValue(arr[0]);
    await this.Month.addValue(arr[1]);
    await this.Year.addValue(arr[2]);
    await (await this.continueButton).click();
  }

  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  open(path) {
    return browser.url(`./${path}`);
  }
};