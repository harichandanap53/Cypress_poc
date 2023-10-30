import { Aboutpage } from "./About.cy";
import { Loginpage } from "./login_test.cy";

export class requestdemofields extends Aboutpage {
  menubuttonclick = '[alt="toggle menu"]';
  requestdemobutton =
    "//body[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/a[1]/button[2]";
  firstname = "#FirstName";
  lastname = "#LastName";
  email = "#Email";
  company = "#Company";
  phonenumber = "#Phone";
  country = "#Country";
  selectoption = "#Solution_Interest__c";
  intrest = "#Solution_Interest__c";
  checkbox1 = "#LblmktoCheckbox_37563_0";
  submitbutton = "button[type='submit']";
  //closebutton = "#LblmktoCheckbox_37543_0";

  requestDemoSignup(contact) {
    cy.get(this.menubuttonclick).click();
    cy.get(this.requestdemobutton).click();

    cy.get(this.firstname).type("chandana");
    cy.get(this.lastname).type("p");
    cy.get(this.email).type("harichandanap53@gmail.com");
    cy.get(this.company).type("qA");
    cy.get(this.phonenumber).type(123456789);

    cy.get(this.country).trigger("India");
    cy.get(this.selectoption).trigger("Sauce Mobile");
    cy.get(this.checkbox1).click();
    cy.get(this.submitbutton).click();

    console.log("Request demo submitted successfully.");
  }
}
