import { Loginpage } from "./login_test.cy";

export class Aboutpage extends Loginpage {
  menubutton = "#react-burger-menu-btn";
  aboutbutton = "#about_sidebar_link";

  aboutButtonPage() {
    cy.get(this.menubutton).click();
    cy.get(this.aboutbutton).click();
  }
}
