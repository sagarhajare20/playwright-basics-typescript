import{test, expect} from '@playwright/test';

test('Open Google and check title', async({page})=>{
    await page.goto('https://www.google.com');
    const title = await page.title();
    expect(title).toBe('Google');
});