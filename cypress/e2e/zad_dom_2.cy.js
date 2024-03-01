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
    cy.loginAndLogout("user888@gmail.com", "1234567890");
  });

  it("Second log in and log out", () => {
    cy.loginAndLogout("testowyqa@qa.team", "QA!automation-1");
  });
});
