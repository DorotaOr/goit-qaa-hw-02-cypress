import loginPage from "../pages/Login.js";
import homePage from "../pages/HomePage.js";

describe("User can visit GoIT page", () => {
  beforeEach("Go to page", () => {
    loginPage.visit();
  });

  it("First log in and log out", () => {
    loginPage.loginUser("user888@gmail.com", "1234567890");
    homePage.checkIfCourseHomePage();
    homePage.goToMenu();
    homePage.proceedToNext();
  });

  it("Second log in and log out", () => {
    loginPage.loginUser("testowyqa@qa.team", "QA!automation-1");
    homePage.checkIfCourseHomePage();
    homePage.goToMenu();
    homePage.proceedToNext();
  });
});
