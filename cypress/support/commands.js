// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("loginAndLogout", (email, password) => {
  cy.get('input[name="email"]').type(email);
  cy.get('input[type="password"]').type(password);
  cy.get('[type="submit"]').click();
  cy.url().should("include", "/homepage");
  cy.get("#open-navigation-menu-mobile").click();
  cy.get("button.next-bve2vl.e1phyiqy2")
    .contains("Log out")
    .should("exist")
    .should("be.visible")
    .click();
  cy.url().should("include", "/login");
});
