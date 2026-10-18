import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage'

test.describe('Home Page tests', () => {

    test('Point homepage loads successfully', async ({ page }) => {

        await page.goto('/');

        await expect(page).toHaveTitle(/Point/);

    });
})

