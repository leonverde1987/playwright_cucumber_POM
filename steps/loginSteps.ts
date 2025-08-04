import { Given, Then, When} from "@cucumber/cucumber"
import { expect } from "@playwright/test"
import { page } from "../hooks/browserSetup"
import {LoginPage} from "../pages/login-page.pom"

let loginPage: LoginPage

Given("the user is on the login page", async () => {
    loginPage = new LoginPage(page)
    await loginPage.goto()
})

When("the user enters a valid email and password", async () => {
    await loginPage.emailLocator.fill("test@example.com")
    await loginPage.passwordLocator.fill("pass123")
})

Then("the user should see their email and password in the URL", async () => {
    await loginPage.singInButtonLocator.click()
    await expect(page).toHaveURL(/test%40example.com/)
    await expect(page).toHaveURL(/pass123/)
})