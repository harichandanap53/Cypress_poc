import { cartitemcheckoutfields } from "./Pages/Checkout.cy";
import { Loginpage } from "./Pages/login_test.cy";
import { Additemtocart } from "./Pages/additemtocart.cy";

let itemcheckout = new cartitemcheckoutfields();

it("checkout item successfull", () => {
  cy.visit("https://www.saucedemo.com/");
  cy.wait(3000);
  itemcheckout.LoginUsername("standard_user");
  itemcheckout.LoginPassword("secret_sauce");
  itemcheckout.LoginButton();
  itemcheckout.AddtocartItem();

  itemcheckout.checkoutYourInformation();
});
