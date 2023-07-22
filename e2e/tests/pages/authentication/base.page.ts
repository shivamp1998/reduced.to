import type { Locator, Page } from '@playwright/test';
import { Navbar } from '../navbar.element';

export type AuthRoutes = 'register' | 'login' | '';

export class BaseAuthPage {
  protected readonly page: Page;
  readonly route: AuthRoutes;
  readonly navbar: Navbar;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly invalidDetailsMsg: Locator;

  constructor(page: Page, route: AuthRoutes) {
    this.page = page;
    this.route = route;
    this.navbar = new Navbar(page);
    this.emailInput = this.page.locator('input[name="email"]');
    this.passwordInput = this.page.locator('input[name="password"]');
    this.invalidDetailsMsg = this.page.locator('.text-error');
  }

  async goto() {
    await this.page.goto(`./${this.route}`);
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }
}