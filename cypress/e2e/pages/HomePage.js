class homePage {
  constructor() {
    this.courseHomePageWidget = 'url "include", "/homepage"';
    this.openMenu = "#open-navigation-menu-mobile";
    this.nextButton = "button.next-bve2vl.e1phyiqy2";
  }

  goToCourseHomePage() {
    cy.get(this.courseHomePageWidget);
  }

  goToMenu() {
    cy.get(this.openMenu);
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
