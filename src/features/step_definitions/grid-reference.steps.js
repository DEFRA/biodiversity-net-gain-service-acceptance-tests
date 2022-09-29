import { Then } from "@cucumber/cucumber";
import gridReferencePage from "../page_objects/land_boundary/grid-reference.page";

Then(
  "I should be able to add a valid grid reference {string}",
  async (gridReference) => {
    await gridReferencePage.getGridRef.addValue(gridReference);

    await (await gridReferencePage.continueButton).click();

    await expect(gridReferencePage.errorMsg).not.toBeDisplayed();
  }
);

Then(
  "I should not be able to enter the invalid reference {string}",
  async (gridReference) => {
    await gridReferencePage.getGridRef.addValue(gridReference);

    await (await gridReferencePage.continueButton).click();

    await expect(gridReferencePage.errorMsg).toBeDisplayed();
  }
);
