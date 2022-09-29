import { Then } from "@cucumber/cucumber";
import addHectaresPage from "../page_objects/land_boundary/add-hectares.page";

// Then("I should be able to add hectares", async () => {
Then(
  "I should be able to add my total hectares of {string}",
  async (hectares) => {
    await addHectaresPage.getHectares.addValue(hectares);

    await (await addHectaresPage.continueButton).click();

    await expect(addHectaresPage.errorMsg).not.toBeDisplayed();
  }
);
