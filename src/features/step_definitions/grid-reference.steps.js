import { When } from "@cucumber/cucumber";
import gridReferencePage from "../page_objects/land_boundary/grid-reference.page";

When("I add a valid grid reference {string}", async (gridReference) => {
  await gridReferencePage.getGridRef.addValue(gridReference);
  await (await gridReferencePage.continueButton).click();
  await expect(gridReferencePage.errorMsg).not.toBeDisplayed();
});

When("I add an invalid grid reference {string}", async (gridReference) => {
  await gridReferencePage.getGridRef.addValue(gridReference);
  await (await gridReferencePage.continueButton).click();
  await expect(gridReferencePage.errorMsg).toBeDisplayed();
});
