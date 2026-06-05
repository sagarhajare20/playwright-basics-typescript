import{test, expect} from '@playwright/test';

test('Check locators on the page', async({page})=>{

    test.setTimeout(60000);

    await page.goto('https://practice.expandtesting.com/login', {
        waitUntil: 'domcontentloaded',
        timeout: 60000,
    });

    await expect(page.locator('#username')).toBeVisible({ timeout: 60000 });
    await expect(page.locator('#password')).toBeVisible({ timeout: 60000 });

    await page.locator('#username').scrollIntoViewIfNeeded();
    await page.locator('#password').scrollIntoViewIfNeeded();

    // ID locator
    await page.locator('#username').fill('practice');
    
    // CSS locator
    await page.locator('#password').fill('SuperSecretPassword!');

    // Role locator
    await page.getByRole('button', { name: 'Login' }).click();

    // Assertion to check if the login was successful
    await expect(page.locator('//div[@id="flash"]')).toContainText('You logged into a secure area!', { timeout: 60000 });

});