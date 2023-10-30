///<reference types="cypress"/>
import { Loginpage } from "./login_test.cy";

export class Additemtocart extends Loginpage {
  Addtocart_button = "#add-to-cart-sauce-labs-bike-light";
  Cart_bag = "div[id='shopping_cart_container'] a span";

  AddtocartItem() {
    cy.get(this.Addtocart_button).click();
    cy.get(this.Cart_bag).click().should("have.class", "active");
  }
}
