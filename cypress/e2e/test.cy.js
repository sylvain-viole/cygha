describe("this is a test", () => {
  it("should see Bienvenue !", () => {
    cy.visit("https://sylvain-viole.github.io/cygha/src");
    cy.contains("Bienvenue !").should("be.visible");
  });
});
