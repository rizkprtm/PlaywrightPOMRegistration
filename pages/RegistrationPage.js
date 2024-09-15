import { expect } from "@playwright/test";
import { regist_selectors } from "../resources/locators";

export class RegistrationPage {
    constructor(page) {
        this.page=page;
        this.registration_title = regist_selectors.reg_title;
        this.mobilePhone = page.locator(regist_selectors.mobilePhone);
        this.email = page.locator(regist_selectors.email);
        this.firstName = page.locator(regist_selectors.firstName);
        this.lastName = page.locator(regist_selectors.lastName);
        this.submit_btn = page.locator(regist_selectors.reg_submitBtn);
    }

    async goToRegistrationPage(url) {
        await this.page.goto(url)
    }

    async registrationPageTitle(title) {
        await expect(this.registration_title).toContain(title)
    }

    async enterPhoneNumber(phoneNumber) {
        await this.mobilePhone.fill(phoneNumber)
    }

    async enterEmail(email) {
        await this.email.fill(email)
    }

    async enterFirstName(firstName) {
        await this.firstName.fill(firstName)
    }

    async enterLastName(lastName) {
        await this.lastName.fill(lastName)
    }

    async submitRegistration() {
        await this.submit_btn.click()
    }
}