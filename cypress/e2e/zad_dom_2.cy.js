describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });
});

// My hw script

describe("Log in and log out testing", () => {
  beforeEach("Go to page", () => {
    cy.visit("https://www.edu.goit.global/account/login");
  });

  it("First log in and log out", () => {
    cy.get('input[name="email"]').type("user888@gmail.com");
    cy.get('input[type="password"]').type("1234567890");
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

  it("Second log in and log out", () => {
    cy.loginAndLogout("testowyqa@qa.team", "QA!automation-1");
  });
});
