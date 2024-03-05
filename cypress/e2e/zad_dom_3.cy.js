describe("Log in and log out testing", () => {
  beforeEach("Go to page", () => {
    cy.visit("https://www.edu.goit.global/account/login");
  });

  it("First log in and log out", () => {
    cy.logInUser("user888@gmail.com", "1234567890");
    cy.get('[id="go-to-the-course-homepage-widget"]')
      .scrollIntoView()
      .should("be.visible")
      .wait(5000);
    cy.get('button[class="next-7afvtf e1phyiqy6"]').click().wait(5000);
    cy.contains("Log out").click();
  });

  it("Second log in and log out", () => {
    cy.logInUser("testowyqa@qa.team", "QA!automation-1");
    cy.get('[id="go-to-the-course-homepage-widget"]')
      .scrollIntoView()
      .should("be.visible")
      .wait(5000);
    cy.get('button[class="next-7afvtf e1phyiqy6"]').click().wait(5000);
    cy.contains("Log out").click();
  });
});

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
