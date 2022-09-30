import { When, Then } from "@cucumber/cucumber";
import addHectaresPage from "../page_objects/land_boundary/add-hectares.page";

Then(
  "I should be able to add my total hectares of {string}",
  async (hectares) => {
    await addHectaresPage.getHectares.addValue(hectares);

    await (await addHectaresPage.continueButton).click();

    await expect(addHectaresPage.errorMsg).not.toBeDisplayed();
  }
);

When("I add total hectares as 0", async () => {
  await addHectaresPage.getHectares.addValue(0);

  await (await addHectaresPage.continueButton).click();
});
