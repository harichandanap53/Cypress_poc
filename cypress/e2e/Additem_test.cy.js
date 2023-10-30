import { Additemtocart } from "./Pages/additemtocart.cy";
import { Loginpage } from "./Pages/login_test.cy";

const additem = new Additemtocart();
it("Item add to cart successfully", () => {
  cy.visit("https://www.saucedemo.com");
  cy.wait(3000);
  additem.LoginUsername("standard_user");
  additem.LoginPassword("secret_sauce");
  additem.LoginButton();
  additem.AddtocartItem();
});
