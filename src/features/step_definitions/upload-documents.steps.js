const { When, Then } = require('@wdio/cucumber-framework')
const { join, basename } = require('node:path')
const pages = require('../page_objects/page_objects')
const { setUploadPagesForDocument, uploadFileForDocument, getFilePathForDocument } = require('../utils/documentUploadHelper')
const fs = require('fs')
const path = require('path')

let UploadPage = ''
const CheckPage = ''
let filename = ''
let filePath = ''
let remoteFilePath = ''
let currentUploadPage = pages['legal-agreement-cc-upload']
let currentCheckPage = pages['legal-agreement-check']

When('I upload a {string} file', async (document) => {
  // pre steps/pages needed to get to the legal agreement upload page
  if (document == 'legal-agreement') {
    // await pages['register-land-task-list'].addLegalAgreement.click()
    await pages['legal-agreement-type'].conservationCovenant.click()
    await pages['legal-agreement-type'].continueButton.click()
    await pages['need-add-all-legal-files'].continueButton.click()
  }

  await uploadDocument(document)
})

When('I try to upload a {string} without choosing a file', async (document) => {
  // pre steps/pages needed to get to the legal agreement upload page
  if (document == 'legal-agreement') {
    // await pages['register-land-task-list'].addLegalAgreement.click()
    await pages['legal-agreement-type'].conservationCovenant.click()
    await pages['legal-agreement-type'].continueButton.click()
    await pages['need-add-all-legal-files'].continueButton.click()
  }

  await currentUploadPage.uploadButton.click()
})

When('I choose and upload the same file', async () => {
  remoteFilePath = await browser.uploadFile(filePath)

  const group = filePath.split('\\')
  filename = basename(group[group.length - 1])

  await UploadPage.govFileUpload.setValue(remoteFilePath)
  await UploadPage.continueButton.click()
})

Then('I should be able to upload a {string} file with a filetype of {string}', async (document, filetype) => {
  // pre steps/pages needed to get to the legal agreement upload page
  if (document == 'legal-agreement') {
    // await pages['register-land-task-list'].addLegalAgreement.click()
    await pages['legal-agreement-type'].conservationCovenant.click()
    await pages['legal-agreement-type'].continueButton.click()
    await pages['need-add-all-legal-files'].continueButton.click()
  }

  const { UploadPage, CheckPage } = setUploadPagesForDocument(document)
  currentUploadPage = UploadPage // Set the active upload page
  currentCheckPage = CheckPage // Set the active Check page

  if (document == 'metric') {
    filePath = join(__dirname, '../../TestFiles/test_metric.' + filetype)
  } else {
    filePath = join(__dirname, '../../TestFiles/test_12kb.' + filetype)
  }

  // Upload the document and get the filename
  filename = await uploadFileForDocument(currentUploadPage, filePath)

  await $('h1').waitForExist({ timeout: 5000 })
  await expect(await browser.getTitle()).toContain(currentCheckPage.titleText)
})

Then('There should be a link to download the {string}', async (document) => {
  await currentCheckPage.downloadLink.waitForExist({ timeout: 5000 })
  const link = await currentCheckPage.downloadLink
  await expect(link).toHaveText(filename)
  await expect(link.getAttribute('href')).not.toBeNull()
})

Then('I can download the {string}', async (document) => {
  await currentCheckPage.downloadLink.waitForExist({ timeout: 5000 })
  const link = await currentCheckPage.downloadLink
  await link.click()

  // Define the download path and check for the file
  const downloadDir = './src/TestFiles/downloads'
  const filePath = path.join(downloadDir, filename)

  // Wait and check if the file is downloaded
  await browser.pause(10000)
  const fileExists = fs.existsSync(filePath)

  expect(fileExists).toBe(true)
})

Then('I should be able to see the filesize of the document as {string}', async (filesize) => {
  // get actual filesize of test file
  await expect(currentCheckPage.filesizeIndicator).toHaveText(filesize)
})

When('I upload a file that contains malware or a virus', async () => {
  const filePath = join(__dirname, '../../TestFiles/test_eicar-adobe-acrobat-attachment.pdf')
  const remoteFilePath = await browser.uploadFile(filePath)

  browser.url(UploadPage.path)

  await UploadPage.govFileUpload.setValue(remoteFilePath)
  await UploadPage.continueButton.click()
})

When('I choose a file type that is not in the specified format for the {string}', async (document) => {
  const { UploadPage, CheckPage } = setUploadPagesForDocument(document)
  currentUploadPage = UploadPage // Set the active upload page
  currentCheckPage = CheckPage // Set the active upload check page

  const filePath = join(__dirname, '../../TestFiles/test.txt')
  const remoteFilePath = await browser.uploadFile(filePath)
  browser.url(UploadPage.path)

  await UploadPage.govFileUpload.setValue(remoteFilePath)
  await UploadPage.continueButton.click()
})

Then('I should not be able to upload the file', async () => {
  expect(await browser.getTitle()).not.toContain(currentCheckPage.titleText)
})

Then('I am informed that the file is empty', async () => {
  await UploadPage.errorMsg.waitForExist({ timeout: 5000 })
  await expect(UploadPage.errorMsg).toHaveText(expect.stringContaining('The selected file is empty'))
})

Then('I am informed that the selected file does not have enough data', async () => {
  await UploadPage.errorMsg.waitForExist({ timeout: 5000 })
  await expect(UploadPage.errorMsg).toHaveText(expect.stringContaining('The selected file does not have enough data'))
})

Then('I am informed that the selected file is not a valid Metric', async () => {
  await UploadPage.errorMsg.waitForExist({ timeout: 5000 })
  await expect(UploadPage.errorMsg).toHaveText(expect.stringContaining('The selected file is not a valid Metric'))
})

Then('I am informed of what the allowed file types should be', async () => {
  await currentUploadPage.errorMsg.waitForDisplayed({ timeout: 5000 })

  let errorTxt = ''

  switch (currentUploadPage) {
    case pages['land-boundary-upload']:
      errorTxt = 'The selected file must be a DOC, DOCX, JPG, PNG or PDF'
      break
    case pages['developer-metric-upload']:
    case pages['metric-upload']:
      errorTxt = 'The selected file must be an XLSM or XLSX'
      break
    default:
      errorTxt = 'The selected file must be a DOC, DOCX or PDF'
  }

  await expect(currentUploadPage.errorMsg).toHaveText(expect.stringContaining(errorTxt))
})

When('I choose a different file', async () => {
  await currentCheckPage.radioNo.waitForExist({ timeout: 5000 })
  await currentCheckPage.radioNo.click()
  await currentCheckPage.continueButton.click()
})

When('I confirm it is the correct file', async () => {
  await currentCheckPage.radioYes.waitForExist({ timeout: 5000 })
  await currentCheckPage.radioYes.click()
  await currentCheckPage.continueButton.click()
})

When('I confirm the correct file', async () => {
  await currentCheckPage.radioYes.waitForExist({ timeout: 5000 })
  await currentCheckPage.radioYes.click()
  await currentCheckPage.continueButton.click()
})

When('I choose an empty {string} file', async (document) => {
  filePath = join(__dirname, '../../TestFiles/test_1k_empty.pdf')

  switch (document) {
    case 'metric': {
      UploadPage = pages['metric-upload']
      filePath = join(__dirname, '../../TestFiles/test_empty_non_metric.xlsx')
      break
    }
    case 'land-ownership': {
      UploadPage = pages['land-ownership-upload']
      break
    }
    case 'land-boundary': {
      UploadPage = pages['land-boundary-upload']
      break
    }
    case 'legal-agreement': {
      UploadPage = pages['legal-agreement-upload']
      break
    }
  }

  remoteFilePath = await browser.uploadFile(filePath)

  const group = filePath.split('\\')
  filename = basename(group[group.length - 1])

  browser.url(UploadPage.path)

  await UploadPage.govFileUpload.setValue(remoteFilePath)
  await UploadPage.continueButton.click()
})

When('I choose a metric file with no data', async () => {
  filePath = join(__dirname, '../../TestFiles/test_metric_empty.xlsm')

  remoteFilePath = await browser.uploadFile(filePath)

  const group = filePath.split('\\')
  filename = basename(group[group.length - 1])

  browser.url(pages['metric-upload'].path)

  await pages['metric-upload'].govFileUpload.setValue(remoteFilePath)
  await pages['metric-upload'].continueButton.click()
})

When('I choose a {string} file of {string} or {string} Bytes', async (byteType, filesize) => {
  filePath = join(__dirname, '../../TestFiles/test_' + filesize + '_decimal.pdf')

  remoteFilePath = await browser.uploadFile(filePath)

  const group = filePath.split('\\')
  filename = basename(group[group.length - 1])

  browser.url(UploadPage.path)

  await UploadPage.govFileUpload.setValue(remoteFilePath)
  await UploadPage.continueButton.click()
})

Then('The original document should be deleted', async function () {
  return 'pending'
})

async function uploadDocument (document) {
  const { UploadPage, CheckPage } = setUploadPagesForDocument(document)
  currentUploadPage = UploadPage // Set the active upload page
  currentCheckPage = CheckPage // Set the active Check page

  const filePath = getFilePathForDocument(document)

  // Upload the document and get the filename
  filename = await uploadFileForDocument(currentUploadPage, filePath)
}

async function getcurrentUploadPagesOrDefault (defaultPage = 'legal-agreement-cc-upload') {
  return currentUploadPage || pages[defaultPage] // Return the current page if set, otherwise use a default
}
