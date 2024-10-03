const pages = require('../page_objects/page_objects');
const { join, basename } = require("node:path");

function setUploadPagesForDocument(document) {
  switch (document) {
    case "written-authorisation": {
      return {
        UploadPage: pages["written-authorisation-upload"],
        CheckPage: pages["check-written-authorisation"],
      };
    }
    case "legal-agreement": {
      return {
        // UploadPage: pages["legal-agreement-upload"],
        UploadPage: pages["legal-agreement-cc-upload"],
        CheckPage: pages["legal-agreement-check"],
      };
    }
    case "local-land-charge": {
      return {
        UploadPage: pages["local-land-charge-upload"],
        CheckPage: pages["local-land-charge-check"],
      };
    }
    case "management-plan": {
      return {
        UploadPage: pages["management-plan-upload"],
        CheckPage: pages["management-plan-check"],
      };
    }
    case "land-boundary": {
      return {
        UploadPage: pages["land-boundary-upload"],
        CheckPage: pages["check-land-boundary-file"],
      };
    }
    case "geospatial": {
      return {
        UploadPage: pages["geospatial-upload"],
        CheckPage: pages["check-geospatial-file"],
      };
    }
    case "metric": {
      return {
        UploadPage: pages["metric-upload"],
        CheckPage: pages["metric-check"],
      };
    }
    case "land-ownership": {
      return {
        UploadPage: pages["land-ownership-upload"],
        CheckPage: pages["land-ownership-check"],
      };
    }
    //****DEVELOPER JOURNEY UPLOADS*****
    case "developer-metric":{
        return {
          UploadPage: pages["developer-metric-upload"],
          CheckPage: pages["check-developer-metric-file"],
      };
    }
    case "planning-decision-notice":{
        return {
        UploadPage: pages["upload-planning-decision-notice"],
        CheckPage: pages["check-planning-decision-notice-file"],
      };
    }
    //****CREDIT Purchase UPLOADS*****
    case "credits-purchase-metric":{
      return {
        UploadPage: pages["credits-purchase-metric-upload"],
        CheckPage: pages["credits-purchase-check-metric-file"],
      };
    }
    //****Combined Case  UPLOADS*****
    // Combined case - registration
    case "combined-case-written-authorisation": { 
      return {
        UploadPage: pages["combined-case-written-authorisation-upload"],
        CheckPage: pages["combined-case-check-written-authorisation-file"],
      };
    }
    case "combined-case-land-ownership": { 
      return{
        UploadPage: pages["combined-case-land-ownership-upload"],
        CheckPage: pages["combined-case-land-ownership-check"],
      };
    }
    case "combined-case-land-boundary": {
      return {
        UploadPage: pages["combined-case-land-boundary-upload"],
        CheckPage: pages["combined-case-land-boundary-check"],
      }
    }
    case "combined-case-metric": { 
      return {
        UploadPage: pages["combined-case-metric-upload"],
        CheckPage: pages["combined-case-metric-check"],
    } }
    // case "combined-case-legal-agreement": {return{}}
    case "combined-case-local-land-charge": {
      return{
        UploadPage: pages["combined-case-local-land-charge-upload"],
        CheckPage: pages["combined-case-metric-check"],
      }}
    // Combined case - allocation
    case "combined-case-developer-metric": { 
      return {
        UploadPage: pages["combined-case-developer-metric-upload"],
        CheckPage: pages["combined-case-developer-metric-check"],
    } 
  }
    case "combined-case-check-and-submit": {return{}}
    default: {
      throw new Error(`Document section ${document} doesn't exist`);
    }
  }
}

async function uploadFileForDocument(UploadPage, filePath) {
  const remoteFilePath = await browser.uploadFile(filePath);
  
  const group = filePath.split("\\");
  const filename = basename(group[group.length - 1]);

  await UploadPage.govFileUpload.setValue(remoteFilePath);
  await UploadPage.uploadButton.click();

  return filename;
}

function getFilePathForDocument(document, filetype = "docx") {
  switch (document) {
    case "geospatial":
      return join(__dirname, "../../TestFiles/test_geospatial.zip");
    case "geospatial-geopackage":
      return join(__dirname, "../../TestFiles/test_geospatial.gpkg");
    case "geospatial-geojson":
      return join(__dirname, "../../TestFiles/test_geospatial.geojson");
    case "metric":
      return join(__dirname, "../../TestFiles/test_metric.xlsm");
    case "developer-metric":
    case "credits-purchase-metric":
      return join(__dirname, "../../TestFiles/test_developer_metric.xlsm");
    case "combined-case-metric":
      return join(__dirname, "../../TestFiles/test_combined_case_registration_metric.xlsx");
    case "combined-case-developer-metric":
      return join(__dirname, "../../TestFiles/test_combined_case_developer_metric.xlsm");
    default:
      return join(__dirname, `../../TestFiles/test_12kb.${filetype}`);
  }
}

module.exports = { 
  setUploadPagesForDocument, 
  uploadFileForDocument,
  getFilePathForDocument, 
};