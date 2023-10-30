///<reference types="cypress"/>
/// <reference types="cypress-downloadfile"/>

it("fileupload", () => {
  cy.visit("https://trytestingthis.netlify.app");
  cy.get("#myfile").attachFile("example.json");
});
it("filedownload", () => {
  cy.visit("https://trytestingthis.netlify.app");
  cy.downloadFile(
    "https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg",
    "mydownloads",
    "example.jpg"
  );
});
