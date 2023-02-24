import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('http://tutorialsninja.com/demo/index.php?route=account/login');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Account Login/);
});

test('click login button without inputs', async ({ page }) => {
    await page.goto('http://tutorialsninja.com/demo/index.php?route=account/login');

    // Click the login button.
    await page.locator("//input[@value='Login']").click()

    // Expects error message.
    await page.locator("//div[@class='alert alert-danger alert-dismissible']").isVisible();
});


test('click login button with valid inputs', async ({ page }) => {
    await page.goto('http://tutorialsninja.com/demo/index.php?route=account/login');

    // Fill inputEmail
    await page.locator("//input[@id='input-email']").fill("dasari.jayalakshmi17@gmail.com");

    // Fill password
    await page.locator("//input[@id='input-password']").fill("Test12345");

    // Click the login button.
    await page.locator("//input[@value='Login']").click();

    //We can able to see logout link
    await page.locator("//a[@class='list-group-item'][normalize-space()='Logout']").isVisible();


});