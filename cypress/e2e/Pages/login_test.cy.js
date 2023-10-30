export class Loginpage {
  Login_username = "#user-name";
  Login_password = "#password";
  Login_button = "#login-button";

  LoginUsername(username) {
    cy.get(this.Login_username).type(username);
  }
  LoginPassword(password) {
    cy.get(this.Login_password).type(password);
  }
  LoginButton() {
    cy.get(this.Login_button).click();
  }
}
