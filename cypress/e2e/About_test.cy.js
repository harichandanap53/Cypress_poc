import { Aboutpage } from "./Pages/About.cy";

const about = new Aboutpage();
it("aboutPage", () => {
  cy.visit("https://www.saucedemo.com");
  about.LoginUsername("standard_user");
  about.LoginPassword("secret_sauce");
  about.LoginButton();
  cy.wait(3000);
  about.aboutButtonPage();
});
