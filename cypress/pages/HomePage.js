class homePage {
  constructor() {
    this.urlKeyword = "homepage";
    this.openMenu = "#open-navigation-menu-mobile";
    this.nextButton = "button.next-bve2vl.e1phyiqy2";
  }

  checkIfCourseHomePage() {
    cy.url().should("include", this.urlKeyword);
  }

  goToMenu() {
    cy.get(this.openMenu).click();
  }

  proceedToNext() {
    cy.get(this.nextButton)
      .contains("Log out")
      .should("exist")
      .should("be.visible")
      .click();
  }
}

export default new homePage();
