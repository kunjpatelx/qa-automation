import { test, expect } from '@playwright/test';

test('TodoMVC app works - add and complete a task', async ({ page }) => {
  // Go to TodoMVC demo
  await page.goto('https://todomvc.com/examples/react/dist/');

  // Add a new todo
  await page.fill('.new-todo', 'Learn QA Automation');
  await page.press('.new-todo', 'Enter');

  // Verify it's added
  await expect(page.locator('.todo-list li')).toHaveText(['Learn QA Automation']);

  // Mark as completed
  await page.click('.todo-list li .toggle');

  // Verify it's in completed list
  await expect(page.locator('.todo-list li.completed')).toHaveText(['Learn QA Automation']);

  // Screenshot for proof
  await page.screenshot({ path: 'screenshot-todomvc.png' });
});