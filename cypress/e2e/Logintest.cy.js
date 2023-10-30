import { Loginpage } from "./Pages/login_test.cy";

const login = new Loginpage();
describe("Login tests", () => {
  it("loginpage", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.wait(3000);
    login.LoginUsername("standard_user");
    login.LoginPassword("secret_sauce");
    login.LoginButton();
  });
  it("loginpage1", () => {
    cy.visit("https://www.saucedemo.com/");
    login.LoginUsername("locked_out_user");
    login.LoginPassword("secret_sauce");
    login.LoginButton();
  });
  it("loginpage2", () => {
    cy.visit("https://www.saucedemo.com/");
    login.LoginUsername("problem_user");
    login.LoginPassword("secret_sauce");
    login.LoginButton();
  });
});
