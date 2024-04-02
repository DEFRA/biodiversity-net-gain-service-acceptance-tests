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

get manageBngNavLink(){
  return $("#link-manage-account");
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

  get radioIndividual() { 
    return $("input[value='individual']"); 
  }

  get radioOrganisation() { 
    return $("input[value='organisation']"); 
  }

  get filesizeIndicator() {
    return $("#filesize");
  }

  get doNotHaveLegalDocument() {
    return $("a[href='/land/need-legal-agreement']");
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
    // return $("[id='firstName']");
    return $("#firstName");
  }

  get middleName() {
    return $("[id='middleName']");
  }

  get lastName() {
    return $("[id='lastName']");
  }

  get organisationName() {
    return $("[id='organisationName']");
  }

  get addr1(){
    return $("#addressLine1")
  }

  get addr2(){
    return $("#addressLine2")
  }

  get town(){
    return $("#town")
  }

  get county(){
    return $("#county")
  }

  get postCode(){
    return $("#postcode")
  }

  get phone() {
    return $("#phone");
  }

  get emailAddress() {
    return $("#email");
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

   get addMetric() {
    return $("#add-habitat-information");
  }

  get progressText(){
    return $(".govuk-\\!-margin-bottom-4");
  }

  get referenceNumber(){
    return $('*[data-testid="application-reference-value"]');
  }

   async addFirstName(value) {
    await (this.firstName).clearValue();
    await this.firstName.addValue(value);
    await expect(this.firstName).toHaveValue(value);
  }

  async addMiddleName(value) {
    await (this.middleName).clearValue();
    await this.middleName.addValue(value);
    await expect(this.middleName).toHaveValue(value);
  }

  async addLastName(value) {
    await (this.lastName).clearValue();
    await this.lastName.addValue(value);
    await expect(this.lastName).toHaveValue(value);
  }

  async addAddr1(value) {
    await (this.addr1).clearValue();
    await this.addr1.addValue(value);
    await expect(this.addr1).toHaveValue(value);
  }

  async addAddr2(value) {
    await (this.addr2).clearValue();
    await this.addr2.addValue(value);
    await expect(this.addr2).toHaveValue(value);
  }

  async addTown(value) {
    await (this.town).clearValue();
    await this.town.addValue(value);
    await expect(this.town).toHaveValue(value);
  }

  async addCounty(value) {
    await (this.county).clearValue();
    await this.county.addValue(value);
    await expect(this.county).toHaveValue(value);
  }

  async addPostcode(value) {
    await (this.postCode).clearValue();
    await this.postCode.addValue(value);
    await expect(this.postCode).toHaveValue(value);
  }

  async addPhone(value) {
    await (this.phone).clearValue();
    await this.phone.addValue(value);
    await expect(this.phone).toHaveValue(value);
  }

  async addEmailAddress(value) {

    // clear the original value
    await (this.emailAddress).clearValue();
    // add the email address 
    // // wait for focus on element before adding as addition is being skipped
    await (this.emailAddress).isFocused();
    await this.emailAddress.addValue(value);
    await expect(this.emailAddress).toHaveValue(value);
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