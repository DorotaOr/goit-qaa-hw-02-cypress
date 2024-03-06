class loginPage {
  constructor() {
    this.url = "https://www.edu.goit.global/account/login";
    this.emailInput = 'input[class="next-v891b4.eteu1jj2"]';
    this.passwordInput = 'input[type="password"]';
    this.loginButton = 'button[type="submit"]';
  }

  // '#user_email' 'input[name="email"]' *[@id="user_email"] ".next-v891b4 eteu1jj2"

  visit() {
    cy.visit(this.url);
  }

  loginUser(email, password) {
    cy.get(this.emailInput, { timeout: 10000 })
      //.should("be.visible")
      .type(email);
    cy.get(this.passwordInput).type(password);
    cy.get(this.loginButton).click();
  }
}

export default new loginPage();
