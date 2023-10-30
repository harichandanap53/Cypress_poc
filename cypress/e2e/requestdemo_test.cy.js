import { requestdemo, requestdemofields } from "./Pages/requestdemopage.cy";

const requestsite = new requestdemofields();
it("request demo", () => {
  cy.visit("https://saucelabs.com");
  // requestsite.LoginUsername("standard_user");
  //requestsite.LoginPassword("secret_sauce");
  //requestsite.LoginButton();
  //requestsite.aboutButtonPage();
  requestsite.requestDemoSignup();
});
