import { When, Then } from "@cucumber/cucumber";
import addHectaresPage from "../page_objects/land_boundary/add-hectares.page";

When("I add total hectares as {string}", async (value) => {
  await addHectaresPage.getHectares.addValue(value);
  await (await addHectaresPage.continueButton).click();
});
