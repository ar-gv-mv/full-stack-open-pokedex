const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('http://localhost:5001')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })
  test('navigate to ivysaur page and see chlorophyll', async ({ page }) => {
    await page.goto('http://localhost:5001')
    await page.getByText('ivysaur').click()
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})