import { test, expect } from "@playwright/test";

test("table should contain results", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  const results = page.locator(".table-row-element");
  expect(results).toBeTruthy();
});
