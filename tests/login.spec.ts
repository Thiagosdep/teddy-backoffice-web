import { test, expect } from "@playwright/test";

test.describe("Login Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/login");
  });

  test("should display welcome message", async ({ page }) => {
    const welcomeText = await page.locator("h1").textContent();
    expect(welcomeText).toBe("Olá, seja bem-vindo!");
  });

  test("should show validation errors when submitting empty form", async ({
    page,
  }) => {
    await page.locator('button[type="submit"]').click();

    const usernameError = await page
      .locator('div:text("Usuário obrigatório")')
      .isVisible();
    const passwordError = await page
      .locator('div:text("Senha obrigatória")')
      .isVisible();

    expect(usernameError).toBeTruthy();
    expect(passwordError).toBeTruthy();
  });

  test("should navigate to home page after successful login", async ({
    page,
  }) => {
    await page.route("**/api/auth/login", async (route) => {
      await route.fulfill({
        status: 200,
        body: JSON.stringify({ token: "fake-jwt-token" }),
      });
    });

    await page.fill('input[placeholder="Digite o seu nome"]', "testuser");
    await page.fill('input[placeholder="Digite a sua senha"]', "password123");
    await page.locator('button[type="submit"]').click();

    await expect(page).toHaveURL("/");
  });

  test("should show error message on login failure", async ({ page }) => {
    await page.route("**/api/auth/login", async (route) => {
      await route.fulfill({
        status: 401,
        body: JSON.stringify({ message: "Invalid credentials" }),
      });
    });

    await page.fill('input[placeholder="Digite o seu nome"]', "wronguser");
    await page.fill('input[placeholder="Digite a sua senha"]', "wrongpass");
    await page.locator('button[type="submit"]').click();

    const errorMessage = await page
      .locator("div.ant-message-error")
      .isVisible();
    expect(errorMessage).toBeTruthy();
  });
});
