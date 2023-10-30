describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://google.com");
    cy.get("#APjFqb").type("test automation{Enter}");
    // cy.get(".aajZCb > .lJ9FBc > center > .gNO89b").click();
  });
});
