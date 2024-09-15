import {test} from "@playwright/test";
import testData from "../resources/regTestData.json";
import {RegistrationPage} from "../pages/RegistrationPage";


test.describe("Registration Test Suite", () => {


    test("TC001-User Registration", async ({page}) => {
        const registrationPage = new RegistrationPage(page);
        await registrationPage.goToRegistrationPage("https://www.cermati.com/app/gabung");
        await page.waitForTimeout(5000);
        await registrationPage.registrationPageTitle("Daftar");
        await registrationPage.enterPhoneNumber(testData.userReg[0].phoneNumber);
        await registrationPage.enterEmail(testData.userReg[0].email);
        await registrationPage.enterFirstName(testData.userReg[0].firstName);
        await registrationPage.enterLastName(testData.userReg[0].lastName);
        await registrationPage.submitRegistration();

    });

    test.afterEach(async ({page}) => {
        await page.close();
    });

});