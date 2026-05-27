import{test, expect} from '@playwright/test';

test('Check locators on the page', async({page})=>{

    await page.goto ('https://practice.expandtesting.com/login');

    // ID locator
    await page.locator('#username').fill('practice');
    
    // CSS locator
    await page.locator('#password').fill('SuperSecretPassword!');

    // Role locator
    await page.getByRole('button', { name: 'Login' }).click();

    //Assertion to check if the login was successful
    await expect(page.locator("//div[@id='flash']")).toHaveText('You logged into a secure area!');

});